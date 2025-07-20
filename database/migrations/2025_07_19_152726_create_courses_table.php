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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->nullable();
            $table->string('description')->nullable();
            $table->text('details')->nullable();
            $table->string('duration')->nullable();
            $table->string('instructor')->nullable();
            $table->double('price')->default(0);
            $table->double('offer_price')->default(0);
            $table->string('category')->nullable();
            $table->string('language')->nullable();
            $table->string('level')->nullable();
            $table->string('image')->nullable();
            $table->string('certificate')->nullable();
            $table->string('tags')->nullable();
            $table->string('rating')->nullable();
            $table->string('enrollments')->nullable();
            $table->string('status')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
