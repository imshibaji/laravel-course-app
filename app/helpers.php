<?php
// use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

if (!function_exists('setting')) {
    function setting($key, $default = null) {
        // return \Illuminate\Support\Facades\Cache::remember("setting_$key", 3600, function () use ($key, $default) {
            return DB::table('settings')->where('key', $key)->value('value') == '' ? $default : DB::table('settings')->where('key', $key)->value('value');
        // });
    }
}
