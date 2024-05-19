<?php

use App\Http\Controllers\OrderManagerController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth']], function () {
    Route::get('/', [OrderManagerController::class, 'index'])->name('dashboard');
    Route::patch('/orders/{order}/edit', [OrderManagerController::class, 'update'])->name('orders.edit');
    Route::post('/orders/reseed', [OrderManagerController::class, 'reseed'])->name('orders.reseed');
});

Route::get('/order/tracker/{order:order_number}', [\App\Http\Controllers\TrackerController::class, 'show'])->name('orders.tracker');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
