import DeleteBtn from "@/components/DeleteBtn";
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
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th className="text-center">Rating</th>
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
                                                    <td>{review.avatar? (<img src={review.avatar} alt={review.name} className="img-thumbnail" />):(<img src="/images/image-placeholder.jpg" width={80} alt={review.name} className="img-thumbnail" />)}</td>
                                                    <td>
                                                        <strong>{review.name}</strong><br />
                                                        <small className="text-muted">{review.designation}, {review.company}</small>
                                                    </td>
                                                    <td className="text-center">{review.rating}</td>
                                                    <td>{review.comment.length > 50 ? review.comment.substr(0, 50) + '...' : review.comment}</td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <Link href={route('admin.reviews.show', review.id)} className="btn btn-sm btn-info">View</Link>
                                                            <Link href={route('admin.reviews.edit', review.id)} className="btn btn-sm btn-primary">Edit</Link>
                                                            <DeleteBtn id={review.id} title={review.name} href={route('admin.reviews.destroy', review.id)} className="btn btn-sm btn-danger">Delete</DeleteBtn>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        }):(
                                            <tr>
                                                <td className="text-center py-5" colSpan={5}>No reviews found.</td>
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