<?php

use Illuminate\Database\Seeder;
use App\TransactionType;

class TransactionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $transactions =['General Transaction','Service Transaction','Motor Vehicle'];
        foreach($transactions as $transaction){
            TransactionType::create(
                [
                    'description'=>$transaction
                ]
            );
        }



    }
}
