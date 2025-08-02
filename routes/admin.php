<?php
// Admin routes

use App\Http\Controllers\Admin\ChapterController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\LearningController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/admin', function () {
        return redirect()->route('admin.dashboard');
    })->name('admin');
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/admin/course', [AdminController::class, 'course'])->name('admin.courses');
    Route::get('/admin/course/{id}', [AdminController::class, 'course'])->name('admin.course');
    Route::get('/admin/live', [AdminController::class, 'live'])->name('admin.live');

    Route::prefix('admin')->group(function () {
        Route::get('courses/search', [CourseController::class, 'search'])->name('admin.courses.search');
        Route::get('courses/trashed', [CourseController::class, 'trashed'])->name('admin.courses.trashed');
        Route::get('courses/restore/{id}', [CourseController::class, 'restore'])->name('admin.courses.restore');
        Route::delete('courses/delete/{id}', [CourseController::class, 'forceDelete'])->name('admin.courses.forceDelete');
        Route::put('courses/sort', [CourseController::class, 'sort'])->name('admin.courses.sort');
        Route::resource('courses', CourseController::class)->names('admin.courses');

        Route::get('chapters/search', [ChapterController::class, 'search'])->name('admin.chapters.search');
        Route::get('chapters/trashed', [ChapterController::class, 'trashed'])->name('admin.chapters.trashed');
        Route::get('chapters/restore/{id}', [ChapterController::class, 'restore'])->name('admin.chapters.restore');
        Route::delete('chapters/delete/{id}', [ChapterController::class, 'forceDelete'])->name('admin.chapters.forceDelete');
        Route::put('chapters/sort', [ChapterController::class, 'sort'])->name('admin.chapters.sort');
        Route::resource('chapters', ChapterController::class)->names('admin.chapters');

        Route::get('settings/search', [SettingController::class, 'search'])->name('admin.settings.search');
        Route::get('settings/trashed', [SettingController::class, 'trashed'])->name('admin.settings.trashed');
        Route::get('settings/restore/{id}', [SettingController::class, 'restore'])->name('admin.settings.restore');
        Route::delete('settings/delete/{id}', [SettingController::class, 'forceDelete'])->name('admin.settings.forceDelete');
        Route::put('settings/sort', [SettingController::class, 'sort'])->name('admin.settings.sort');
        Route::resource('settings', SettingController::class)->names('admin.settings');

        Route::put('orders/sort', [OrderController::class, 'sort'])->name('admin.orders.sort');
        Route::resource('orders', OrderController::class)->names('admin.orders');

        Route::put('learnings/sort', [LearningController::class, 'sort'])->name('admin.learnings.sort');
        Route::resource('learnings', LearningController::class)->names('admin.learnings');

        Route::put('reviews/sort', [ReviewController::class, 'sort'])->name('admin.reviews.sort');
        Route::resource('reviews', ReviewController::class)->names('admin.reviews');
        Route::resource('users', UserController::class)->names('admin.users');
    });
});
