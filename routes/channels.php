<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('orders.{orderNumber}', function () {
    return true;
});
