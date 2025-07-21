import DeleteUser from "@/components/delete-user";
import Sidebar from "@/components/Sidebar";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import UserLayout from "@/layouts/UserLayout";
import { SharedData } from "@/types";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

interface ProfileForm {
    firstname: string;
    lastname: string;
    mobile: string;
    email: string;
}

export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        firstname: auth.user.firstname,
        lastname: auth.user.lastname,
        mobile: auth.user.mobile,
        email: auth.user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
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
                <div className="container">
                    <h1>User Profile</h1>
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
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input value={data.mobile} onChange={(e) => setData('mobile', e.target.value)} type="text" className="form-control" id="mobile" placeholder="Mobile" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        {mustVerifyEmail && auth.user.email_verified_at === null && (
                            <div>
                                <p className="text-sm mt-2 text-foreground">
                                    Your email address is unverified.{' '}
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="text-primary underline"
                                    >
                                        Click here to resend the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="text-sm mt-2 text-success">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary">
                            {processing && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                            {recentlySuccessful ? 'Saved.' : 'Save Changes'}
                        </button>
                    </form>
                    <hr />
                    {/* delete account form can be added here */}
                    <div className="text-center">
                        <DeleteUser />
                    </div>
                </div>
            </InnerPageLayout>
        </UserLayout>
    );
}