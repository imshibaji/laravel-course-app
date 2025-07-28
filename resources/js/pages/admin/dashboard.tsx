import AdminLayout from "@/layouts/AdminLayout";
import MainCourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero"; // Adjust the path as necessary


export default function Dashboard({ courses }: any) {

    return (
        <AdminLayout>
            <div className="container py-5">
                <section className="pb-5">
                    <h2 className="text-center my-4">My Courses</h2>
                    <hr className="my-4" />
                    <div className="row g-4">
                        {courses.map((course: any) => (
                                <MainCourseCard 
                                key={course.id}
                                title={course.title}
                                desc={course.description.substring(0, 100)}
                                image={course.image ? "/images/courses/" + course.image : "/images/image-placeholder.jpg"}
                                certificate={course.certificate}
                                duration={course.duration}
                                instructor={course.instructor}
                                actualPrice={course.offer_price > 0 ? course.price : '' }
                                price={course.offer_price > 0 ? course.offer_price : course.price }
                                category={course.category}
                                language={course.language}
                                level={course.level}
                                status={course.status}
                                tags={course.tags}
                                enrollments={course.enrollments}
                                rating={course.rating}
                                course={course} 
                                enrollBtnText={course.status === "published" ? "Enroll Now" : "Coming Soon"}
                                // handleEnroll={course.status === "published" ? route('checkout', { course: course.id }) : null}
                                lastUpdated={course.updated_at}
                                learnMoreLink={route('admin.course', { id: course.id })}
                                />
                        ))}
                        {/* <MainCourseCard learnMore="/user/course?id=1&chapter=1" />
                        <MainCourseCard learnMore="/user/course?id=1&chapter=2" />
                        <MainCourseCard learnMore="/user/course?id=1&chapter=3" /> */}
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}