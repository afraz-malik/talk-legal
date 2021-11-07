<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Refund;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RefundController extends Controller
{
    public function getRefund(Request $request)
    {
        $card = Refund::where('user_id',Auth::user()->id)->get();
        return response([
        'response' => '200',
        'data' => $card
        ]);
    }
    public function applyOfRefund(Request $request)
    {
        Validator::make($request->all(), [
            'payment_id' => 'required|exists:payments,id',
            'reason' => 'nullable|string',
            'amount' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        ])->validate();

        $time_limit = Carbon::now()->subDays(15)->toDateTimeString();

        $payment = Payment::where('id',$request->payment_id)->firstOrFail();
    
        if($payment->created_at <= $time_limit){
            abort(404,"you can apply for refund within 15 days");
        }
        $already = Refund::where('payment_id',$request->payment_id)->first();
        abort_if( isset($already), 404, "You have Already appllied for refund" );

        Refund::create([
            'user_id' => Auth::user()->id,
            'payment_id'  => $request->payment_id,
            'amount'  => $request->amount,
            'reason' => $request->reason,
            'status' => 'pending'
        ]);

        return response([
        'response' => '200',
        'message' => 'Refund request sended successfully. Admin will approve request soon.',
        'data' => ''
        ]);
    }
}
