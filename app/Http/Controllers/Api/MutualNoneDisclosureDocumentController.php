<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\SubscriptionPlans;
use App\Models\AddOnAttornyConsulting;
use App\Models\User;
use Illuminate\Validation\Rules\Password as RulesPassword;

class MutualNoneDisclosureDocumentController extends Controller
{
  public function aggrement(Request $request)
  {

    $result = User::where('id', $request->user_id)->with('mutualNoneDisclosureDocument')->get();
    return response([
      'message' => 'success ',
      'response' => '200',
      'data' => $result
    ]);
  }
}
