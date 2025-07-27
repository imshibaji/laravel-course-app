import AppMarkdown from "@/components/AppMarkdown";
import Hero from "@/components/Hero";
import FrontLayout from "@/layouts/FrontLayout";
import { usePage } from "@inertiajs/react";

export default function Page() {
    const { settings } = usePage().props as any;
    return (
        <FrontLayout title={settings.contact_us_title || "Page Title"}>
            <section>
                            <Hero image={settings.contact_us_image} title={settings.contact_us_title} subtitle={settings.contact_us_description} />
                        </section>
            
                        <section className="py-5">
                            <div className="container">
                                <div className="card">
                                    <div className="card-body">
                                        <AppMarkdown content={settings.contact_us_content} />
                                    </div>
                                </div>
                            </div>
                        </section>
        </FrontLayout>
    );
}