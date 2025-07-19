import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import { Link } from "@inertiajs/react";
import Markdown from 'react-markdown'

const menus = [
    { label: "Play", link: "#" },
    { label: "Details", link: "#" },
    { label: "Instructor", link: "#" },
];

export default function CourseShow({ course }: any) {
    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="Course Details" actions={
                    <div className="btn-group" role="group">
                        <Link href={route('admin.courses.index')} className="btn btn-warning">Back to List</Link>
                        <Link href={route('admin.chapters.create')} className="btn btn-primary">Add New Chapter</Link>
                    </div>

                }>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">{course.title}</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={course.image ? "/images/courses/" + course.image : "https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp"} alt="Course Image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src={course.certificate ? "/images/certificates/" + course.certificate : "https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp"} alt="Course Image" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="card-body mt-3">
                                    <Markdown>
                                        {course.description || 'Course Description'}
                                    </Markdown>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-9">
                                    <h3 className="text-muted">Chapters List</h3>
                                </div>
                                <div className="col-md-3">
                                    <div className="d-flex justify-content-end items-center">
                                        <Link href={route('admin.courses.edit', course.id)} className="btn btn-warning">Edit Course</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Image</th>
                                            <th>Title</th>
                                            <th>Status</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Example row, replace with dynamic data */}
                                        <tr>
                                            <td className="text-center">
                                                <img src="https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp" alt="Course Image" className="img-fluid rounded" style={{ width: '50px' }} />
                                            </td>
                                            <td>Introduction to Programming</td>
                                            <td>Active</td>
                                            <td className="text-center">
                                                <div className="btn-group" role="group">
                                                    <Link href={route('admin.chapters.show', 1)} className="btn btn-sm btn-info">View</Link>
                                                    <Link href={route('admin.chapters.edit', 1)} className="btn btn-sm btn-secondary">Edit</Link>
                                                    <Link href={route('admin.chapters.destroy', 1)} method="delete" className="btn btn-sm btn-danger">Delete</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <img src="https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp" alt="Course Image" className="img-fluid rounded" style={{ width: '50px' }} />
                                            </td>
                                            <td>Introduction to Programming</td>
                                            <td>Inactive</td>
                                            <td className="text-center">
                                                <div className="btn-group" role="group">
                                                    <Link href={route('admin.chapters.show', 1)} className="btn btn-sm btn-info">View</Link>
                                                    <Link href={route('admin.chapters.edit', 1)} className="btn btn-sm btn-secondary">Edit</Link>
                                                    <Link href={route('admin.chapters.destroy', 1)} method="delete" className="btn btn-sm btn-danger">Delete</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Add more rows as needed */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Card>

            </div>
        </AdminLayout>
    );
}