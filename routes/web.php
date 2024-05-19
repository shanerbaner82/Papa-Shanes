<?php

use App\Http\Controllers\OrderManagerController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth']], function () {
    Route::get('/', [OrderManagerController::class, 'index'])->name('dashboard');
    Route::patch('/orders/{order}/edit', [OrderManagerController::class, 'update'])->name('orders.edit');
});

Route::get('/order/tracker/{order:order_number}', [\App\Http\Controllers\TrackerController::class, 'show'])->name('orders.tracker');

//Route::get('sdr', function(){
//   $test = "{&quot;component&quot;:&quot;Tracker&quot;,&quot;props&quot;:{&quot;errors&quot;:{},&quot;auth&quot;:{&quot;user&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;Papa Shane&quot;,&quot;email&quot;:&quot;shane@papashanes.com&quot;,&quot;email_verified_at&quot;:&quot;2024-05-19T16:36:41.000000Z&quot;,&quot;created_at&quot;:&quot;2024-05-19T16:36:41.000000Z&quot;,&quot;updated_at&quot;:&quot;2024-05-19T16:36:41.000000Z&quot;}},&quot;order&quot;:{&quot;id&quot;:5,&quot;customer_id&quot;:6,&quot;order_number&quot;:&quot;3SLX5HMW&quot;,&quot;status&quot;:&quot;RECEIVED&quot;,&quot;delivery_method&quot;:&quot;DELIVERY&quot;,&quot;created_at&quot;:&quot;2024-05-15T05:19:46.000000Z&quot;,&quot;updated_at&quot;:&quot;2024-05-19T16:36:41.000000Z&quot;,&quot;created&quot;:&quot;May 15, 2024 05:19 am&quot;,&quot;time_since&quot;:&quot;4 days ago&quot;},&quot;statuses&quot;:{&quot;RECEIVED&quot;:&quot;Order Received&quot;,&quot;PROGRESS&quot;:&quot;In Progress&quot;,&quot;OVEN&quot;:&quot;In The Oven&quot;,&quot;READY&quot;:&quot;Ready for DELIVERY&quot;}},&quot;url&quot;:&quot;\/order\/tracker\/3SLX5HMW&quot;,&quot;version&quot;:&quot;0db6096c91ff141286d4634bbdcf298e&quot;}";
//
//   return $test;
//
//});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
