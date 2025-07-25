export default function InnerPageLayout({ sidebar, children }: { sidebar: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="py-3">
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-3">
                        {sidebar}
                    </div>
                    <div className="col-md-9">
                        <div className="card p-4">
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}