import AdminLayout from "@/layouts/AdminLayout";
import Container from "../components/Container";
import Card from "../components/Card";
import { Link } from "@inertiajs/react";

export default function Show({ review }: any) {
    return (
        <AdminLayout>
            <Container y="3">
                <Card title="Review Details"
                    actions={
                        <div className="btn-group">
                            <Link href={route('admin.reviews.index')} className="btn btn-primary">Back to List</Link>
                            <Link href={route('admin.reviews.edit', review.id)} className="btn btn-warning">Edit Review</Link>
                        </div>
                    }
                >
                    <p>{review.comment}</p>
                    {review.avatar && <img src={review.avatar} />}
                    <h4>{review.name}</h4>
                    {review.rating && <p>Rating: {review.rating}</p>}
                    <p className="text-muted">{review.designation}, {review.company}</p>
                </Card>
            </Container>
        </AdminLayout>
    );
}