export default function Alert({icon, type, children }: { icon?: string, type?: string, children: React.ReactNode }) {
    return (
        <div className={`alert alert-${type || "warning"} alert-dismissible fade show`} role="alert">
            <div className="container px-5">
                {icon && <i className={icon + " me-2" || "tf-icons bx bx-bell"}></i>}
                {children}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}