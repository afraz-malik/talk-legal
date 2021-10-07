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
Route::get('mutual-non-disclosuer-document/{user_id}', [\App\Http\Controllers\Api\MutualNoneDisclosureDocumentController::class, 'aggrement']);
Route::get('/', function () {
    return ('welcome');
 });
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::get('get-subscription-plan/{user_id}', [\App\Http\Controllers\Api\SubscriptionPlansController::class, 'userPlan']);
        Route::get('subscribe-plan/{user_id}/{subscription_plan_id}', [\App\Http\Controllers\Api\SubscriptionPlansController::class, 'subscribePlan']);
        Route::get('subscribe-add-on/{user_id}/{add_on_id}', [\App\Http\Controllers\Api\SubscriptionPlansController::class, 'subscribeAddOn']);
    });
    Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
});
