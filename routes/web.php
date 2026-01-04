<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('login', function () {
    return Inertia::render('login');
})->name('login');



Route::post('login', LoginController::class)->name('login.attempt');