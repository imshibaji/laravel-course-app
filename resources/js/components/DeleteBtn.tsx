import { Link } from '@inertiajs/react';

export interface DeleteBtnProps {
    id: number;
    href?: string;
    title?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function DeleteBtn({id, href: routeUrl, title, className, children }: DeleteBtnProps) {
    return (
        <>
            <button type="button" className={className || "btn btn-sm btn-danger"} data-bs-toggle="modal" data-bs-target={"#deleteModal"+id}>
                {children || "Delete"}
            </button>
            <div className="modal fade" id={"deleteModal"+id} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Are you sure?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <p>Are you sure you want to delete this <b>{title}'s</b> record?</p>
                            <p>Once you delete this, there is no going back. Please be certain.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <Link href={routeUrl} method="delete" className="btn btn-danger" data-bs-dismiss="modal">
                                Delete Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}