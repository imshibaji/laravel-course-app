import { SharedData } from "@/types";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Nav() { 
    const { auth, settings } = usePage<SharedData>().props;
    const {data, setData, submit, processing, errors, reset} = useForm({
        s: '',
    });
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submit('get', route('search'), {
            onSuccess: () => {
                // reset('search');
            },
            onError: () => {
                console.log(errors);
                // reset('search');
            }
        });
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-brand">
            <div className="container">
                <Link className="navbar-brand" href="/">{settings?.website_title || "Shibaji Sir's Courses"}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/courses">All Courses</Link>
                        </li>
                    </ul>
                    <form onSubmit={submitHandler} className="mx-auto w-50 d-none d-lg-flex ">
                        <div className="input-group w-full">
                            <input name="s" value={data.s} onChange={(e) => setData('s', e.target.value)} className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">{processing ? 'Searching...' : 'Search'}</button>
                        </div>
                    </form>
                    <div className="ms-auto d-flex gap-2 justify-content-end">
                        { auth.user ? (
                            <>
                                <Link href={route('user.dashboard')} className="btn btn-outline-light" type="button">Dashboard</Link>
                                <Link href={route('logout')} method="post" className="btn btn-outline-light" type="button">Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link href={route('login')} className="btn btn-outline-light" type="button">Login</Link>
                                {/* <Link href={route('register')} className="btn btn-outline-light" type="button">Register</Link> */}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}