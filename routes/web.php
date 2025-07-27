<?php

use App\Http\Controllers\FrontController;
use App\Http\Controllers\PayuController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Route::get('/', [FrontController::class, 'index'])->name('home');
Route::get('/courses', [FrontController::class, 'courses'])->name('courses');
Route::get('/course/{id}', [FrontController::class, 'course'])->name('course');
Route::get('/search', [FrontController::class, 'search'])->name('search');
Route::get('/about-us', [FrontController::class, 'aboutUs'])->name('about-us');
Route::get('/contact-us', [FrontController::class, 'contactUs'])->name('contact-us');
Route::get('/terms-and-conditions', [FrontController::class, 'termAndCondition'])->name('term-and-condition');
Route::get('/privacy-policy', [FrontController::class, 'privacyPolicy'])->name('privacy-policy');


// Checkout
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
