import { Link } from "@inertiajs/react";

export interface MenuItem {
    label: string;
    link: string| (() => void) | any;
    icon?: string;
    children?: MenuItem[];
}

export interface SidebarProps {
    title?: string;
    menus?: MenuItem[];
    extra?: React.ReactNode; // Optional extra content, e.g., a button or additional links
}

export default function Sidebar({title, menus, extra}: SidebarProps) {
    menus = menus || [
        { label: "Profile", link: "/settings/profile" },
        { label: "Password", link: "/settings/password" },
        { label: "Appearance", link: "/settings/appearance" },
    ];
    return (
        <ul className="list-group">
            <div className="list-group-item list-group-item-action active">
                { title || "User Menu" }
            </div>
            <div className="overflow-auto" style={{ maxHeight: "calc(75vh)" }}>
            { menus?.map((menu, index) => (
                <li key={index} className="list-group-item list-group-item-action">
                    {
                        menu.link instanceof Function ? (
                            <button onClick={menu.link} className="btn btn-link text-decoration-none text-muted d-flex align-items-center">
                                {menu.icon && <i className={menu.icon + " me-2"}></i>}
                                {menu.label}
                            </button>
                        ):(
                            <Link href={menu.link}  className="text-decoration-none text-muted d-flex align-items-center">
                                {menu.icon && <i className={menu.icon + " me-2"}></i>}
                                {menu.label}
                            </Link>
                        )
                    }
                    
                    {/* Render children if they exist */}
                    {menu.children && menu.children.length > 0 && (
                        <ul className="list-group mt-2">
                            {menu.children.map((child, childIndex) => (
                                <li key={childIndex} className="list-group-item list-group-item-action">
                                    {child.link instanceof Function ? (
                                        <button onClick={child.link} className="btn btn-link text-decoration-none text-muted d-flex align-items-center">
                                            {child.icon && <i className={child.icon + " me-2"}></i>}
                                            {child.label}
                                        </button>
                                    ):(
                                        <Link href={child.link} className="text-decoration-none text-muted d-flex align-items-center">
                                            {child.icon && <i className={child.icon + " me-2"}></i>}
                                            {child.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            )) }
            </div>
            {/* Render extra content if provided */}
            {extra}
        </ul>
        
    );
}