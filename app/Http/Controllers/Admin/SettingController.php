<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $settings = Setting::all();
        return inertia('admin/settings/index', ['settings' => $settings]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('admin/settings/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'key' => 'required|string|max:255|unique:settings,key',
            'value' => 'required|string|max:255',
        ]);

        $key = strtolower($request->key);
        $key = str_replace(' ', '_', $key);

        Setting::create([
            'key' => $key,
            'value' => $request->value,
            'description' => $request->description,
            'type' => $request->type,
            'status' => $request->status,
            'active' => $request->active
        ]);
        return redirect()->route('admin.settings.index')->with('success', 'Setting created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $setting = Setting::find($id);
        return inertia('admin/settings/edit', ['setting' => $setting]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $setting = Setting::find($id);

        $key = strtolower($request->key);
        $key = str_replace(' ', '_', $key);

        $setting->update([
            'key' => $key,
            'value' => $request->value,
            'description' => $request->description,
            'type' => $request->type,
            'status' => $request->status,
            'active' => $request->active
        ]);
        return redirect()->route('admin.settings.index')->with('success', 'Setting updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $setting = Setting::find($id);
        $setting->delete();
        return redirect()->route('admin.settings.index')->with('success', 'Setting deleted successfully');
    }

    public function search(Request $request){
        $search = $request->input('search');
        $settings = Setting::where('key', 'like', '%' . $search . '%')->get();
        return inertia('admin/settings/index', ['settings' => $settings]);
    }

    public function trashed(){
        $settings = Setting::onlyTrashed()->get();
        return inertia('admin/settings/trashed', ['settings' => $settings]);
    }

    public function restore($id){
        $setting = Setting::onlyTrashed()->find($id);
        $setting->restore();
        return to_route('admin.settings.trashed')->with('success', 'Setting restored successfully');
    }

    public function forceDelete($id){
        $setting = Setting::onlyTrashed()->find($id);
        $setting->forceDelete();
        return to_route('admin.settings.trashed')->with('success', 'Setting deleted successfully');
    }
}
