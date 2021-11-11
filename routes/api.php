<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('booking', \App\Http\Controllers\BookingController::class);

Route::post('register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('forgot-password', [\App\Http\Controllers\Api\ResetPasswordController::class, 'forgotPassword']);
Route::post('reset-password', [\App\Http\Controllers\Api\ResetPasswordController::class, 'resetPassword']);
Route::post('get-subscription-plans', [\App\Http\Controllers\Api\SubscriptionPlansController::class, 'getPlans']);
Route::get('get-form/{id}', [\App\Http\Controllers\Api\FormsController::class, 'getForm']);
Route::get('mutual-non-disclosuer-document/{user_id}', [\App\Http\Controllers\Api\MutualNoneDisclosureDocumentController::class, 'aggrement']);


Route::get('all-legal-forms', [\App\Http\Controllers\LegalFormApiController::class, 'getAllForms']);
Route::get('legal-form-detail/{id}', [\App\Http\Controllers\LegalFormApiController::class, 'getLegalForm']);
Route::post('add-legal-form', [\App\Http\Controllers\LegalFormApiController::class, 'AddNewLegalForm']);

Route::post('submit-legal-form', [\App\Http\Controllers\LegalFormApiController::class, 'submitLegalForm']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::get('get-user-form/{user_id}/{form_id}', [\App\Http\Controllers\Api\UserFormsController::class, 'getUserForm']);
        Route::get('get-subscription-plan/{user_id}', [\App\Http\Controllers\Api\SubscriptionPlansController::class, 'userPlan']);
        Route::get('subscribe-plan/{user_id}/{subscription_plan_id}', [\App\Http\Controllers\Api\SubscriptionPlansController::class, 'subscribePlan']);
        Route::get('subscribe-add-on/{user_id}/{add_on_id}', [\App\Http\Controllers\Api\SubscriptionPlansController::class, 'subscribeAddOn']);
        
        // get user account card details
        Route::get('user-cards', [\App\Http\Controllers\Api\AccountCardController::class, 'index']);
        Route::get('user-card', [\App\Http\Controllers\Api\AccountCardController::class, 'getCard']);
        Route::post('update-user-card', [\App\Http\Controllers\Api\AccountCardController::class, 'updateCard']);
        Route::post('create-user-card', [\App\Http\Controllers\Api\AccountCardController::class, 'createCard']);
        Route::delete('delete-user-card/{id}', [\App\Http\Controllers\Api\AccountCardController::class, 'deleteCard']);
        // get user wallet balance
        Route::get('payments', [\App\Http\Controllers\Api\PaymentController::class, 'getPayments']);
        Route::get('user-wallet-balance', [\App\Http\Controllers\Api\WalletController::class, 'getBalance']);
        // user subscription payment
        Route::post('plan-payment', [\App\Http\Controllers\Api\PaymentController::class, 'paymentCharge']);

        // user Refund history
        Route::get('refund', [\App\Http\Controllers\Api\RefundController::class, 'getRefund']);
        Route::post('apply-for-refund', [\App\Http\Controllers\Api\RefundController::class, 'applyOfRefund']);
    });
    Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
});
