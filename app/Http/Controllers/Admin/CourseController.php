<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Chapter;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::orderBy('order', 'asc')->get();
        return inertia('admin/courses/index', ['courses' => $courses]);
    }

    public function sort(Request $request){
        foreach ($request->items as $item) {
            Course::where('id', $item['id'])->update(['order' => $item['sort_order']]);
        }
        // dd($setting);
        return redirect()->route('admin.courses.index');
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
        $course->rating = $request->input('rating');
        $course->enrollments = $request->input('enrollments');
        $course->status = $request->input('status');
        $course = $this->uploadImage($request, $course);
        $course->save();
        return to_route('admin.courses.show', $course->id)->with('success', 'Course created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $course = Course::find($id);
        $chapters = Chapter::where('course_id', $id)->orderBy('order', 'asc')->get();
        // dd($course, $chapters);
        return inertia('admin/courses/show', [
            'course' => $course,
            'chapters' => $chapters
        ]);
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
        $course->rating = $request->input('rating') ?? $course->rating;
        $course->enrollments = $request->input('enrollments') ?? $course->enrollments;
        $course->status = $request->input('status') ?? $course->status;
        $course = $this->uploadImage($request, $course);
        $course->save();

        return to_route('admin.courses.show', $id)->with('success', 'Course updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Delete course image and certificate
        $course = Course::find($id);

        // Delete chapters
        $chapters = $course->chapters;
        foreach($chapters as $chapter){
            $chapter->delete();
        }
        // Delete course
        $course->delete();
        return to_route('admin.courses.index')->with('success', 'Course deleted successfully');
    }

    public function search(Request $request){
        $search = $request->input('search');
        $courses = Course::where('title', 'like', '%' . $search . '%')->get();
        return inertia('admin/courses/index', ['courses' => $courses]);
    }

    public function trashed(){
        $courses = Course::onlyTrashed()->get();
        return inertia('admin/courses/trashed', ['courses' => $courses]);
    }

    public function restore($id){
        $course = Course::onlyTrashed()->find($id);
        $course->restore();
        return to_route('admin.courses.trashed')->with('success', 'Course restored successfully');
    }

    public function forceDelete($id){
        $course = Course::onlyTrashed()->find($id);
        if($course->image){
            unlink(public_path('images/courses/' . $course->image));
        }
        if($course->certificate){
            unlink(public_path('images/certificates/' . $course->certificate));
        }
        // Delete chapters
        $chapters = $course->chapters;
        foreach($chapters as $chapter){
            $chapter->forceDelete();
        }
        // Delete course
        $course->forceDelete();
        return to_route('admin.courses.trashed')->with('success', 'Course deleted successfully');
    }
}
