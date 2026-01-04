<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function() {
//     return Inertia::render('');
// })->name('');


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

Route::post('/login', LoginController::class)->name('login.attempt');

Route::get('/register', function() {
    return Inertia::render('register');
})->name('register');

Route::get('/dashboard', function() {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('/accountSettings', function() {
    return Inertia::render('accountSettings');
})->name('accountSettings');

Route::get('/library', function() {
    return Inertia::render('library');
})->name('library');

Route::get('auditTrail', function() {
    return Inertia::render('auditTrail');
})->name('auditTrail');

Route::get('/notifications', function() {
    return Inertia::render('notifications');
})->name('notifications');

Route::get('/help', function() {
    return Inertia::render('help');
})->name('help');




