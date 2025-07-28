<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();
        return inertia('admin/orders/index', ['orders' => $orders]);
    }

    public function sort(Request $request){
        foreach ($request->items as $item) {
            Order::where('id', $item['id'])->update(['order' => $item['sort_order']]);
        }
        // dd($setting);
        return redirect()->route('admin.settings.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('admin/orders/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $order = new Order();
        $order->user_id = $request->input('user_id');
        $order->course_id = $request->input('course_id');

        
        $order->amount = $request->input('amount');
        $order->status = $request->input('status');
        $order->save();
        return redirect()->route('admin.orders.index')->with('success', 'Order created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('admin/orders/show', ['order' => Order::find($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return inertia('admin/orders/edit', ['order' => Order::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
