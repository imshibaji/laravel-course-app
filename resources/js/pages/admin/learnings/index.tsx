import AdminLayout from "@/layouts/AdminLayout";
import { Link } from "@inertiajs/react";


export default function Dashboard({ learnings }: any) {

    return (
        <AdminLayout>
            <div className="container py-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">User's Learning Progress Dashboard</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">User</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Total Chapters</th>
                                    <th scope="col">Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    learnings && learnings.length > 0 ?
                                    learnings.map((learning: any, index: number) => {
                                        return (
                                            <tr className="text-center" key={index}>
                                                <td>{learning.user.name}</td>
                                                <td>{learning.course.title}</td>
                                                <td>{learning.total_chapters}</td>
                                                <td>{learning.progress}%</td>
                                            </tr>
                                        );
                                    }): (
                                        <tr className="text-center">
                                            <td className="text-center my-5 py-5" colSpan={4}>No learnings found</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}