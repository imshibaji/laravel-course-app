import AdminLayout from "@/layouts/AdminLayout";


export default function Dashboard({ learnings }: any) {

    return (
        <AdminLayout>
            <div className="container py-5">
                <h2>Learnings Progress Section</h2>
            </div>
        </AdminLayout>
    );
}