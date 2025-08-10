import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import UserLayout from "@/layouts/UserLayout";

export default function Courses({ courses }: any) {
  return (
    <UserLayout>
      {/* <section>
        <Hero
          title="Explore Our Courses"
          subtitle="Find the right course to enhance your skills and knowledge."
        />
      </section> */}

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">My All Courses</h2>
          <hr className="my-4" />
          <div className="row g-4">
            {
              courses.map((course: any) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  desc={course.description.substring(0, 100)}
                  image={course.image ? "/images/courses/" + course.image : "/images/image-placeholder.jpg"}
                  certificate={course.certificate ? "/images/certificates/" + course.certificate : "/images/certificate.jpg"}
                  // duration={course.duration}
                  // instructor={course.instructor}
                  // actualPrice={course.offer_price > 0 ? course.price : 0}
                  // price={course.offer_price > 0 ? course.offer_price : course.price}
                  // category={course.category}
                  // language={course.language}
                  // level={course.level}
                  // status={course.status}
                  // tags={course.tags}
                  enrollments={course.enrollments}
                  // rating={course.rating}
                  // course={course}
                  // handleEnroll={route('checkout', { course: course.id })}
                  learnMoreLink={ course.status === "published" ? route('user.course', { id: course.id }): '#'}
                  learnMoreText={ course.status === "published" ? "Learn More" : 'Coming Soon'}
                />))
            }
          </div>
        </div>
      </section>
    </UserLayout>
  );
}
