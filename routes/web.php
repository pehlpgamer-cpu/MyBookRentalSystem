<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\LoginController;
use App\Models\Books;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;


// Route::get('/', function() {
//     return Inertia::render('');
// })->name('');


Route::get('/', function () { return Inertia::render('welcome');})->name('welcome');


Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

Route::post('/login', LoginController::class)->name('login.attempt')->middleware('throttle:5,1');

Route::post('/logout', function() {
    Auth::logout();
    Session::Invalidate();
    Session::regenerateToken();
    return redirect('/login');
})->name('logout');

Route::get('/register', function() {return Inertia::render('register');})
->name('register');

Route::middleware('auth')->group(function() 
{
    Route::get('/dashboard', function() {return Inertia::render('dashboard');})
    ->name('dashboard');

    Route::get('/accountSettings', function() {return Inertia::render('accountSettings');})
    ->name('accountSettings');

    Route::get('/manageLibrary', function() {
        sleep(2); // loading demo
        return Inertia::render('manageLibrary', [
            'Books' => Inertia::defer(fn () => Books::all()),
    ]);
    
})->name('manageLibrary');


    Route::get('auditTrail', function() {return Inertia::render('auditTrail');})
    ->name('auditTrail');
});




Route::controller(BookController::class)->group(function (){
    Route::get('/books', 'index')->name('books.index');
});






Route::get('/library', function() {return Inertia::render('library');})
->name('library');




Route::get('/notifications', function() {return Inertia::render('notifications');})
->name('notifications');

Route::get('/help', function() {return Inertia::render('help');})
->name('help');

