<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Chapter;
use Illuminate\Http\Request;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $courseId = $request->input('courseId');
        $chapters = Chapter::where('course_id', $courseId)->get();
        return inertia('admin/chapters/index', ['chapters'=>$chapters]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $courseId = $request->input('courseId');
        return inertia('admin/chapters/create', ['courseId'=>$courseId]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $chapter = new Chapter();
        $chapter->title = $request->input('title');
        $chapter->course_id = $request->input('course_id');
        $chapter->details = $request->input('details');
        $chapter->video_type = $request->input('video_type');
        $chapter->video_url = $request->input('video_url');
        $chapter->embed_code = $request->input('embed_code');
        $chapter->duration = $request->input('duration');
        $chapter->instructor = $request->input('instructor');
        $chapter->status = $request->input('status');

        $chapter->order = $request->input('order') ?? 0;
        $chapter->save();
        return to_route('admin.courses.show', $chapter->course_id);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('admin/chapters/show', ['id'=>$id]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $chapter = Chapter::find($id);
        return inertia('admin/chapters/edit', [
            'chapter'=>$chapter
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $chapter = Chapter::find($id);
        $chapter->title = $request->input('title');
        $chapter->course_id = $request->input('course_id');
        $chapter->details = $request->input('details');
        $chapter->video_type = $request->input('video_type');
        $chapter->video_url = $request->input('video_url');
        $chapter->embed_code = $request->input('embed_code');
        $chapter->duration = $request->input('duration');
        $chapter->instructor = $request->input('instructor');
        $chapter->status = $request->input('status');

        $chapter->order = $request->input('order') ?? 0;
        $chapter->save();
        return to_route('admin.courses.show', $chapter->course_id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $chapter = Chapter::find($id);
        $chapter->delete();
        return to_route('admin.courses.show', $chapter->course_id);
    }

    public function search(Request $request){
        $search = $request->input('search');
        $chapters = Chapter::where('title', 'like', '%' . $search . '%')->get();
        return inertia('admin/chapters/index', ['chapters' => $chapters]);
    }

    public function trashed(){
        $chapters = Chapter::onlyTrashed()->get();
        return inertia('admin/chapters/trashed', ['chapters' => $chapters]);
    }

    public function restore($id){
        $chapter = Chapter::onlyTrashed()->find($id);
        $chapter->restore();
        return to_route('admin.chapters.trashed');
    }

    public function forceDelete($id){
        $chapter = Chapter::onlyTrashed()->find($id);
        $chapter->forceDelete();
        return to_route('admin.chapters.trashed');
    }
}
