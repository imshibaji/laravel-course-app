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

if(!function_exists('setOrder')) {
    function setOrder($items, $table) {
        $ids = [];
        $cases = [];

        foreach ($items as $item) {
            $id = (int) $item['id'];
            $order = (int) $item['sort_order'];
            $ids[] = $id;
            $cases[] = "WHEN {$id} THEN {$order}";
        }

        $idsList = implode(',', $ids);
        $casesSql = implode(' ', $cases);

        $query = "
            UPDATE {$table}
            SET `order` = CASE id
                {$casesSql}
            END
            WHERE id IN ({$idsList})
        ";

        DB::statement($query);
    }
}