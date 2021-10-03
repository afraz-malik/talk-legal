<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
//        return gettype($request);
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required',
            'phone' => 'required'
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        // $user->attachRole('host');
        // $user->attachRole('professional');
        $accessToken = $user->createToken('authToken');

        return response(['user' => $user, 'access_token' => $accessToken], 201);
    }

       public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($loginData)) {
            return response(['message' => 'This User does not exist, check your details'], 400);
        }

        $accessToken = auth()->user()->createToken('authToken');
        return response(['user' => auth()->user(), 'access_token' => $accessToken]);

    }
    public function logout(Request $request)
    {
        $accessToken = auth()->user()->tokens()->delete();

        return response(['Response' => 'Successfully Logout']);
    }

}
