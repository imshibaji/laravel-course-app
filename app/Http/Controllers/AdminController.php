<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Course;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $courses = Course::orderBy('order', 'asc')->get();
        return inertia('admin/dashboard', ['courses' => $courses]);
    }

    public function course($id)
    {
        $course = Course::find($id);
        $chapters = Chapter::where('course_id', $id)->orderBy('order', 'asc')->get();
        return inertia('admin/course', [
            'course' => $course,
            'chapters' => $chapters,
        ]);
    }
    public function live()
    {
        return inertia('admin/live');
    }
}
