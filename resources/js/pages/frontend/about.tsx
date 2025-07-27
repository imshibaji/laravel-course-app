import AppMarkdown from "@/components/AppMarkdown";
import Hero from "@/components/Hero";
import FrontLayout from "@/layouts/FrontLayout";
import { usePage } from "@inertiajs/react";

export default function AboutUs() {
    const { settings } = usePage().props as any;
    return (
        <FrontLayout title={settings.about_us_title || "Page Title"}>
            <section>
                <Hero image={settings.about_us_image} title={settings.about_us_title} subtitle={settings.about_us_description} />
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <AppMarkdown content={settings.about_us_content} />
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}