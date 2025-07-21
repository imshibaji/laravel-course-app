import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import FrontLayout from "@/layouts/FrontLayout";

export default function Home({ courses }: any) {
    return (
        <FrontLayout>
            <section>
                <Hero image="/images/banner.jpg" link="/courses" buttonText="Explore Courses" />
            </section>

            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Popular Courses</h2>
                    <div className="row g-4">
                        {courses.map((course: any) => (
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                desc={course.description.substring(0, 100)}
                                image={course.image ? "/images/courses/" + course.image : "/images/image-placeholder.jpg"}
                                certificate={course.certificate ? "/images/certificates/" + course.certificate : "/images/certificate.jpg"}
                                duration={course.duration}
                                instructor={course.instructor}
                                actualPrice={course.offer_price > 0 ? course.price : 0}
                                price={course.offer_price > 0 ? course.offer_price : course.price}
                                category={course.category}
                                language={course.language}
                                level={course.level}
                                status={course.status}
                                tags={course.tags}
                                enrollments={course.enrollments}
                                rating={course.rating}
                                course={course}
                                enrollBtnText={course.status === "published" ? "Enroll Now" : "Coming Soon"}
                                handleEnroll={course.status === "published" ? route('checkout', { course: course.id }) : null}
                                lastUpdated={course.updated_at}
                                // learnMore={route('user.course', { id: course.id })}
                            />
                        ))}
                        {/* <CourseCard actualPrice="1500" price="Free" />
                        <CourseCard actualPrice="1500" price="Free" />
                        <CourseCard actualPrice="1500" price="Free" /> */}
                    </div>
                </div>
            </section>

            <section className="bg-tertiary py-5">
                <div className="container">
                    <h2 className="text-center mb-4">What Students Say</h2>
                    <div className="row g-4">
                        <Review message="I landed a job after completing the web dev course. Highly recommended!" author="Rahul D., Developer" />
                        <Review message="I had a great experience with this course. The instructors were knowledgeable and helpful." author="John Doe, Designer" />
                        <Review message="The course was very engaging and interactive. I learned a lot in a short period of time." author="Jane Smith, Developer" />
                        <Review message="The course was very engaging and interactive. I learned a lot in a short period of time." author="Jane Smith, Developer" />
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}