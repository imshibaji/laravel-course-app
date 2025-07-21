@extends('install.base')

@section('content')
<h2>Step 2: Database Configuration</h2>
<form method="POST" action="{{ route('install.postStep2') }}">
    @csrf
    <input class="form-control" name="DB_HOST" placeholder="Host" value="127.0.0.1"><br>
    <input class="form-control" name="DB_PORT" placeholder="Port" value="3306"><br>
    <input class="form-control" name="DB_DATABASE" placeholder="Database"><br>
    <input class="form-control" name="DB_USERNAME" placeholder="Username"><br>
    <input class="form-control" name="DB_PASSWORD" placeholder="Password" type="password"><br>
    <button class="btn btn-success" type="submit">Next</button>
</form>
@endsection