import FrontLayout from "@/layouts/FrontLayout";

export default function Checkout() {
    return (
        <FrontLayout>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card p-4">
                            <h1 className="text-center mb-4">Checkout</h1>
                            <hr className="my-4" />
                            <form className="row g-5 p-5">
                                <div className="col-md-6 m-0">
                                    <h2>Personal Information</h2>
                                    <div className="row g-3">
                                        <div className="col mb-3">
                                            <label htmlFor="first-name" className="form-label">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="first-name"
                                                placeholder="Enter your name" />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="last-name" className="form-label">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="last-name"
                                                placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobile" className="form-label">
                                            Mobile
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mobile"
                                            placeholder="Enter your mobile number" />
                                    </div>
                                </div>
                                <hr className="my-4 d-md-none" />
                                <div className="col-md-6 m-0">
                                    <div className="mb-3">
                                        <h2>Payment Information</h2>
                                        <div className="mb-3"></div>
                                        <label htmlFor="product" className="form-label">
                                            Product
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="product"
                                            placeholder="Enter product name" />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">
                                            Amount
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="amount"
                                            placeholder="Enter amount" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Complete Checkout
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}