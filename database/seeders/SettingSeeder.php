<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::upsert([
            [
                'key' => 'website_base_url',
                'value' => 'http://localhost:8000',
                'description' => 'Application Base URL',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_title',
                'value' => 'Course App',
                'description' => 'Application Name',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_keywords',
                'value' => 'Course App, Learning',
                'description' => 'Application Keywords',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_description',
                'value' => 'Course App Description',
                'description' => 'Application Description',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_logo',
                'value' => '',
                'description' => 'Application Logo',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_copyright',
                'value' => 'Copyright © 2025 Shibaji Debnath',
                'description' => 'Application Copyright',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_color',
                'value' => '#ffffff',
                'description' => 'Application Color',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_favicon',
                'value' => '',
                'description' => 'Application Favicon',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_header',
                'value' => '',
                'description' => 'Application Header',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_footer',
                'value' => '',
                'description' => 'Application Footer',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_primary_menu',
                'value' => '[
                    {
                        "name" => "Home",
                        "url" => "/",
                        "icon" => "home",
                    },
                    {
                        "name" => "Courses",
                        "url" => "/courses",
                        "icon" => "book",
                    },
                    {
                        "name" => "About",
                        "url" => "/about",
                        "icon" => "info",
                    },
                    {
                        "name" => "Contact",
                        "url" => "/contact",
                        "icon" => "envelope",
                    },
                ]',
                'description' => 'Application Primary Menu',
                'type' => 'json',
                'active' => 1,
            ],
            [
                'key' => 'website_secondary_menu',
                'value' => '[
                    {
                        "name" => "Login",
                        "url" => "/login",
                        "icon" => "sign-in",
                    },
                    {
                        "name" => "Register",
                        "url" => "/register",
                        "icon" => "user-plus",
                    },
                }',
                'description' => 'Application Secondary Menu',
                'type' => 'json',
                'active' => 1,
            ],
            [
                'key' => 'website_author',
                'value' => 'Shibaji Debnath',
                'description' => 'Application Author',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_email',
                'value' => '8Bt1P@example.com',
                'description' => 'Application Email',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_phone',
                'value' => '1234567890',
                'description' => 'Application Phone',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_address',
                'value' => '123 Main Street, City, Country',
                'description' => 'Application Address',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_social_facebook',
                'value' => 'https://www.facebook.com/',
                'description' => 'Application Facebook',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_social_twitter',
                'value' => 'https://twitter.com/',
                'description' => 'Application Twitter',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_social_instagram',
                'value' => 'https://www.instagram.com/',
                'description' => 'Application Instagram',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_social_linkedin',
                'value' => 'https://www.linkedin.com/',
                'description' => 'Application Linkedin',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_social_youtube',
                'value' => 'https://www.youtube.com/',
                'description' => 'Application Youtube',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'website_social_google',
                'value' => 'https://www.google.com/',
                'description' => 'Application Google',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'user_dashboard_title',
                'value' => 'Dashboard',
                'description' => 'User Dashboard Title',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'user_dashboard_subtitle',
                'value' => 'User Dashboard Subtitle',
                'description' => 'User Dashboard Description',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'user_dashboard_button_text',
                'value' => 'Explore Your All Courses',
                'description' => 'User Dashboard Button Text',
                'type' => 'string',
                'active' => 1
            ],
            [
                'key' => 'user_dashboard_button_link',
                'value' => '/user/courses',
                'description' => 'User Dashboard Button Link',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'user_dashboard_image',
                'value' => '',
                'description' => 'User Dashboard Image',
                'type' => 'string',
                'active' => 0,
            ],
            [
                'key' => 'order_create_hook_url',
                'value' => '',
                'description' => 'Order Create Hook URL',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'order_hook_url',
                'value' => '',
                'description' => 'Order Hook URL',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'order_cancel_hook_url',
                'value' => '',
                'description' => 'Order Cancel Hook URL',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'order_status_hook_url',
                'value' => '',
                'description' => 'Order Status Hook URL',
                'type' => 'string',
                'active' => 1,
            ],
        ], 'key');
    }
}
