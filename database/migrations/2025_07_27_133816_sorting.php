<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->integer('order')->nullable()->default(0)->after('id');
        });
        Schema::table('chapters', function (Blueprint $table) {
            $table->integer('order')->nullable()->default(0)->after('id');
        });
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('order')->nullable()->default(0)->after('id');
        });
        Schema::table('learnings', function (Blueprint $table) {
            $table->integer('order')->nullable()->default(0)->after('id');
        });
        Schema::table('reviews', function (Blueprint $table) {
            $table->integer('order')->nullable()->default(0)->after('id');
        });
        Schema::table('settings', function (Blueprint $table) {
            $table->integer('order')->nullable()->default(0)->after('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn('order');
        });
        Schema::table('chapters', function (Blueprint $table) {
            $table->dropColumn('order');
        });
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('order');
        });
        Schema::table('learnings', function (Blueprint $table) {
            $table->dropColumn('order');
        });
        Schema::table('reviews', function (Blueprint $table) {
            $table->dropColumn('order');
        });
        Schema::table('settings', function (Blueprint $table) {
            $table->dropColumn('order');
        });
    }
};
