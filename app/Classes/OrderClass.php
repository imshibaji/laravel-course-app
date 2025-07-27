<?php

namespace App\Classes;

use App\Models\Order;
use App\Traits\OrderHookTrait;

class OrderClass
{
    use OrderHookTrait;

    public Order $order;
    public function __construct(Array $data = [])
    {
        $this->create($data);
    }
    public function create(Array $data)
    {
        if(!isset($data) || empty($data)){
            return null;
        }
        $this->order = new Order();
        $this->order->user_id = $data['user_id'] ?? 0;
        $this->order->course_id = $data['course_id'] ?? 0;
        $this->order->firstname = $data['firstname'];
        $this->order->lastname = $data['lastname'];
        $this->order->email = $data['email'];
        $this->order->phone = $data['phone'];
        $this->order->address = $data['address'] ?? '';
        $this->order->city = $data['city'] ?? '';
        $this->order->state = $data['state'] ?? '';
        $this->order->country = $data['country'] ?? '';
        $this->order->zipcode = $data['zipcode'] ?? '';


        // Build hash string with blanks for UDFs (udf1–udf5) and udf6–udf10
        $this->order->productinfo = $data['productinfo'];
        $this->order->amount = $data['amount'];

        // Generate a unique transaction ID
        $this->order->txnid = $data['txnid'];
        $this->order->payment_method = $data['payment_method'] ?? 'online';
        $this->order->payment_gateway = $data['payment_gateway'] ?? 'payu';
        $this->order->payment_status = $data['payment_status'] ?? 'pending';
        $this->order->save();

        $this->createRequest($data);
        return $this->order;
    }

    
    public function update(Array $data){
        $this->order->payment_status = $data['status'];
        $this->order->save();

        $this->createRequest($data);
        return $this->order;
    }

    public function updateByTransactionId(Array $data, String $txnid)
    {
        $this->order = Order::where('txnid', $txnid)->first();

        // Generate a unique transaction ID
        $this->order->payment_status = $data['status'];
        $this->order->save();

        $this->createRequest($data);
        return $this->order;
    }   
    public function setUserId($id)
    {
        $this->order->user_id = $id;
        $this->order->save();
        return $this->order;
    }
    public function setCourseId($id)
    {
        $this->order->course_id = $id;
        $this->order->save();
        return $this->order;
    }
    public function get()
    {
        return $this->order;
    }
    public function getOrderId()
    {
        return $this->order->id;
    }
    public function getTransactionId()
    {
        return $this->order->transaction_id;
    }
    public function getAmount()
    {
        return $this->order->amount;
    }
    public function getPaymentStatus()
    {
        return $this->order->payment_status;
    }
    public function getPaymentGateway()
    {
        return $this->order->payment_gateway;
    }
}
