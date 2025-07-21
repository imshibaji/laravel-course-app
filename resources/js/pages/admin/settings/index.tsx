import AdminLayout from "@/layouts/AdminLayout";

export default function Settings({settings}: any) {
    return (
        <AdminLayout>
            <div className="container py-3">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">All Settings</h5>
                            <button className="btn btn-primary">Add New</button>
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
                                                    <td>{setting.value}</td>
                                                    <td>{setting.type}</td>
                                                    <td>{setting.description}</td>
                                                    <td>{setting.active ? 'Active' : 'Inactive'}</td>
                                                    <td className="text-center">
                                                        <button className="btn btn-primary me-2">Edit</button>
                                                        <button className="btn btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>website_title</td>
                                        <td>Course App</td>
                                        <td>String</td>
                                        <td>Website Title</td>
                                        <td>Active</td>
                                        <td className="text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-primary">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}