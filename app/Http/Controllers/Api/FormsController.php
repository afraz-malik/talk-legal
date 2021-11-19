<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\SubscriptionPlans;
use App\Models\AddOnAttornyConsulting;
use App\Models\User;
use App\Models\Form;

use Illuminate\Validation\Rules\Password as RulesPassword;

class FormsController extends Controller
{
  public function getForm(Request $request)
  {
    $form = Form::find($request->id);
    return response([
      'response' => '200',
      'data' => $form
    ]);
  }
 
}
