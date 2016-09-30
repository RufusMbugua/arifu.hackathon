<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->integer('shipping_costs');
            $table->string('shipping_method');
            //this is the id of the user paying catering for th shipping costs
            $table->integer('shipping_payer_id');
            $table->string('inspection_period');
            $table->string('currency');
            $table->integer('total_units');
            $table->integer('item_cost');
            $table->integer('total_amount');
            $table->integer('broker_id')->nullable();
            $table->integer('buyer_id');
            $table->integer('seller_id');
            $table->integer('transaction_status');
            $table->string('type');
            $table->dateTime('cancelled_at');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('transactions');
    }
}
