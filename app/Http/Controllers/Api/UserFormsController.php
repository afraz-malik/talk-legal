<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\SubscriptionPlans;
use App\Models\AddOnAttornyConsulting;
use App\Models\User;
use App\Models\UserForms;

use Illuminate\Validation\Rules\Password as RulesPassword;

class UserFormsController extends Controller
{
  public function getUserForm(Request $request)
  {
    $form = User::find($request->user_id)->UserForm->where('id',$request->form_id);
    return response([
      'response' => '200',
      'data' => $form
    ]);
    
  }
}
