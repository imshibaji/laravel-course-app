<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reviews = Review::all();
        return inertia('admin/reviews/index', ['reviews' => $reviews]);
    }

    public function sort(Request $request){
        foreach ($request->items as $item) {
            Review::where('id', $item['id'])->update(['order' => $item['sort_order']]);
        }
        // dd($setting);
        return redirect()->route('admin.settings.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::all();
        $courses = Course::all();
        return inertia('admin/reviews/create', [
            'users' => $users,
            'courses' => $courses
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $review = new Review();
        $review->user_id = $request->input('user_id');
        $review->course_id = $request->input('course_id');
        $review->name = $request->input('name');
        $review->designation = $request->input('designation');
        $review->company = $request->input('company');
        $review->avatar = $request->input('avatar');
        $review->rating = $request->input('rating');
        $review->comment = $request->input('comment');
        $review->save();
        return redirect()->route('admin.reviews.index')->with('success', 'Review created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('admin/reviews/show', ['review' => Review::find($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $users = User::all();
        $courses = Course::all();
        return inertia('admin/reviews/edit', [
            'users' => $users, 
            'courses' => $courses, 
            'review' => Review::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $review = Review::find($id);
        $review->user_id = $request->input('user_id');
        $review->course_id = $request->input('course_id');
        $review->name = $request->input('name');
        $review->designation = $request->input('designation');
        $review->company = $request->input('company');
        $review->avatar = $request->input('avatar');
        $review->rating = $request->input('rating');
        $review->comment = $request->input('comment');
        $review->save();
        return redirect()->route('admin.reviews.index')->with('success', 'Review updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $review = Review::find($id);
        $review->delete();
        return redirect()->route('admin.reviews.index')->with('success', 'Review deleted successfully');
    }
}
