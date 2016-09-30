<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
         Schema::create('contents',function(Blueprint $table){
           $table->increments('id');
           $table->string('title');
           $table->text('description');
           $table->integer('subject_id');
           $table->integer('user_id');
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
         Schema::drop('contents');
     }
}
