<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function index()
    {
        $courses = Course::where('status', 'published')->get();
        return inertia('welcome', ['courses' => $courses]);
    }
    public function courses()
    {
        $courses = Course::where('status', 'published')->get();
        return inertia('courses', ['courses' => $courses]);
    }
    public function checkout(Request $request)
    {
        $course = Course::find($request->input('course'));
        $user = (auth()->user()) ? auth()->user() : null;
        return inertia('checkout', ['course' => $course, 'user' => $user]);
    }

    public function payNow(Request $request)
    {
        return $request->all();
    }
}
