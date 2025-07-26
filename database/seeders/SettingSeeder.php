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
                'value' => 'logo.png',
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
                'key' => 'website_favicon',
                'value' => 'favicon.ico',
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
                'value' => 'User Dashboard',
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
                'value' => '/images/banner.jpg',
                'description' => 'User Dashboard Image',
                'type' => 'string',
                'active' => 0,
            ],
            [
                'key' => 'home_title',
                'value' => 'Learn Anytime, Anywhere',
                'description' => 'Home Page Title',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'home_subtitle',
                'value' => 'Discover the World of Learning with Our Online Courses',
                'description' => 'Home Page Subtitle',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'home_button_text',
                'value' => 'Explore Your All Courses',
                'description' => 'Home Page Button Text',
                'type' => 'string',
                'active' => 1
            ],
            [
                'key' => 'home_button_link',
                'value' => '/courses',
                'description' => 'Home Page Button Link',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'home_image',
                'value' => '/images/banner.jpg',
                'description' => 'Home Page Image',
                'type' => 'string',
                'active' => 0,
            ],
            [
                'key' => 'about_us_title',
                'value' => 'About Us',
                'description' => 'About Us Title',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'about_us_description',
                'value' => 'About Us Description',
                'description' => 'About Us Description',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'about_us_image',
                'value' => '/images/banner.jpg',
                'description' => 'About Us Image',
                'type' => 'string',
                'active' => 0,
            ],
            [
                'key' => 'about_us_content',
                'value' => 'About Us Content',
                'description' => 'About Us Content',
                'type' => 'markdown',
                'active' => 1
            ],
            [
                'key' => 'contact_us_title',
                'value' => 'Contact Us',
                'description' => 'Contact Us Title',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'contact_us_description',
                'value' => 'Contact Us Description',
                'description' => 'Contact Us Description',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'contact_us_image',
                'value' => '/images/banner.jpg',
                'description' => 'Contact Us Image',
                'type' => 'string',
                'active' => 0,
            ],
            [
                'key' => 'contact_us_content',
                'value' => 'Contact Us Content',
                'description' => 'Contact Us Content',
                'type' => 'markdown',
                'active' => 1
            ],
            [
                'key' => 'term_and_condition_title',
                'value' => 'Term and Condition',
                'description' => 'Term and Condition Title',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'term_and_condition_description',
                'value' => 'Term and Condition Description',
                'description' => 'Term and Condition Description',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'term_and_condition_content',
                'value' => 'Term and Condition Content',
                'description' => 'Term and Condition Content',
                'type' => 'markdown',
                'active' => 1
            ],
            [
                'key' => 'privacy_policy_title',
                'value' => 'Privacy Policy',
                'description' => 'Privacy Policy Title',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'privacy_policy_description',
                'value' => 'Privacy Policy Description',
                'description' => 'Privacy Policy Description',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'privacy_policy_content',
                'value' => 'Privacy Policy Content',
                'description' => 'Privacy Policy Content',
                'type' => 'markdown',
                'active' => 1
            ],
            [
                'key' => 'order_hook_url',
                'value' => '',
                'description' => 'Order Hook URL',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'order_create_hook_url',
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
            [
                'key' => 'PAYU_MERCHANT_KEY',
                'value' => '',
                'description' => 'PAYU Merchant Key',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'PAYU_MERCHANT_SALT',
                'value' => '',
                'description' => 'PAYU Merchant Salt',
                'type' => 'string',
                'active' => 1,
            ],
            [
                'key' => 'PAYU_BASE_URL',
                'value' => 'https://test.payu.in',
                'description' => 'PAYU Website',
                'type' => 'string',
                'active' => 1,  
            ],
        ], 'key');
    }
}
