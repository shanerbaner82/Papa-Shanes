<?php

namespace App\Http\Controllers;

use App\Jobs\UpdateOrder;
use App\Models\Order;
use App\Models\OrderItem;

class OrderManagerController extends Controller
{
    public function index()
    {
        return inertia('Dashboard', [
            'orders' => Order::with('orderItems', 'customer')->pending()->oldestFirst()->get(),
        ]);
    }

    public function update(Order $order)
    {
        $order->update(
            request()->validate([
                'status' => 'required|in:RECEIVED,PROGRESS,OVEN,READY',
            ])
        );

        UpdateOrder::dispatch($order->fresh());

        return to_route('dashboard');
    }

    public function reseed()
    {
        Order::truncate();
        OrderItem::truncate();

        Order::factory(5)
            ->has(OrderItem::factory(fake()->numberBetween(2, 5)))
            ->create();

        return to_route('dashboard');
    }
}
