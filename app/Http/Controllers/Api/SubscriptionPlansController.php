<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\SubscriptionPlans;
use App\Models\AddOnAttornyConsulting;
use App\Models\User;
use Illuminate\Validation\Rules\Password as RulesPassword;

class SubscriptionPlansController extends Controller
{
  public function getPlans()
  {

    $plans = SubscriptionPlans::with('addOn')->get();
    return response([
      'message' => 'success',
      'response' => '200',
      'data' => $plans
    ]);
  }

  public function userPlan(Request $request)
  {
    $user_plan = User::where('id', $request->user_id)->with('subscriptionPlan','addOn')->get();
    return response([
      'message' => 'success',
      'response' => '200',
      'data' => $user_plan
    ]);
  }
  public function subscribePlan(Request $request)
  {
    $result = User::where('id', $request->user_id)->update(['subscription_plan_id' => $request->subscription_plan_id]);
    return response([
      'message' => 'success ',
      'response' => '200',
    ]);
  }
  public function subscribeAddOn(Request $request)
  {
    $result = User::where('id', $request->user_id)
    ->update([
      'add_on_id' => $request->add_on_id
    ]);
    return response([
      'message' => 'success ',
      'response' => '200',
        ]);
  }
}
