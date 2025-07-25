@extends('install.base')

@section('content')
<h2>Step 4: Website & Admin Setup</h2>
<form method="POST" action="{{ route('install.complete') }}">
    @csrf
    <h4>Website Info</h4>
    <input name="site_title" placeholder="Website Title"><br>
    <input name="site_description" placeholder="Website Description"><br>

    <h4>Admin User</h4>
    <input name="admin_name" placeholder="Admin Name"><br>
    <input name="admin_email" placeholder="Admin Email"><br>
    <input name="admin_password" placeholder="Password" type="password"><br>
    <input name="admin_password_confirmation" placeholder="Confirm Password" type="password"><br>

    <button type="submit">Complete Installation</button>
</form>
@endsection