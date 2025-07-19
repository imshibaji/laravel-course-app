import PageCard from "@/components/PageCard";
import FrontLayout from "@/layouts/FrontLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword() {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };
    return (
        <FrontLayout>
            <div className="container pt-5">
                <PageCard>
                    <h1>Forgot Password</h1>
                    <p>Please enter your email address to reset your password.</p>
                    <form onSubmit={submit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary" disabled={processing}>
                                {processing ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Send Password Reset Link'}
                            </button>
                        </div>
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