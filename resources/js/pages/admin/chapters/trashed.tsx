import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import { Link } from "@inertiajs/react";

export default function ChaptersTrashed({ chapters }: any) {
    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="Chapters" actions={
                    <Link href={route('admin.chapters.index')} className="btn btn-primary">Back to Chapters</Link>
                }>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example row, replace with dynamic data */}
                                {
                                    chapters.map((chapter: any) => (
                                        <tr key={chapter.id}>
                                            <td>{chapter.title}</td>
                                            <td>{chapter.details.substring(0, 50)}...</td>
                                            <td>{chapter.status}</td>
                                            <td className="text-center">
                                                <div className="btn-group" role="group">
                                                    <Link href={route('admin.chapters.restore', chapter.id)} className="btn btn-success">Restore</Link>
                                                    <Link href={route('admin.chapters.forceDelete', chapter.id)} className="btn btn-info">Delete Permanently</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </Card>

            </div>
        </AdminLayout>
    );
}