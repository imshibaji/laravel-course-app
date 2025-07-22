import SocialBtn from "@/components/SocialBtn";
import FrontLayout from "@/layouts/FrontLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };
    return (
        <FrontLayout>
            <div className="container py-5">
                <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <div className="card-body">
                            {/* <h3 className="card-title">Login</h3>
                            <p className="text-muted">Welcome back! Please login to your account.</p>
                            <SocialBtn />
                            <hr /> */}
                            <h3 className="text-center my-4">Login with Email</h3>
                            {errors && Object.keys(errors).length > 0 && (
                                <div className="alert alert-danger">
                                    <ul className="mb-0">
                                        {Object.entries(errors).map(([key, value]) => (
                                            <li key={key}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" onChange={(e) => setData('email', e.target.value)} value={data.email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setData('password', e.target.value)} value={data.password} />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="remember" onChange={(e) => setData('remember', e.target.checked)} />
                                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                                    </div>
                                    <div className="mb-3">
                                        <Link href={route('password.request')}>Forgot your password?</Link>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary" disabled={processing}>
                                        {processing ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                            </form>
                            <p className="mt-3 text-center">
                                Don't have an account? <Link href="/register">Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </FrontLayout>
    );
}