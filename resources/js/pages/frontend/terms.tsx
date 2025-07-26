import AppMarkdown from "@/components/AppMarkdown";
import Hero from "@/components/Hero";
import FrontLayout from "@/layouts/FrontLayout";
import { usePage } from "@inertiajs/react";

export default function Page() {
    const { settings } = usePage().props as any;
    return (
        <FrontLayout title={settings.term_and_condition_title || "Page Title"}>
            <section className="py-3">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-start mb-0">{settings.term_and_condition_title || "Page Title"}</h3>
                            <p className="text-start mb-4">{settings.term_and_condition_description || "Page Description"}</p>
                            <hr className="my-4" />
                            <AppMarkdown content={settings.term_and_condition_content} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="bg-tertiary py-5">
                <div className="container">
                    <h2 className="text-center mb-4">What Students Say</h2>
                    <div className="row g-4">
                        <Review message="I landed a job after completing the web dev course. Highly recommended!" author="Rahul D., Developer" />
                        <Review message="I had a great experience with this course. The instructors were knowledgeable and helpful." author="John Doe, Designer" />
                        <Review message="The course was very engaging and interactive. I learned a lot in a short period of time." author="Jane Smith, Developer" />
                        <Review message="The course was very engaging and interactive. I learned a lot in a short period of time." author="Jane Smith, Developer" />
                    </div>
                </div>
            </section> */}
        </FrontLayout>
    );
}