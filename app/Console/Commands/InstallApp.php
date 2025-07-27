<?php

namespace App\Console\Commands;

use Directory;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

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

        $ans = $this->choice('Do you want to install the application?', ['Yes', 'No'], 'No');
        if ($ans == 'Yes') {
            $ans = $this->choice('Are you want to fresh migrate?', ['Yes', 'No'], 'Yes');
            if ($ans == 'Yes') {
                $this->withProgressBar(['Old images removed'] ,function () {

                    $courses_path = public_path('images/courses/');
                    // Check if the directory exists
                    if (File::isDirectory($courses_path)) {
                        // Get all files within the directory
                        $files = File::files($courses_path);

                        // Loop through and delete each file
                        foreach ($files as $file) {
                            File::delete($file);
                            $this->info("\n$file removed successfully.\n");
                        }
                    }


                    $certificates_path = public_path('images/certificates');
                    // Check if the directory exists
                    if (File::isDirectory($certificates_path)) {
                        // Get all files within the directory
                        $files = File::files($certificates_path);

                        // Loop through and delete each file
                        foreach ($files as $file) {
                            File::delete($file);
                            $this->info("\n$file removed successfully.\n");
                        }
                    }
                });

                // Fresh migration.
                $this->info("\nFresh migration started...\n");
                $this->withProgressBar( ['migrate:fresh'] ,function () {
                    $this->call('migrate:fresh');
                    $this->call('db:seed');
                    $this->call('db:seed', ['--class' => 'SettingSeeder']);
                    $this->call('db:monitor');
                });
                $this->info("\n");
                $this->info("Fresh migration executed successfully");

                // Application installation completed message.
                $this->info("Application installed successfully.\n");
            }else{
                $this->info("Fresh migration skipped.\n");
            }
        } else {
            $this->info("Application installation cancelled.\n");
        }
    }
}
