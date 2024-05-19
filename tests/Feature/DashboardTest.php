<?php

use App\Models\Order;
use Illuminate\Support\Facades\Event;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {

    $this->seed();

    auth()->login(\App\Models\User::first());

});

test('authenticated users can see the dashboard', function () {

    $response = $this->get(route('dashboard'));

    $response->assertStatus(200);
});

test('the dashboard component shows all of the orders', function () {

    $this->get(route('dashboard'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Dashboard')
            ->has('orders', 10));

});

test('updating the status fires the event', function () {

    Event::fake();

    $order = Order::first();

    $this->patch(route('orders.edit', ['order' => $order, 'status' => 'PROGRESS']))->assertStatus(302);

    expect($order->fresh()->status)->toBe('PROGRESS');

    Event::assertDispatched(\App\Events\OrderUpdatedEvent::class);

});
