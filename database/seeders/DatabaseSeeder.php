<?php

namespace Database\Seeders;

use App\Models\Books;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'admin',
            'email' => 'text@test.com',
            'password' => '123',
        ]);


        Books::create([
            'title' => 'the art of focus',
            'genre' => 'self-improvement',
        ]);

        Books::create([
            'title' => 'atomic habits',
            'genre' => 'self-improvement',
        ]);

        Books::create([
            'title' => 'deep work',
            'genre' => 'self-improvement',
        ]);

        Books::create([
            'title' => 'the one thing',
            'genre' => 'self-improvement',
        ]);

        // TODO try foreach an array
        // $createManyBooks = [
        //     [
        //         'title' => 'Think like a programmer',
        //         'genre' => 'programming',
        //     ],
        //     [
        //         'title' => 'deep work',
        //         'genre' => 'self-improvement',
        //     ],
        // ];

        // Books::create($createManyBooks);

    }
}
