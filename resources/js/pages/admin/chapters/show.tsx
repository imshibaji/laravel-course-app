import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import Sidebar from "@/components/Sidebar";
import { Link } from "@inertiajs/react";

const menus = [
    { label: "Play", link: "#" },
    { label: "Details", link: "#" },
    { label: "Instructor", link: "#" },
];

export default function ChapterShow() {
    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="Chapter Details" actions={
                    <Link href={route('admin.chapters.create')} className="btn btn-primary">Add New Chapter</Link>
                }>
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp" alt="Course Image" className="img-fluid rounded" />
                            <div className="mt-3">
                                <Sidebar title="Chapter Config" menus={menus} />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Image</th>
                                            <th>Title</th>
                                            <th>Description</th>
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
                                            <td>Learn the basics of programming.</td>
                                            <td className="text-center">
                                                <div className="btn-group" role="group">
                                                    <button className="btn btn-info">View</button>
                                                    <button className="btn btn-secondary">Edit</button>
                                                    <button className="btn btn-danger">Delete</button>
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