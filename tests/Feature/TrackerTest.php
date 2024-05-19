<?php

use App\Models\Order;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    $this->seed();
    auth()->login(\App\Models\User::first());
});

test('the tracker will display for an order', function () {
    $this->get(route('orders.tracker', [
        'order' => Order::first(),
    ])
    )->assertStatus(200)
        ->assertInertia(fn (Assert $page) => $page
            ->component('Tracker')
            ->has('order')
        );
});
