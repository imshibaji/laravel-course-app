<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function dashboard()
    {
        $courses = Course::where('status', 'published')->get();
        return inertia('users/dashboard', ['courses' => $courses]);
    }

    public function courses()
    {
        $courses = Course::all();
        return inertia('users/courses', ['courses' => $courses]);
    }

    public function course($id)
    {
        $course = Course::find($id);
        $chapters = $course->chapters;
        return inertia('users/course', [
            'chapters' => $chapters,
        ]);
    }
    public function live()
    {
        return inertia('users/live');
    }
}
