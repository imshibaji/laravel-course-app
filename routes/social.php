<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

Route::get('/auth/google/redirect', function () {
    return Socialite::driver('google')->redirect();
})->name('google.login');

Route::get('/auth/google/callback', function () {
    try {
        $user = Socialite::driver('google')->user();
        // dd($user); // Debugging line to check the user data
        $user = User::updateOrCreate([
            'google_id' => $user->id,
        ], [
            'firstname' => ($user->user['given_name']) ?? explode(' ', $user->name)[0],
            'lastname' => ($user->user['family_name']) ?? explode(' ', $user->name)[1] ?? null,
            'mobile' => null, // Mobile may not be available from Google
            'email' => $user->email,
            'password' => bcrypt(Str::random(16)), // Generate a random password
            'avatar' => $user->avatar,
            'google_token' => $user->token,
            'google_refresh_token' => $user->refreshToken,
        ]);

        Auth::login($user);
        return redirect('/dashboard')->with('success', 'Login successful');
    } catch (\Exception $e) {
        return redirect('/login')->with('error', 'Login failed');
    }
});

// Facebook Socialite configuration
Route::get('/auth/facebook/redirect', function () {
    return Socialite::driver('facebook')->redirect();
})->name('facebook.login');

Route::get('/auth/facebook/callback', function () {
    try {
        $user = Socialite::driver('facebook')->user();

        dd($user); // Debugging line to check the user data

        $user = User::updateOrCreate([
            'facebook_id' => $user->id,
        ], [
            'firstname' => explode(' ', $user->name)[0],
            'lastname' => explode(' ', $user->name)[1] ?? null,
            'mobile' => null, // Mobile may not be available from Facebook
            'email' => $user->email,
            'password' => bcrypt(Str::random(16)), // Generate a random password
            'facebook_id' => $user->id,
            'facebook_token' => $user->token,
            'facebook_refresh_token' => $user->refreshToken,
        ]);

        Auth::login($user);

        return redirect('/dashboard')->with('success', 'Login successful');
    } catch (\Throwable $th) {
        return redirect('/login')->with('error', $th->getMessage());
    }
});
