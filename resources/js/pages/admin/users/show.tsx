import AdminLayout from "@/layouts/AdminLayout";

export default function Show({ user }: any) {
    return (
        <AdminLayout>
            <div className="container py-5">
                <h1>{user.name}</h1>
                <p>Welcome to the admin show.</p>
            </div>
        </AdminLayout>
    );
}