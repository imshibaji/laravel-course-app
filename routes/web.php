<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', [FrontController::class, 'index'])->name('home');
Route::get('/courses', [FrontController::class, 'courses'])->name('home');
Route::get('/checkout', [FrontController::class, 'checkout'])->name('checkout');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
       if (Auth::check() && Auth::user()->role === 'admin') {
            return redirect()->route('admin.dashboard');
        }else {
            return redirect()->route('user.dashboard');
        }
    })->name('dashboard');

    // Admin routes
    Route::get('/admin', function () {
        return redirect()->route('admin.dashboard');
    })->name('admin');
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/admin/course', [AdminController::class, 'course'])->name('admin.course');
    Route::get('/admin/course/{id}', [AdminController::class, 'course'])->name('admin.course');
    Route::get('/admin/live', [AdminController::class, 'live'])->name('admin.live');
    Route::get('/admin/profile', [AdminController::class, 'profile'])->name('admin.profile');

    Route::prefix('admin')->group(function () {
        Route::resource('courses', App\Http\Controllers\Admin\CourseController::class)->names('admin.courses');
        Route::resource('chapters', App\Http\Controllers\Admin\ChapterController::class)->names('admin.chapters');
    });

    // User routes
    Route::get('/user', function () {
        return redirect()->route('user.dashboard');
    })->name('user');
    Route::get('/user/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
    Route::get('/user/course', [UserController::class, 'course'])->name('user.course');
    Route::get('/user/course/{id}', [UserController::class, 'course'])->name('user.course');
    Route::get('/user/profile', [UserController::class, 'profile'])->name('user.profile');
    Route::get('/user/live', [UserController::class, 'live'])->name('user.live');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/social.php';
