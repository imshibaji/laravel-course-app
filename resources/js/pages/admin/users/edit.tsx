import AdminLayout from "@/layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function UserEdit({ user }: any) {
    const { data, setData, put, processing, errors, reset, recentlySuccessful } = useForm({
        firstname: user.firstname,
        lastname: user.lastname,
        mobile: user.mobile,
        email: user.email,
        role: user.role,
        is_active: user.is_active,
        password: user.password ?? '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('admin.users.update', user.id), {
            preserveScroll: true,
            onSuccess: () => reset('password', 'password_confirmation'),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                }
            },
        });
    }
    return (
        <AdminLayout>
            <div className="container py-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">User Profile</h5>
                    </div>
                    <div className="card-body">
                        {recentlySuccessful && <div className="alert alert-success">User updated successfully.</div>}
                        {errors && Object.keys(errors).length > 0 && (
                            <div className="alert alert-danger">
                                <ul>{Object.values(errors).map((error) => <li key={error}>{error}</li>)}</ul>
                            </div>
                        )}
                        <form onSubmit={submit}>
                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input value={data.firstname} onChange={(e) => setData('firstname', e.target.value)} type="text" className="form-control" id="firstName" placeholder="First Name" />
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input value={data.lastname} onChange={(e) => setData('lastname', e.target.value)} type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input value={data.mobile} onChange={(e) => setData('mobile', e.target.value)} type="text" className="form-control" id="mobile" placeholder="Mobile" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <div className="input-group">
                                        <label htmlFor="role" className="input-group-text">Role</label>
                                        <select value={data.role} onChange={(e) => setData('role', e.target.value)} className="form-select" id="role">
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col mb-3">
                                    <div className="form-check">
                                        <input checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} className="form-check-input" type="checkbox" id="isActive" />
                                        <label className="form-check-label" htmlFor="isActive">Is Active</label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input value={data.password} onChange={(e) => setData('password', e.target.value)} type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                    <input value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} type="password" className="form-control" id="password_confirmation" placeholder="Confirm Password" />
                                </div>
                            </div>
                            <div className="btn-group mb-3">
                                <button type="submit" className="btn btn-primary">
                                    {processing && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                    {recentlySuccessful ? 'Saved.' : 'Save Changes'}
                                </button>
                                <button onClick={() => reset()} className="btn btn-secondary">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}