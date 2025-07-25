import Nav from "@/components/Nav";
import Layout, { LayoutProps } from "./Layout";

export default function FrontLayout({ title, children }: LayoutProps) {
    return (
        <Layout title={title || "Welcome Guest"} nav={<Nav />} children={children} />
    );
}