<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class InstallApp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'It installs the application.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->withProgressBar( ['migrate:fresh', 'db:seed', 'db:seed --class=SettingSeeder'] ,function () {
            $this->call('migrate:fresh');
            $this->call('db:seed');
            $this->call('db:seed', ['--class' => 'SettingSeeder']);
        });
    }
}
