import AdminNav from "@/components/AdminNav";
import Footer from "@/components/Footer";
import { Head, usePage } from "@inertiajs/react";
import Layout from "./Layout";
import Alert from "@/components/Alert";

export default function AdminLayout({ title, children }: { title?: string, children: React.ReactNode }) {
    const {flash} = usePage().props as any;
    return (
        <>
           <Layout title={title || "Welcome Admin"} nav={<AdminNav />}>
            {flash.success && <Alert type="success" icon="bi bi-check-circle">{flash.success}</Alert>}
            {flash.error && <Alert type="danger" icon="bi bi-x-circle-fill">{flash.error}</Alert>}
            {flash.warning && <Alert type="warning" icon="bi bi-exclamation-triangle">{flash.warning}</Alert>}
            {flash.info && <Alert type="info" icon="bi bi-info-circle">{flash.info}</Alert>}
            {children}
           </Layout>
        </>
    );
}