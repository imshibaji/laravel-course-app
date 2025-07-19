export default function PageCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card p-4 shadow-sm">
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}