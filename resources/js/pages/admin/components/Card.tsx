
export interface CardProps {
    title?: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export default function Card({ title, actions, children, footer }: CardProps) {
    return (
        <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">{title}</h5>
                {actions && <div className="card-actions">{actions}</div>}
            </div>
            <div className="card-body">
                {children}
            </div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}