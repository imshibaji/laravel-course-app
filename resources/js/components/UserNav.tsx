import { SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";

export default function UserNav() {
    const { auth, settings, location: url } = usePage<SharedData>().props;
    const name = `${auth.user?.firstname}` || "Guest";
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-brand">
            <div className="container">
                <Link className="navbar-brand" href="/user">{settings?.website_title || "Shibaji Sir's Courses"}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={location.pathname === "/user/dashboard" ? "nav-link active" : "nav-link"}  aria-current="page" href={route('user.dashboard')}>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={location.pathname === "/user/courses" ? "nav-link active" : "nav-link"} aria-current="page" href={route('user.courses')}>My All Courses</Link>
                        </li>
                    </ul>
                    <div className="ms-auto d-flex gap-2">
                        {auth.user?.role==="admin" && (
                            <Link href="/admin" className="btn btn-outline-light">
                                <i className="bi bi-shield-lock me-1"></i> Admin Panel
                            </Link>
                        )}
                        <Link href="/settings/profile" className="btn btn-outline-light">
                            <i className="bi bi-person-square me-1"></i>
                            {name}
                        </Link>
                        <Link href={route('logout')} method="post" className="btn btn-outline-light">
                            <i className="bi bi-box-arrow-right"></i> Logout
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}