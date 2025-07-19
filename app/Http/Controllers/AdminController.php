<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        return inertia('admin/dashboard');
    }

    public function profile()
    {
        return inertia('admin/profile');
    }

    public function course($id = null)
    {
        return inertia('admin/course', ['id' => $id]);
    }
    public function live()
    {
        return inertia('admin/live');
    }
}
