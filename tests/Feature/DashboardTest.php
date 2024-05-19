<?php
use \Inertia\Testing\AssertableInertia as Assert;

beforeEach(function(){
   $this->seed();
    auth()->login(\App\Models\User::first());
});

test('authenticated users can see the dashboard', function () {
    $response = $this->get(route('dashboard'));

    $response->assertStatus(200);
});

test('the dashboard component shows all of the orders', function () {
    $this->get(route('dashboard'))
        ->assertInertia(fn(Assert $page) => $page
            ->component('Dashboard')
            ->has('orders', 10));
});
