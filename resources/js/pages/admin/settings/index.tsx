import DeleteBtn from "@/components/DeleteBtn";
import AdminLayout from "@/layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function Settings({settings}: any) {
    return (
        <AdminLayout>
            <div className="container py-3">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">All Settings</h5>
                            {/* <Link href={route('admin.settings.create')} className="btn btn-primary">Add New Setting</Link> */}
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Key</th>
                                        <th scope="col">Value</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Status</th>
                                        <th className="text-center" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        settings.map((setting: any, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{setting.id}</th>
                                                    <td>{setting.key}</td>
                                                    <td>{setting.value.length > 50 ? setting.value.substring(0, 50) + '...' : setting.value.substring(0, 50)}</td>
                                                    <td>{setting.type}</td>
                                                    <td>{setting.description}</td>
                                                    <td>{setting.active === 1 ? 'Active' : 'Inactive'}</td>
                                                    <td className="text-center">
                                                        <div className="btn-group" role="group">
                                                            <Link href={route('admin.settings.edit', setting.id)} className="btn btn-warning">Edit</Link>
                                                            {/* <DeleteBtn id={setting.id} title={setting.key} href={route('admin.settings.destroy', setting.id)} className="btn btn-danger">Delete</DeleteBtn> */}
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