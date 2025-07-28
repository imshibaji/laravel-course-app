<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Course;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function dashboard()
    {
        $courses = Course::where('status', 'published')->orderBy('order', 'asc')->get();
        return inertia('users/dashboard', ['courses' => $courses]);
    }

    public function courses()
    {
        $courses = Course::orderBy('order', 'asc')->get();
        return inertia('users/courses', ['courses' => $courses]);
    }

    public function course($id)
    {
        $course = Course::find($id);
        $chapters = Chapter::where('course_id', $id)->orderBy('order', 'asc')->get();
        return inertia('users/course', [
            'course' => $course,
            'chapters' => $chapters,
        ]);
    }
    public function live()
    {
        return inertia('users/live');
    }
}
