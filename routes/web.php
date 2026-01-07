<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

use Illuminate\Auth\Middleware\Authenticate;

use Inertia\Inertia;
use PhpParser\Builder\Function_;

// Route::get('/', function() {
//     return Inertia::render('');
// })->name('');


Route::get('/', function () { return Inertia::render('welcome');})->name('welcome');


Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

Route::post('/login', LoginController::class)->name('login.attempt')->middleware('throttle:5,1');

//Route::post('logout')


Route::get('/register', function() {
    return Inertia::render('register');
})->name('register');

Route::controller(BookController::class)->group(function (){
    Route::get('/books', 'index')->name('books.index');
});

Route::get('/dashboard', function() {
    return Inertia::render('dashboard');
})->name('dashboard')->middleware('auth');

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

