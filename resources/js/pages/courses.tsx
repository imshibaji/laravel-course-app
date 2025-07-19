import FrontLayout from "@/layouts/FrontLayout";
import CourseCard from "../components/CourseCard";
import Hero from "../components/Hero";

export default function Courses() {
  return (
    <FrontLayout>
      <section>
        <Hero 
          title="Explore Our Courses"
          subtitle="Find the right course to enhance your skills and knowledge."
        />
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">All Available Courses</h2>
          <hr className="my-4" />
          <div className="row g-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </section>
    </FrontLayout>
  );
}
