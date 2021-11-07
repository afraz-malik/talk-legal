<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AccountCard;
use App\Models\Payment;
use App\Models\PaymentDetail;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Omnipay\Omnipay;

class PaymentController extends Controller
{

    public $gateway;

    public function __construct()
    {

        $this->gateway = Omnipay::create(env('PAYMENT_GATEWAY'));
        $this->gateway->setAuthName(env('PAYMENT_AUTH_NAME'));
        $this->gateway->setTransactionKey(env('PAYMENT_TRANSACYION_KEY'));
        $this->gateway->setTestMode(true); //comment this line when move to 'live'


    }
    public function getPayments(Request $request)
    {
        $payment = Payment::where('user_id',Auth::user()->id)->get();
        return response([
        'response' => '200',
        'data' => $payment
        ]);
    }
    public function paymentCharge(Request $request)
    {
        Validator::make($request->all(), [
            'card_id' => 'nullable|integer',
            'wallet_id' => 'nullable|integer',
            'plan_id' => 'nullable|integer',
            'plan_amount' => 'nullable|numeric|regex:/^\d+(\.\d{1,2})?$/',
            'wallet_amount' => 'nullable|numeric|regex:/^\d+(\.\d{1,2})?$/',
            'addon_fields' => 'nullable|string',
            'amount' => 'required|integer',
            'payment_type' => 'required|in:1,2', // 1= one-time 2=subscription
            
            
        ])->validate();

        if(!$request->card_id){  
            Validator::make($request->all(), [
            'card_holder_name' => 'required|string|max:100',
            'card_number' => 'required|integer|min:0000000000000000|max:9999999999999999',
            'expiry_year' => 'required|integer|max:9999|min:'.date("Y"),
            'expiry_month' => 'required|integer|in:01,02,03,04,05,06,07,08,09,10,11,12',
            'cvv' => 'required|integer|max:999',
            ])->validate();
        }

        if($request->amount != 0){
            Validator::make($request->all(), [
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'phone' => 'required|string|max:100',
            'address' => 'required|string|max:150',
            'country' => 'required|string|max:150',
            'zip_code' => 'required|string|max:150',
            'state' => 'required|string|max:150',
            ])->validate();
        }

        if($request->wallet_id && $request->wallet_amount > 0){

            $wallet = Wallet::where('user_id',Auth::user()->id)->where('id',$request->wallet_id)->first();
            
            if($wallet && $wallet->remaining_amount >= $request->wallet_amount){
                
                $remaining_amount = $wallet->remaining_amount - $request->wallet_amount;
                $wallet->update([
                    'remaining_amount' => 0,
                    'is_used' => 1
                ]);

                Wallet::create([
                    'user_id' => Auth::user()->id,
                    'total_amount' => $wallet->remaining_amount,
                    'remaining_amount' => $remaining_amount,
                    'is_used' => 0
                ]);
            }else{
                abort(404,'Wallet not found');
            }
        }

        if($request->amount == 0){

            $payment =  $this->addPaymentDetail($request);

            return response(['message' => 'payment done successfully','response' => '200','payment' => $payment]);
        }
        $is_error = 0;
        try {
            $creditCard = new \Omnipay\Common\CreditCard([
                'number' => $request->input('card_number'),
                'expiryMonth' => $request->input('expiry_month'),
                'expiryYear' => $request->input('expiry_year'),
                'cvv' => $request->input('cvv'),
            ]);
            // Generate a unique merchant site transaction ID.

            $transactionId = $this->getUniqueid();

            $final_transaction = (float)($request->amount);

            $response = $this->gateway->authorize([
                'amount' => $final_transaction,
                'currency' => 'USD',
                'transactionId' => $transactionId,
                'card' => $creditCard,
            ])->send();

            if ($response->isSuccessful()) {

                // Captured from the authorization response.
                $transactionReference = $response->getTransactionReference();

                $response = $this->gateway->capture([
                    'amount' => $final_transaction,
                    'currency' => 'USD',
                    'transactionReference' => $transactionReference,
                ])->send();

                $transaction_id = $response->getTransactionReference();
                $request['transaction_id'] = $transaction_id;
                
                if(!$request->card_id && $request->card_number){
                    $cardAdded = $this->addPaymentCard($request);
                    $request['card_id'] = $cardAdded->id;
                }

                $payment =  $this->addPaymentDetail($request);
                
                return response(['response' => '200', 'message' => $response->getMessage(), 'is_error' => $is_error, 'transaction_id' => $transaction_id, ]);
            } else {

                // not successful
                $is_error = 1;
                return response(['message' => $response->getMessage(), 'is_error' => $is_error, 'transaction_id' => '','response' => '403',]);
            }
        } catch (Exception $e) {
            $is_error = 1;
            return response(['message' => $e->getMessage(), 'is_error' => $is_error, 'transaction_id' => '','response' => '403']);
        }
    }

    public function refundAmountTest()
    {

        $creditCard = new \Omnipay\Common\CreditCard([
            'number' => '370000000000002',
            'expiryMonth' => '12',
            'expiryYear' => '2025',
            'cvv' => '123',
        ]);
        $response = $this->gateway->refund([
            'amount' => '327.70',
            'currency' => 'USD',
            'transactionReference' => '60171594861',
            'transactionType' => 'refundTransaction',
            'card' => $creditCard,
        ])->send();
        return  $response->getMessage();
        dd($response);
    }
    public function getUniqueid()
    {
        $id =  rand(100000000, 999999999);
        return $id;
    }

    private function addPaymentCard($request){
        AccountCard::where('user_id',Auth::user()->id)->update([ 'is_active' => 0]);
        
        $card = AccountCard::updateOrCreate([
            'card_number' => $request->card_number,
            'user_id' => Auth::user()->id,
        ],[
            'card_holder_name' => $request->card_holder_name,
            'card_number' => $request->card_number,
            'expiry_month' => $request->expiry_month,
            'expiry_year' => $request->expiry_year,
            'cvv' => $request->cvv,
            'is_active' => 1,
            'user_id' => Auth::user()->id,
        ]); 
        return $card;
    }
    private function addPaymentDetail($request){

        $createPayment = Payment::create([
            'card_id' => $request->card_id ? $request->card_id : null,
            'wallet_id' => $request->wallet_id,
            'transaction_id' => $request->transaction_id ? $request->transaction_id : null,
            'plan_id' => $request->plan_id,
            'payment_type' => $request->payment_type,
            'amount' => $request->amount,
            'status' => 1,
            'user_id' => Auth::user()->id,
        ]);

        $createPaymentDetail = PaymentDetail::create([
            'payment_id' => $createPayment->id,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'address' => $request->address,
            'country' => $request->country,
            'zip_code' => $request->zip_code,
            'state' => $request->state,
            'phone' => $request->phone,
            'plan_amount' => $request->plan_amount ? $request->plan_amount : 0,
            'wallet_amount' => $request->wallet_amount ? $request->wallet_amount: 0,
            'addon_fields' => $request->addon_fields,
        ]);

        return $createPayment;
    }

}
