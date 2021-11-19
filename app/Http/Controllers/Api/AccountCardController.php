<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AccountCard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AccountCardController extends Controller
{

    public function index(Request $request)
    {
        $card = AccountCard::where('user_id',Auth::user()->id)->get();
        return response([
        'response' => '200',
        'data' => $card
        ]);
    }

    public function getCard(Request $request)
    {
        $card = AccountCard::where('is_active',1)->where('user_id',Auth::user()->id)->FirstorFail();
        return response([
        'response' => '200',
        'data' => $card
        ]);
    }
    public function createCard(Request $request)
    {
        
        Validator::make($request->all(), [
            'card_holder_name' => 'required|string|max:100',
            'card_number' => 'required|integer|min:0000000000000000|max:9999999999999999',
            'expiry_year' => 'required|integer|max:9999|min:'.date("Y"),
            'expiry_month' => 'required|integer|in:01,02,03,04,05,06,07,08,09,10,11,12',
            'cvv' => 'required|integer|max:999',
            'is_active' => 'required|in:0,1',
        ])->validate();

        if ($request->is_active == 1) {
            AccountCard::where('user_id',Auth::user()->id)->update([ 'is_active' => 0]);
        }
        
        $card = AccountCard::create([
            'card_holder_name' => $request->card_holder_name,
            'card_number' => $request->card_number,
            'expiry_year' => $request->expiry_year,
            'expiry_month' => $request->expiry_month,
            'cvv' => $request->cvv,
            'is_active' => $request->is_active,
            'user_id' => Auth::user()->id,
        ]);
       
        return response([
        'response' => '200',
        'message' => 'Card Created Successfully',
        'data' => $card
        ]);
    }
    public function updateCard(Request $request)
    {
        Validator::make($request->all(), [
            'id' => 'required|integer|exists:account_cards,id',
            'card_holder_name' => 'required|string|max:100',
            'card_number' => 'required|integer|min:0000000000000000|max:9999999999999999',
            'expiry_year' => 'required|integer|max:9999|min:'.date("Y"),
            'expiry_month' => 'required|integer|in:01,02,03,04,05,06,07,08,09,10,11,12',
            'cvv' => 'required|integer|max:999',
            'is_active' => 'required|in:0,1',
          ])->validate();

        if ($request->is_active == 1) {
            AccountCard::where('user_id',Auth::user()->id)->update([ 'is_active' => 0]);
        }
        
        $card = AccountCard::where('id',$request->id)->update([
            'card_holder_name' => $request->card_holder_name,
            'card_number' => $request->card_number,
            'expiry_year' => $request->expiry_year,
            'expiry_month' => $request->expiry_month,
            'cvv' => $request->cvv,
            'is_active' => $request->is_active,
            'user_id' => Auth::user()->id,
        ]);
       
        return response([
        'response' => '200',
        'message' => 'Card updated successfully',
        'data' => $card
        ]);
    }
    public function deleteCard($id)
    {
        $card = AccountCard::FindorFail($id);
        
        abort_if(Auth::user()->id != $card->user_id, 403);

        $card->delete();

        return response([
        'response' => '200',
        'message' => 'Card updated successfully',
        ]);
    }
}
