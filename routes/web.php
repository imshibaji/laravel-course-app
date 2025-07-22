<?php

use App\Http\Controllers\FrontController;
use App\Http\Controllers\InstallController;
use App\Http\Controllers\PayuController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

//install route
Route::get('/install', [InstallController::class, 'step1'])->name('install.step1');
Route::post('/install/step1', [InstallController::class, 'postStep1'])->name('install.postStep1');
Route::get('/install/step2', [InstallController::class, 'step2'])->name('install.step2');
Route::post('/install/step2', [InstallController::class, 'postStep2'])->name('install.postStep2');
Route::get('/install/step3', [InstallController::class, 'step3'])->name('install.step3');
Route::post('/install/finish', [InstallController::class, 'finish'])->name('install.finish');
Route::get('/install/step4', [InstallController::class, 'step4'])->name('install.step4');
Route::post('/install/complete', [InstallController::class, 'complete'])->name('install.complete');



Route::get('/', [FrontController::class, 'index'])->name('home');
Route::get('/courses', [FrontController::class, 'courses'])->name('home');
Route::get('/checkout', [FrontController::class, 'checkout'])->name('checkout');
Route::post('/payNow', [FrontController::class, 'payNow'])->name('payNow');

// Payu Payment Routes
Route::get('/payu', [PayuController::class, 'showForm'])->name('payu.form');
Route::post('/payu/pay', [PayuController::class, 'initiatePayment'])->name('payu.pay');
Route::post('/payu/response', [PayuController::class, 'handleResponse'])->name('payu.response');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
       if (Auth::check() && Auth::user()->role === 'admin') {
            return redirect()->route('admin.dashboard');
        }else {
            return redirect()->route('user.dashboard');
        }
    })->name('dashboard');

    // User routes
    Route::get('/user', function () {
        return redirect()->route('user.dashboard');
    })->name('user');
    Route::get('/user/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
    Route::get('/user/courses', [UserController::class, 'courses'])->name('user.courses');
    Route::get('/user/course/{id}', [UserController::class, 'course'])->name('user.course');
    Route::get('/user/profile', [UserController::class, 'profile'])->name('user.profile');
    Route::get('/user/live', [UserController::class, 'live'])->name('user.live');
});

require __DIR__.'/admin.php';
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/social.php';
