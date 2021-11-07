<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WalletController extends Controller
{
    public function getBalance(Request $request)
    {
        $balance = Wallet::where('user_id',Auth::user()->id)->where('is_used',0)->sum('remaining_amount');
        return response([
        'response' => '200',
        'message' => 'User Remaining balance is '.$balance,
        'data' => $balance
        ]);
    }
}
