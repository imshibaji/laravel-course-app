import Footer from "@/components/Footer";
import { Head } from "@inertiajs/react";
import { initializeTheme } from '@/hooks/use-appearance';
import { useIsMobile } from '@/hooks/use-mobile';

export interface LayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
    image?: string;
    url?: string;
    canonical?: string;
    nav?: React.ReactNode;
    children: React.ReactNode;
}

export default function Layout({ title, nav, children }: LayoutProps) {
    // Initialize theme on load
    initializeTheme();
    // Check if the device is mobile
    const isMobile = useIsMobile();
    return (
        <>
            <Head title={title || "Welcome"}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
                {nav}
                <div className="layout">
                    {children}
                </div>
            <Footer />
        </>
    );
}