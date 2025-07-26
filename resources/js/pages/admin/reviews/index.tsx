import AdminLayout from "@/layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function ReviewsList({ reviews }: any) {
    return (
        <AdminLayout>
            <div className="container py-3">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="card-title">All Reviews</h5>
                            </div>
                            <div className="col-md-6 text-end">
                                <Link href={route('admin.reviews.create')} className="btn btn-primary">Add New Review</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Designation</th>
                                        <th>Company</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Avatar</th>
                                        <th>Rating</th>
                                        <th>Comment</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews && reviews.length > 0 ?
                                        reviews.map((review: any, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{review.name}</td>
                                                    <td>{review.designation}</td>
                                                    <td>{review.company}</td>
                                                    <td>{review.email}</td>
                                                    <td>{review.mobile}</td>
                                                    <td>{review.avatar}</td>
                                                    <td>{review.rating}</td>
                                                    <td>{review.comment}</td>
                                                    <td>
                                                        <button className="btn btn-primary mr-2">Edit</button>
                                                        <button className="btn btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            );
                                        }):(
                                            <tr>
                                                <td className="text-center py-5" colSpan="9">No reviews found.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}