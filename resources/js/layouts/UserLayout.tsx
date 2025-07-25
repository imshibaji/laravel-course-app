import UserNav from "@/components/UserNav";
import Layout, { LayoutProps } from "./Layout";

export default function UserLayout({title,  children }: LayoutProps) {
  
  return (
    <>
        <Layout title={title || "Welcome User"} nav={<UserNav />} children={children} />
    </>
  );
}