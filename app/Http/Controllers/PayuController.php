<?php

namespace App\Http\Controllers;

use App\Classes\OrderClass;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PayuController extends Controller
{
    public function showForm(Request $request)
    {
        $data = $request->all();
        return Inertia::render('payu/form', ['paymentdata' => $data['posted'] ?? []]);
    }

    public function initiatePayment(Request $request)
    {
        $data = [
            'key'         => env('PAYU_MERCHANT_KEY'),
            'txnid'       => substr(hash('sha256', uniqid() . microtime()), 0, 20),
            'firstname'   => $request->firstname,
            'lastname'    => $request->lastname,       // OK for form data
            'email'       => $request->email,
            'phone'       => $request->mobile,         // OK for form data
            'productinfo' => $request->product,
            'amount'      => $request->amount,
            'surl'        => route('payu.response'),
            'furl'        => route('payu.response'),
        ];

        $order = new OrderClass($data);
        $order->setUserId($request->user ?? 0);
        $order->setCourseId($request->course ?? 0);

        // Build hash string with blanks for UDFs (udf1–udf5) and udf6–udf10
        $hashString = implode('|', [
            $data['key'],
            $data['txnid'],
            $data['amount'],
            $data['productinfo'],
            $data['firstname'],                     // PayU expects only firstname here
            $data['email'],
            '',
            '',
            '',
            '',
            '',                      // udf1–udf5 blanks
            '',
            '',
            '',
            '',
            '',                      // udf6–udf10 blanks
            env('PAYU_SALT')
        ]);

        $data['hash']   = strtolower(hash('sha512', $hashString));
        $data['action'] = env('PAYU_BASE_URL') . '/_payment';

        return Inertia::render('payu/submit', ['data' => $data]);
    }

    public function handleResponse(Request $request)
    {
        $posted = $request->all();
        $status = $posted['status'] ?? '';
        
        $order = new OrderClass();
        $order->updateByTransactionId($posted, $posted['txnid']);

        return Inertia::render('payu/response', [
            'status' => $status,
            'posted' => $posted,
        ]);
    }
}
