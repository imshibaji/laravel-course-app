<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::all();
        return inertia('admin/courses/index', ['courses' => $courses]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('admin/courses/create');
    }

    private function uploadImage(Request $request, $course){
        // Uploaded images rename and move to images/courses or images/certificates folder with check if file exist or not
        $image = $request->file('image') ?? null;
        if($image){
            $image_name = $course->slug . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/courses'), $image_name);
            $course->image = $image_name;
        }else{
            $course->image = $course->image ?? null;
        }
        $certificate = $request->file('certificate') ?? null;
        if($certificate){
            $certificate_name = $course->slug . '.' . $certificate->getClientOriginalExtension();
            $certificate->move(public_path('images/certificates'), $certificate_name);
            $course->certificate = $certificate_name;
        }else{
            $course->certificate = $course->certificate ?? null;
        }
        return $course;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $course = new Course();
        $course->title = $request->input('title');
        $title_to_slug = $request->input('title');
        $title_to_slug = str_replace(' ', '-', strtolower($title_to_slug));
        $course->slug = $request->input('slug') ? $request->input('slug') : $title_to_slug;
        $course->description = $request->input('description');
        $course->price = $request->input('price');
        $course->offer_price = $request->input('offer_price');
        $course->category = $request->input('category');
        $course->language = $request->input('language');
        $course->level = $request->input('level');
        $course->duration = $request->input('duration');
        $course->instructor = $request->input('instructor');
        $course->tags = $request->input('tags');
        $course->status = $request->input('status');
        $course = $this->uploadImage($request, $course);
        $course->save();
        return to_route('admin.courses.show', $course->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $course = Course::find($id);
        return inertia('admin/courses/show', ['course' => $course]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $course = Course::find($id);
        return inertia('admin/courses/edit',['course' => $course]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $course = Course::find($id);
        $course->title = $request->input('title') ?? $course->title;
        $title_to_slug = $request->input('title') ?? $course->title;
        $title_to_slug = str_replace(' ', '-', strtolower($title_to_slug));
        $course->slug = $request->input('slug') ? $request->input('slug') : $title_to_slug;
        $course->description = $request->input('description') ?? $course->description;
        $course->price = $request->input('price') ?? $course->price;
        $course->offer_price = $request->input('offer_price') ?? $course->offer_price;
        $course->category = $request->input('category') ?? $course->category;
        $course->language = $request->input('language') ?? $course->language;
        $course->level = $request->input('level') ?? $course->level;
        $course->duration = $request->input('duration') ?? $course->duration;
        $course->instructor = $request->input('instructor') ?? $course->instructor;
        $course->tags = $request->input('tags') ?? $course->tags;
        $course->status = $request->input('status') ?? $course->status;
        $course = $this->uploadImage($request, $course);
        $course->save();

        return to_route('admin.courses.show', $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $course = Course::find($id);
        $course->delete();
        return to_route('admin.courses.index');
    }
}
