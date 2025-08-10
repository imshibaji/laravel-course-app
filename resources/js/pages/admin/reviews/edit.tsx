import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import Container from "../components/Container";
import { Link, useForm } from "@inertiajs/react";

export default function Edit({review, users, courses }: any) {
    const { data, setData, put, processing, errors } = useForm(review);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        put(route('admin.reviews.update', review.id));
    };
    return (
        <AdminLayout>
            <Container y="3">
                <Card title="Create Review"
                    actions={<Link href={route('admin.reviews.index')} className="btn btn-primary">Back to List</Link>}
                >
                    {errors && errors.message && <div className="alert alert-danger">{errors.message}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="form-group col-md">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                            </div>

                            <div className="form-group col-md">
                                <label htmlFor="designation">Designation</label>
                                <input type="text" className="form-control" name="designation" value={data.designation} onChange={(e) => setData('designation', e.target.value)} />
                            </div>

                            <div className="form-group col-md">
                                <label htmlFor="company">Company</label>
                                <input type="text" className="form-control" name="company" value={data.company} onChange={(e) => setData('company', e.target.value)} />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="form-group col-md">
                                <label htmlFor="avatar">Avatar</label>
                                <input type="text" className="form-control" name="avatar" value={data.avatar} onChange={(e) => setData('avatar', e.target.value)} />
                            </div>

                            <div className="form-group col-md">
                                <label htmlFor="rating">Rating</label>
                                <input type="text" className="form-control" name="rating" value={data.rating} onChange={(e) => setData('rating', e.target.value)} />
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="comment">Comment</label>
                            <textarea className="form-control" name="comment" value={data.comment} onChange={(e) => setData('comment', e.target.value)} rows={3} />
                        </div>

                        <div className="row mb-3">
                            <div className="form-group col-md">
                                <label htmlFor="user_id">User ID</label>
                                <select className="form-control" name="user_id" value={data.user_id} onChange={(e) => setData('user_id', e.target.value)}>
                                    <option value="">Select User</option>
                                    {users.map((user: any) => (
                                        <option key={user.id} value={user.id}>{user.firstname} {user.lastname}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group col-md">
                                <label htmlFor="course_id">Course ID</label>
                                <select className="form-control" name="course_id" value={data.course_id} onChange={(e) => setData('course_id', e.target.value)}>
                                    <option value="">Select Course</option>
                                    {courses.map((course: any) => (
                                        <option key={course.id} value={course.id}>{course.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid mb-3">
                            <button type="submit" className="btn btn-primary w-full" disabled={processing}>Submit</button>
                        </div>
                    </form>
                </Card>
            </Container>
        </AdminLayout>
    );
}