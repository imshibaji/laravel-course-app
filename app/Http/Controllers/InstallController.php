<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Session;

class InstallController extends Controller
{
    public function step1()
    {
        return view('install.step1');
    }

    public function postStep1(Request $request)
    {
        $request->validate([
            'APP_NAME' => 'required',
            'APP_URL' => 'required|url',
        ]);

        session()->put('install.APP_NAME', $request->APP_NAME);
        session()->put('install.APP_URL', $request->APP_URL);

        return redirect()->route('install.step2');
    }

    public function step2()
    {
        return view('install.step2');
    }

    public function postStep2(Request $request)
    {
        $request->validate([
            'DB_HOST' => 'required',
            'DB_PORT' => 'required',
            'DB_DATABASE' => 'required',
            'DB_USERNAME' => 'required',
        ]);

        foreach ($request->only(['DB_HOST', 'DB_PORT', 'DB_DATABASE', 'DB_USERNAME', 'DB_PASSWORD']) as $key => $value) {
            session()->put("install.$key", $value);
        }

        return redirect()->route('install.step3');
    }

    public function step3()
    {
        return view('install.step3');
    }

    public function finish(Request $request)
    {
        $request->validate([
            'MAIL_MAILER' => 'required',
            'MAIL_HOST' => 'required',
            'MAIL_PORT' => 'required',
        ]);

        foreach (
            $request->only([
                'MAIL_MAILER',
                'MAIL_HOST',
                'MAIL_PORT',
                'MAIL_USERNAME',
                'MAIL_PASSWORD',
                'MAIL_FROM_ADDRESS',
                'MAIL_FROM_NAME'
            ]) as $key => $value
        ) {
            session()->put("install.$key", $value);
        }

        $envPath = base_path('.env');
        $envContent = '';

        foreach (session('install') as $key => $value) {
            $envContent .= $key . '=' . $this->escapeEnvValue($value) . "\n";
        }

        File::put($envPath, $envContent);

        Artisan::call('key:generate', ['--force' => true]);
        Artisan::call('config:clear');
        Artisan::call('config:cache');
        Artisan::call('migrate', ['--force' => true]);

        File::put(storage_path('installed.lock'), now());
        session()->forget('install');

        return redirect()->route('install.step4')->with('success', 'Installation complete!');
    }

    public function step4()
    {
        return view('install.step4');
    }

    public function complete(Request $request)
    {
        $request->validate([
            'site_title' => 'required|string|max:255',
            'site_description' => 'nullable|string',
            'admin_name' => 'required|string|max:255',
            'admin_email' => 'required|email|unique:users,email',
            'admin_password' => 'required|min:6|confirmed',
        ]);

        // Save settings
        DB::table('settings')->insert([
            ['key' => 'site_title', 'value' => $request->site_title],
            ['key' => 'site_description', 'value' => $request->site_description],
        ]);

        // Create admin
        User::create([
            'name' => $request->admin_name,
            'email' => $request->admin_email,
            'password' => Hash::make($request->admin_password),
            'role' => 'admin', // add this if you have roles
        ]);

        // Done
        File::put(storage_path('installed.lock'), now());
        session()->forget('install');

        return redirect('/login')->with('success', 'Installation complete! You may now log in.');
    }

    public function check()
    {
        if (File::exists(storage_path('installed.lock'))) {
            return redirect('/');
        }
        return view('install.check');
    }

    private function escapeEnvValue($value)
    {
        if (str_contains($value, ' ') || str_contains($value, '"')) {
            return '"' . addslashes($value) . '"';
        }
        return $value;
    }
}
