import Sidebar from "@/components/Sidebar";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import UserLayout from "@/layouts/UserLayout";
import { Link } from "@inertiajs/react";

export default function UserInfo() {
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
            <form>
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
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Save Changes
                </button>
            </form>
        </div>
        </InnerPageLayout>
        </UserLayout>
    );
}