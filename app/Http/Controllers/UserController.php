<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function dashboard()
    {
        return inertia('users/dashboard');
    }

    public function profile()
    {
        return inertia('users/profile');
    }

    public function course($id = null)
    {
        return inertia('users/course', ['id' => $id]);
    }
    public function live()
    {
        return inertia('users/live');
    }
}
