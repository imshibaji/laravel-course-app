<?php

use App\Models\User;

test('guests are redirected to the login page', function () {
    $this->get('/user/dashboard')->assertRedirect('/login');
});

test('authenticated users can visit the dashboard', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/user/dashboard')->assertOk();
});