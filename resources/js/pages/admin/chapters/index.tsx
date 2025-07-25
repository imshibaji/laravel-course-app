import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import { Link } from "@inertiajs/react";

export default function ChaptersList({ chapters }: any) {
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
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    chapters.map((chapter: any) => (
                                        <tr key={chapter.id}>
                                            <td>{chapter.title}</td>
                                            <td>{chapter.details.substring(0, 50)}...</td>
                                            <td>{chapter.status}</td>
                                            <td className="text-center">
                                                <div className="btn-group" role="group">
                                                    <Link href={route('admin.chapters.show', chapter.id)} className="btn btn-info">View</Link>
                                                    <Link href={route('admin.chapters.edit', chapter.id)} className="btn btn-primary">Edit</Link>
                                                    <Link href={route('admin.chapters.destroy', chapter.id)} className="btn btn-danger">Delete</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </Card>

            </div>
        </AdminLayout>
    );
}