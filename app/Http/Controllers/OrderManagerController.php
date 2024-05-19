<?php

namespace App\Http\Controllers;

use App\Events\OrderUpdatedEvent;
use App\Models\Order;

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

        OrderUpdatedEvent::dispatch($order->fresh());

        return to_route('dashboard');
    }
}
