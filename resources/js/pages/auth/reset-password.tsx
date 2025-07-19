import PageCard from "@/components/PageCard";
import FrontLayout from "@/layouts/FrontLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

interface ResetPasswordProps {
    token: string;
    email: string;
}

type ResetPasswordForm = {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<ResetPasswordForm>>({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <FrontLayout>
            <div className="container pt-5">
                <PageCard>
                    <h1>Reset Password</h1>
                    <p>Please enter your new password below.</p>
                    <form onSubmit={submit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={data.email}
                                readOnly
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">New Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
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
                        <button type="submit" className="btn btn-primary" disabled={processing}>
                            {processing ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Reset Password'}
                        </button>
                    </form>
                    <p className="mt-3">
                        Remembered your password? <a href={route('login')}>Login here</a>.
                    </p>
                    <p>
                        Don't have an account? <a href={route('register')}>Register here</a>.
                    </p>
                </PageCard>
            </div>
        </FrontLayout>
    );
}