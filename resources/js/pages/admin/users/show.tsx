import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from "@/lib/utils";



export default function Show({ user }: any) {
    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="User Details">
                    <h2 className="d-flex align-items-center">
                        <Avatar {...stringAvatar(user.firstname + ' ' + user.lastname, { width: 32, height: 32 })} />
                        <span className="ms-2">{user.firstname} {user.lastname}</span>
                    </h2>
                    <p>{ user.mobile?  'Mobile: '+user.mobile+', ' : ''}Email: {user.email}, Role: {user.role}, Status: {user.is_active ? 'Active' : 'Inactive'}</p>
                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            <Card title="Order Details">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user.orders && user.orders.length > 0 ?
                                            user.orders.map((order: any, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{order.productinfo}</td>
                                                        <td>{order.amount}</td>
                                                        <td>{order.payment_status}</td>
                                                    </tr>
                                                )
                                            }):
                                            <tr>
                                                <td className="text-center py-5" colSpan={4}>No Orders</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card title="Learning Details">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Name</th>
                                            <th scope="col">Progress</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user.learnings.length > 0 ?
                                            user.learnings.map((learning: any, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{learning.course.name}</td>
                                                        <td>{learning.progress}</td>
                                                    </tr>
                                                )
                                            }):
                                            <tr>
                                                <td className="text-center py-5" colSpan={2}>No Reviews</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card title="Reviews">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course</th>
                                            <th scope="col">Comment</th>
                                            <th scope="col">Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user.reviews.length > 0 ?
                                            user.reviews.map((review: any, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{review.course.name}</td>
                                                        <td>{review.comment}</td>
                                                        <td>{review.rating}</td>
                                                    </tr>
                                                )
                                            }):
                                            <tr>
                                                <td className="text-center py-5" colSpan={3}>No Reviews</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                    </div>
                    <hr />
                </Card>
            </div>
        </AdminLayout>
    );
}