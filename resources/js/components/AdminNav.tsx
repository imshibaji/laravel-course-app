import { SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";

export default function AdminNav() {
    const { auth, settings } = usePage<SharedData>().props;
    const name = `${auth.user?.firstname}` || "Guest";
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-brand">
            <div className="container">
                <Link className="navbar-brand" href="/admin">{settings?.website_title || "Shibaji Sir's Courses"} Admin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={route('admin.dashboard')}>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={route('admin.courses.index')}>Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={route('admin.orders.index')}>Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={route('admin.users.index')}>Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={route('admin.learnings.index')}>Learnings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={route('admin.reviews.index')}>Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={route('admin.settings.index')}>Website Settings</Link>
                        </li>
                    </ul>
                    <div className="ms-auto d-flex gap-2">
                        <Link href={route('user')} className="btn btn-outline-light">
                            <i className="bi bi-person me-1"></i> User Panel
                        </Link>
                        <Link href={route('profile.edit')} className="btn btn-outline-light">
                            <i className="bi bi-person-square me-1"></i>
                            {name || "Guest"}
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