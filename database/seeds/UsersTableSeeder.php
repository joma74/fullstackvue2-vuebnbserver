<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Jane Doe',
            'email' => 'test@gmail.com',
            'password' => Hash::make('test'),
            'saved' => [1,5,7,9]
        ]);
    }
}
