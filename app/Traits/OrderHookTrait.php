<?php

namespace App\Traits;

use Illuminate\Support\Facades\Http;

trait OrderHookTrait
{
    public function getRequest($query = null){
        if(setting('order_hook_url') == null) return [];    
        $response = Http::get(setting('order_hook_url'), $query);
        return $response->json();
    }
    
    public function createRequest(Array $data){
        if(setting('order_create_hook_url') == null) return [];
        $response = Http::post(setting('order_create_hook_url'), $data);
        return $response->json();
    }

    public function cancelRequest($data){
        if(setting('order_cancel_hook_url') == null) return [];
        $response = Http::post(setting('order_cancel_hook_url'), $data);
        return $response->json();
    }

    public function statusRequest($data){
        if(setting('order_status_hook_url') == null) return [];
        $response = Http::post(setting('order_status_hook_url'), $data);
        return $response->json();
    }
}
