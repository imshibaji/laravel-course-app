@extends('install.base')

@section('content')
<h2>Step 1: App Configuration</h2>
<form method="POST" action="{{ route('install.postStep1') }}">
    @csrf
    <input class="form-control" name="APP_NAME" placeholder="App Name" value="{{ old('APP_NAME') }}"><br>
    <input class="form-control" name="APP_URL" placeholder="App URL" value="{{ old('APP_URL', 'http://localhost') }}"><br>
    <button class="btn btn-success" type="submit">Next</button>
</form>
@endsection