import { usePage } from "@inertiajs/react";
import MainCourseCard from "../../components/CourseCard";
import Hero from "../../components/Hero"; // Adjust the path as necessary
import UserLayout from "@/layouts/UserLayout";


export default function Dashboard({ courses }: any) {
    const {settings} = usePage().props as any;
    
    return (
        <UserLayout>
            <section>
                <Hero
                    title={settings.user_dashboard_title || "Explore Our Courses"}
                    subtitle={settings.user_dashboard_subtitle || "Find the right course to enhance your skills and knowledge."}
                    image={settings.user_dashboard_image ? settings.user_dashboard_image : "/images/banner.jpg"}
                    buttonText={settings.user_dashboard_button_text || "Explore Courses"}
                    buttonLink={settings.user_dashboard_button_link || route('user.courses')}
                />
            </section>
            <div className="container py-5">
                <section className="pb-5">
                    <h2 className="text-center my-4">Currently Available Courses</h2>
                    <hr className="my-4" />
                    <div className="row g-4">
                        {courses.map((course: any) => (
                            <MainCourseCard
                                key={course.id}
                                title={course.title}
                                desc={course.description.substring(0, 100)}
                                image={course.image ? "/images/courses/" + course.image : "/images/image-placeholder.jpg"}
                                certificate={course.certificate ? "/images/certificates/" + course.certificate : "/images/certificate.jpg"}
                                duration={course.duration}
                                instructor={course.instructor}
                                // actualPrice={course.offer_price > 0 ? course.price : 0 }
                                // price={course.offer_price > 0 ? course.offer_price : course.price }
                                category={course.category}
                                language={course.language}
                                level={course.level}
                                status={course.status}
                                tags={course.tags}
                                enrollments={course.enrollments}
                                rating={course.rating}
                                course={course}
                                learnMoreLink={course.status === "published" ? route('user.course', { id: course.id }): '#'}
                                learnMoreText={course.status === "published" ? "Learn More" : 'Coming Soon'} // Use a ternary operator to conditionally set the text
                            />
                        ))}
                    </div>
                </section>
            </div>
        </UserLayout>
    );
}