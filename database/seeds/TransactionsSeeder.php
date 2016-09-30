<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Transaction;

/**
 * Class TransactionsSeeder
 * Seeder class for the transactions table
 */
class TransactionsSeeder extends Seeder
{

    /**
     * Seeds the transaction table using an sql dump file
     * It throws an exception if the dump doesn't follow a set syntax
     * @throws Exception
     */
    public function run()
    {
        Model::unguard();

        DB::table('transactions')->delete();

        $transactions = array(
            ['title'=>'Sale of Motor Vehicle','shipping_costs'=>1200,'shipping_method'=>'road','shipping_payer_id'=>1,'inspection_period'=>'3','currency'=>'USD','total_units'=>1,'item_cost'=>12000,'total_amount'=>14400,'broker_id'=>1,'buyer_id'=>2,'seller_id'=>3,'transaction_status'=>1],
            ['title'=>'Sale of Nexus','shipping_costs'=>2900,'shipping_method'=>'road','shipping_payer_id'=>2,'inspection_period'=>'30','currency'=>'KES','total_units'=>1,'item_cost'=>10000,'total_amount'=>15000,'broker_id'=>2,'buyer_id'=>1,'seller_id'=>3,'transaction_status'=>2],
            ['title'=>'Carpet Sale','shipping_costs'=>900,'shipping_method'=>'road','shipping_payer_id'=>3,'inspection_period'=>'12','currency'=>'USD','total_units'=>1,'item_cost'=>30000,'total_amount'=>35000,'buyer_id'=>4,'seller_id'=>3,'transaction_status'=>3],
            ['title'=>'Macbook Sale','shipping_costs'=>900,'shipping_method'=>'road','shipping_payer_id'=>4,'inspection_period'=>'15','currency'=>'KES','total_units'=>1,'item_cost'=>12000,'total_amount'=>16000,'broker_id'=>2,'buyer_id'=>1,'seller_id'=>3,'transaction_status'=>4],
            ['title'=>'Rolex Sale','shipping_costs'=>900,'shipping_method'=>'road','shipping_payer_id'=>1,'inspection_period'=>'2','currency'=>'USD','total_units'=>1,'item_cost'=>45000,'total_amount'=>55000,'buyer_id'=>2,'seller_id'=>3,'transaction_status'=>1],
            ['title'=>'Car Sale','shipping_costs'=>900,'shipping_method'=>'road','shipping_payer_id'=>2,'inspection_period'=>'45','currency'=>'KES','total_units'=>1,'item_cost'=>900000,'total_amount'=>935000,'broker_id'=>2,'buyer_id'=>1,'seller_id'=>3,'transaction_status'=>3],


        );

        foreach($transactions as $transaction){
            Transaction::create($transaction);
        }

    }
}
