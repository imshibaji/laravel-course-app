import SocialBtn from "@/components/SocialBtn";
import FrontLayout from "@/layouts/FrontLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

type RegisterForm = {
    firstname: string;
    lastname: string;
    mobile: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Signup() {
     const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };
    return (
        <FrontLayout>
        <div className="py-5" style={{ backgroundColor: "#e6e6e6", minHeight: "100vh" }}>
            <div className="container py-2">
                <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <div className="card-body">
                            <h1>Signup</h1>
                            <p className="text-muted">Create a new account</p>
                            <SocialBtn />
                            <hr />
                            <h3 className="card-title">Sign Up</h3>
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
                                <div className="row">
                                    <div className="col mb-3">
                                        <label htmlFor="firstName" className="form-label">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            placeholder="First Name"
                                            value={data.firstname}
                                            onChange={(e) => setData('firstname', e.target.value)}
                                        />
                                    </div>
                                    <div className="col mb-3">
                                        <label htmlFor="lastName" className="form-label">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder="Last Name"
                                            value={data.lastname}
                                            onChange={(e) => setData('lastname', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">
                                        Mobile
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Mobile"
                                        value={data.mobile}
                                        onChange={(e) => setData('mobile', e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password_confirmation" className="form-label">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password_confirmation"
                                        placeholder="Confirm Password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                    />
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="terms"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="terms">
                                        I agree to the <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary ms-2"
                                    onClick={() => reset()}
                                    disabled={processing}
                                >
                                    Reset
                                </button>
                            </form>
                            <p className="mt-3 text-center">
                                Already have an account? <Link href="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </FrontLayout>
    );
}
