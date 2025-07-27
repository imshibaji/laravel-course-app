import Footer from "@/components/Footer";
import { Head, usePage } from "@inertiajs/react";
import { initializeTheme } from '@/hooks/use-appearance';
import { useIsMobile } from '@/hooks/use-mobile';
import { SharedData } from "@/types";

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
    const {settings} = usePage<SharedData>().props;
    // Initialize theme on load
    initializeTheme();
    // Check if the device is mobile
    const isMobile = useIsMobile();
    return (
        <>
            <Head title={title || settings?.website_title}>
                <meta name="description" content={settings?.website_description} />
                <meta name="keywords" content={settings?.website_keywords} />
                <meta name="author" content={settings?.website_author} />
                {settings?.website_image && <meta name="image" content={settings?.website_image} />}
                {settings?.website_url && <meta property="og:url" content={settings?.website_url} />}
                <meta property="og:title" content={title || settings?.website_title} />
                <meta property="og:description" content={settings?.website_description} />
                { settings?.website_image && <meta property="og:image" content={settings?.website_image} />}
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title || settings?.website_title} />
                <meta name="twitter:description" content={settings?.website_description} />
                { settings?.website_image && <meta name="twitter:image" content={settings?.website_image} />}
                { settings?.website_canonical && <link rel="canonical" href={settings?.website_canonical} />}
                {settings?.favicon && <link rel="icon" href={settings?.favicon} />}
                {settings?.website_header}
            </Head>
                {nav}
                <div className="layout">
                    {children}
                </div>
            <Footer />
            {settings?.website_footer}
        </>
    );
}