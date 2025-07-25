import FrontLayout from "@/layouts/FrontLayout";
import { useForm } from "@inertiajs/react";

export default function Checkout({user, course}: any) {
    const {data, setData, submit, processing, errors, reset} = useForm({
        course: course.id,
        user: user.id,
        firstname: user && user.firstname || '',
        lastname: user && user.lastname || '',
        email: user && user.email || '',
        mobile: user && user.mobile || '',
        product: course.title || '',
        amount: course.offer_price || course.price || 0,
    });
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submit('post', route('payu.pay'));
    }
    return (
        <FrontLayout>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card p-4">
                            <h1 className="text-center mb-4">Checkout</h1>
                            <hr className="my-4" />
                            {errors && Object.keys(errors).length > 0 && (
                                <div className="alert alert-danger">
                                    <ul className="mb-0">
                                        {Object.entries(errors).map(([key, value]) => (
                                            <li key={key}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <form onSubmit={submitHandler} className="row g-5 p-5">
                                <div className="col-md-6 m-0">
                                    <h2>Personal Information</h2>
                                    <div className="row g-3">
                                        <div className="col mb-3">
                                            <label htmlFor="first-name" className="form-label">First Name</label>
                                            <input name="firstname" value={data.firstname} onChange={(e) => setData('firstname', e.target.value)} type="text" className="form-control" id="first-name" placeholder="Enter your name" />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="last-name" className="form-label">Last Name</label>
                                            <input name="lastname" value={data.lastname} onChange={(e) => setData('lastname', e.target.value)} type="text" className="form-control" id="last-name" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobile" className="form-label">Mobile</label>
                                        <input name="mobile" value={data.mobile} onChange={(e) => setData('mobile', e.target.value)} type="text" className="form-control" id="mobile" placeholder="Enter your mobile number" />
                                    </div>
                                </div>
                                <hr className="my-4 d-md-none" />
                                <div className="col-md-6 m-0">
                                    <div className="mb-3">
                                        <h2>Payment Information</h2>
                                        <div className="mb-3"></div>
                                        <label htmlFor="product" className="form-label">Product</label>
                                        <input readOnly name="product" value={data.product} onChange={(e) => setData('product', e.target.value)} type="text" className="form-control" id="product" placeholder="Enter product name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Amount</label>
                                        <input readOnly name="amount" value={data.amount} onChange={(e) => setData('amount', e.target.value)} type="number" className="form-control" id="amount" placeholder="Enter amount" />
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button type="submit" className="btn btn-primary">
                                        {processing ? 'Processing...' : 'Pay Now'}
                                    </button>
                                    <button type="button" className="btn btn-secondary">
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}