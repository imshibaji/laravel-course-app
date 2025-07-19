<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function index()
    {
        return inertia('welcome');
    }
    public function courses()
    {
        return inertia('courses');
    }
    public function checkout()
    {
        return inertia('checkout');
    }
}
