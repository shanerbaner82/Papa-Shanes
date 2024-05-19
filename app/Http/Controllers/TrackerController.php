<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class TrackerController extends Controller
{
    public function show(Order $order)
    {
        $statuses = [
            'RECEIVED' => 'Order Received',
            'PROGRESS' => 'In Progress',
            'OVEN' => 'In The Oven',
            'READY' => "Ready for {$order->delivery_method}",
        ];

        return inertia('Tracker', ['order' => $order, 'statuses' => $statuses]);
    }
}
