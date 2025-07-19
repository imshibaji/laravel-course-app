import AdminNav from "@/components/AdminNav";
import Footer from "@/components/Footer";
import { Head } from "@inertiajs/react";
import Layout from "./Layout";

export default function AdminLayout({ children }: React.PropsWithChildren) {
    return (
        <>
           <Layout nav={<AdminNav />} children={children} />
        </>
    );
}