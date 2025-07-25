import Sidebar from "@/components/Sidebar";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import UserLayout from "@/layouts/UserLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";


export default function Password() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <UserLayout>
            <InnerPageLayout sidebar={
                <Sidebar title="Settings Menu" extra={
                    <Link href={route('logout')} method="post" className="list-group-item list-group-item-action">
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </Link>
                } />
            }>
                <div>
                    <h1>Password</h1>
                    <p>Update your password here.</p>
                    {recentlySuccessful && <div className="alert alert-success">Password updated successfully.</div>}
                    {errors && Object.keys(errors).length > 0 && (
                        <div className="alert alert-danger">
                            <ul className="mb-0">
                                {Object.entries(errors).map(([key, value]) => (
                                    <li key={key}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <form onSubmit={updatePassword}>
                        <div className="form-group mb-3">
                            <label htmlFor="current_password">Current Password</label>
                            <input
                                type="password"
                                id="current_password"
                                className="form-control"
                                ref={currentPasswordInput}
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                            />
                            {errors.current_password && <span className="text-danger">{errors.current_password}</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">New Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password_confirmation">Confirm Password</label>
                            <input
                                type="password"
                                id="password_confirmation"
                                className="form-control"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            {errors.password_confirmation && <span className="text-danger">{errors.password_confirmation}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" disabled={processing}>
                            Update Password
                        </button>
                    </form>
                </div>
            </InnerPageLayout>
        </UserLayout>
    );
}