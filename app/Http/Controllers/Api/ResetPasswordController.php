<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\DB;
use App\Models\User;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Validation\Rules\Password as RulesPassword;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

class ResetPasswordController extends Controller
{
    public function forgotPassword(Request $request)
    {

        $authUser = auth()->user();

        $request->validate([
            'email' => 'required|email',
        ]);
        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            return [
                'status' => __($status),
                'response' => '200'

            ];
        }

        return response([
            'message' => __($status),
            'response' => '500'
        ]);
    }
    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:6',

        ]);
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                $user->tokens()->delete();

                event(new PasswordReset($user));
            }
        );
        if ($status == Password::PASSWORD_RESET) {
            return response([
                'message' => 'Password reset successfully',
                'response' => '200'
            ]);
        }
        return response([
            'message' => __($status),
            'response' => '500'
        ]);
    }
}
