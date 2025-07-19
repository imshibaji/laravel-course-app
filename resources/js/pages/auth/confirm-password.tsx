import PageCard from "@/components/PageCard";
import FrontLayout from "@/layouts/FrontLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<{ password: string }>>({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };
    return (
        <FrontLayout>
            <div className="container pt-5">
                <PageCard>
                    <h1>Confirm Password</h1>
                    <p>Please confirm your password before continuing.</p>
                    {/* Confirm password form can be added here */}
                    <form onSubmit={submit}>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                required
                            />
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">
                                {processing ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Confirm Password'}
                            </button>
                        </div>
                    </form>
                    <p className="mt-3">
                        Forgot your password? <a href={route('password.request')}>Reset it here</a>.
                    </p>
                    <p>
                        Don't have an account? <a href={route('register')}>Register here</a>.
                    </p>
                </PageCard>
            </div>
        </FrontLayout>
    );
}   