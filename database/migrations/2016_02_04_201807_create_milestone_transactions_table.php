<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class CreateMilestoneTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('milestone_transactions', function (Blueprint $table) {
            $table->increments('id');
            //foreign key from the transactions table
            //will explain the logic kesho
            $table->integer('transaction_id');
            $table->string('milestone');
            $table->string('description');
            $table->integer('inspecion_period');
            $table->integer('delivery_type');
            $table->integer('shipping_price');
            //cost for that specific milestone
            $table->integer('installment_cost');
            $table->time('start_date');
            $table->dateTime('end_date');
            $table->dateTime('completed_at');
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
        Schema::drop('milestone_transactions');
    }
}
