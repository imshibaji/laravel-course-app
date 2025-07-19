import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import { Link } from "@inertiajs/react";

export default function Courses() {
    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="Chapters" actions={
                    <Link href={route('admin.chapters.create')} className="btn btn-primary">Add New Chapter</Link>
                }>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th className="text-center">Image</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example row, replace with dynamic data */}
                                <tr>
                                    <td className="text-center">
                                        <img src="https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp" alt="Course Image" className="img-fluid rounded" style={{ width: '50px' }} />
                                    </td>
                                    <td>Introduction to Programming</td>
                                    <td>Learn the basics of programming.</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <Link href={route('admin.chapters.show', 1)} className="btn btn-secondary">Edit</Link>
                                            <Link href={route('admin.chapters.destroy', 1)} method="delete" className="btn btn-danger">Delete</Link>
                                        </div>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </Card>

            </div>
        </AdminLayout>
    );
}