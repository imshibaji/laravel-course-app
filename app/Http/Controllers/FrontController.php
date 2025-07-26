<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return inertia('frontend/welcome', ['courses' => $courses]);
    }
    public function courses()
    {
        $courses = Course::all();
        return inertia('frontend/courses', ['courses' => $courses]);
    }
    public function course($id)
    {
        $course = Course::find($id);
        $chapters = $course->chapters;
        return inertia('frontend/course', [
            'chapters' => $chapters,
        ]);
    }
    public function search(Request $request)
    {
        $search = $request->input('s');
        $courses = Course::where('title', 'like', '%' . $search . '%')->get();
        return inertia('frontend/search', ['courses' => $courses]);
    }
    public function aboutUs()
    {
        return inertia('frontend/about');
    }
    public function contactUs()
    {
        return inertia('frontend/contact');
    }
    public function termAndCondition()
    {
        return inertia('frontend/terms');
    }
    public function privacyPolicy()
    {
        return inertia('frontend/privacy');
    }
    public function checkout(Request $request)
    {
        $course = Course::find($request->input('course'));
        $user = (auth()->user()) ? auth()->user() : null;
        return inertia('frontend/checkout', ['course' => $course, 'user' => $user]);
    }

    public function payNow(Request $request)
    {
        return $request->all();
    }
}
