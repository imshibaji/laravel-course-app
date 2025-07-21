@extends('install.base')

@section('content')
<h2>Step 3: Mail Configuration</h2>
<form method="POST" action="{{ route('install.finish') }}">
    @csrf
    <input class="form-control" name="MAIL_MAILER" placeholder="Mailer" value="log"><br>
    <input class="form-control" name="MAIL_HOST" placeholder="Host" value="127.0.0.1"><br>
    <input class="form-control" name="MAIL_PORT" placeholder="Port" value="2525"><br>
    <input class="form-control" name="MAIL_USERNAME" placeholder="Username"><br>
    <input class="form-control" name="MAIL_PASSWORD" placeholder="Password"><br>
    <input class="form-control" name="MAIL_FROM_ADDRESS" placeholder="From Email" value="hello@example.com"><br>
    <input class="form-control" name="MAIL_FROM_NAME" placeholder="From Name" value="Laravel"><br>
    <button class="btn btn-success" type="submit">Finish Installation</button>
</form>
@endsection