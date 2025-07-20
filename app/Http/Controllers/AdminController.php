<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $courses = Course::all();
        return inertia('admin/dashboard', ['courses' => $courses]);
    }

    public function profile()
    {
        $user = auth()->user();
        return inertia('admin/profile', ['user' => $user]);
    }

    public function course($id)
    {
        $course = Course::find($id);
        $chapters = $course->chapters;
        return inertia('admin/course', [
            'chapters' => $chapters,
        ]);
    }
    public function live()
    {
        return inertia('admin/live');
    }
}
