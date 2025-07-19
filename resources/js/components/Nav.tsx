import { SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";

export default function Nav() { 
    const { auth } = usePage<SharedData>().props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-brand">
            <div className="container">
                <Link className="navbar-brand" href="/">Shibaji Sir's Courses</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/courses">All Courses</Link>
                        </li>
                    </ul>
                    <div className="ms-auto d-flex gap-2">
                        { auth.user ? (
                            <>
                                <Link href={route('user.dashboard')} className="btn btn-outline-light" type="button">Dashboard</Link>
                                <Link href={route('logout')} method="post" className="btn btn-outline-light" type="button">Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link href={route('login')} className="btn btn-outline-light" type="button">Login</Link>
                                <Link href={route('register')} className="btn btn-outline-light" type="button">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}