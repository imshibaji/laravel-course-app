import AdminLayout from "@/layouts/AdminLayout";


export default function Dashboard({ orders }: any) {

    return (
        <AdminLayout>
            <div className="container py-5">
                <h2>Orders Section</h2>
            </div>
        </AdminLayout>
    );
}