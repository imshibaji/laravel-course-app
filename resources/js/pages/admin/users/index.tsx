import DeleteBtn from "@/components/DeleteBtn";
import AdminLayout from "@/layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function Users({users}:any) {
    return (
        <AdminLayout>
            <div className="container py-3">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">All Users</h5>
                            <Link href={route('admin.users.create')} className="btn btn-primary">Add New</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Status</th>
                                        <th className="text-center" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user:any, index:number) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{user.id}</th>
                                                    <td>{user.firstname} {user.lastname}</td>
                                                    <td>{user.mobile}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.role}</td>
                                                    <td>{user.is_active ? 'Active' : 'Inactive'}</td>
                                                    <td className="text-center">
                                                        <div className="btn-group">
                                                            <Link href={route('admin.users.show', user.id)} className="btn btn-success btn-sm">View</Link>
                                                            <Link href={route('admin.users.edit', user.id)} className="btn btn-primary btn-sm">Edit</Link>
                                                            <DeleteBtn id={user.id} href={route('admin.users.destroy', user.id)} title={user.firstname} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
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