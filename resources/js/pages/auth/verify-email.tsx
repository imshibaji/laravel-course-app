import PageCard from "@/components/PageCard";
import FrontLayout from "@/layouts/FrontLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <FrontLayout>
            <div className="container pt-5">
                <PageCard>
                    <h1>Verify Email</h1>
                    <p>Please verify your email address by clicking on the link we just emailed to you.</p>
                    {status === 'verification-link-sent' && (
                        <div className="mb-3 alert alert-success text-center text-sm text-success">
                            A new verification link has been sent to the email address you provided during registration.
                        </div>
                    )}
                    <form onSubmit={submit}>
                        <div className="d-grid gap-2">
                            <button disabled={processing} className="btn btn-secondary">
                                {processing && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                Resend verification email
                            </button>
                        </div>
                    </form>
                </PageCard>
            </div>
        </FrontLayout>
    );
}