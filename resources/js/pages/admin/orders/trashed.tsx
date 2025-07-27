import DeleteBtn from "@/components/DeleteBtn";
import AdminLayout from "@/layouts/AdminLayout";
import { Link } from "@inertiajs/react";


export default function OrdersList({ orders }: any) {

    return (
        <AdminLayout>
            <div className="container py-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Orders List</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">Txn ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order: any, index: number) => {
                                        return (
                                            <tr className="text-center" key={index}>
                                                <td>{order.txnid}</td>
                                                <td>{order.firstname} {order.lastname}</td>
                                                <td>{order.email}</td>
                                                <td>{order.phone}</td>
                                                <td>{order.productinfo}</td>
                                                <td>{order.amount}</td>
                                                <td>{order.payment_status}</td>
                                                <td className="text-center">
                                                    <div className="btn-group" role="group">
                                                        <Link href={route('admin.orders.restore', order.id)} className="btn btn-sm btn-warning">Update</Link>
                                                        <DeleteBtn id={order.id} href={route('admin.orders.forceDelete', order.id)} title={order.productinfo} className="btn btn-sm btn-danger">Delete</DeleteBtn>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}