import PageCard from "@/components/PageCard";
import FrontLayout from "@/layouts/FrontLayout";
import { Link } from "@inertiajs/react";

export default function PayuResponse({ valid, status, posted }: any) {
    return (
        <FrontLayout>
            <div className="container py-5">
                <PageCard>
                    <h2>
                        {(status === 'success' ? '✅ Payment Successful' : `⚠️ Payment ${posted.status}`)}
                    </h2>
                    <ul>
                        <li><strong>Name:</strong> {posted.firstname} {posted.lastname}</li>
                        <li><strong>Email:</strong> {posted.email}</li>
                        <li><strong>Mobile:</strong> {posted.phone}</li>
                        <li><strong>Product:</strong> {posted.productinfo}</li>
                        <li><strong>Amount:</strong> ₹{posted.amount}</li>
                        <li><strong>TxnID:</strong> {posted.txnid}</li>
                    </ul>
                    <hr className="my-4" />
                    <div className="text-center">
                        {status === 'success' ? <Link href={route('register', {posted})} className="btn btn-success">Register Now</Link> : <Link href={route('payu.form', { posted })} className="btn btn-warning">Retry Payment</Link>}
                    </div>
                </PageCard>
            </div>
        </FrontLayout>
    );
}
