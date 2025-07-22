import FrontLayout from '@/layouts/FrontLayout';
import { useForm } from '@inertiajs/react';

export default function PayuForm({paymentdata}: any) {
    console.log(paymentdata);
    
    const { data, setData, submit, processing, errors, reset } = useForm({
        firstname: paymentdata && paymentdata.firstname || '',
        lastname: paymentdata && paymentdata.lastname || '',
        email: paymentdata && paymentdata.email || '',
        mobile: paymentdata && paymentdata.phone || '',
        product: paymentdata && paymentdata.productinfo || '',
        amount: paymentdata && paymentdata.amount || '',
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submit('post', route('payu.pay'));
    }


    return (
        <FrontLayout>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <h1 className="text-center mb-4">Pay Now</h1>
                            {paymentdata.error && <div className="alert alert-danger">{paymentdata.error_Message}</div>}
                            <div className="text-center">
                                {errors && Object.keys(errors).length > 0 && (
                                    <div className="alert alert-danger">
                                        <ul className="mb-0">{Object.entries(errors).map(([key, value]) => <li key={key}>{value}</li>)}</ul>
                                    </div>
                                )}
                            </div>
                            <form onSubmit={submitHandler}>
                                <div className='row'>
                                    <div className="col form-group">
                                        <label htmlFor="firstname">First Name</label>
                                        <input type="text" className="form-control" id="firstname" name="firstname" value={data.firstname} onChange={(e) => setData('firstname', e.target.value)} />
                                    </div>
                                    <div className="col form-group">
                                        <label htmlFor="lastname">Last Name</label>
                                        <input type="text" className="form-control" id="lastname" name="lastname" value={data.lastname} onChange={(e) => setData('lastname', e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="text" className="form-control" id="mobile" name="mobile" value={data.mobile} onChange={(e) => setData('mobile', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product">Product</label>
                                    <input type="text" className="form-control" id="product" name="product" value={data.product} onChange={(e) => setData('product', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="text" className="form-control" id="amount" name="amount" value={data.amount} onChange={(e) => setData('amount', e.target.value)} />
                                </div>
                                <hr className="my-4" />
                                <div className="d-grid">
                                    <div className='btn-group'>
                                        <button type="submit" className="btn btn-primary">Pay Now</button>
                                        <button type="button" className="btn btn-secondary">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}
