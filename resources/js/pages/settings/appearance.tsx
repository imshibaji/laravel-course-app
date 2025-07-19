import Sidebar from "@/components/Sidebar";
import InnerPageLayout from "@/layouts/InnerPageLayout";
import UserLayout from "@/layouts/UserLayout";
import { Link } from "@inertiajs/react";
import AppearanceTabs from "@/components/AppearanceTabs";

export default function Appearance() {
    return (
        <UserLayout>
            <InnerPageLayout sidebar={
                <Sidebar title="Settings Menu" extra={
                    <Link href={route('logout')} method="post" className="list-group-item list-group-item-action">
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </Link>
                } />
            }>
                <div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-lg font-medium leading-tight">Appearance settings</h2>
                            <p className="text-sm text-muted-foreground">Update your account's appearance settings</p>
                        </div>
                        <AppearanceTabs />
                    </div>
                </div>
            </InnerPageLayout>
        </UserLayout>
    );
}