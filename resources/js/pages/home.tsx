import CourseCard from "../components/CourseCard";
import Review from "../components/Review";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <section>
        <Hero image="/images/banner.jpg" link="/courses" buttonText="Explore Courses" />
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Popular Courses</h2>
          <div className="row g-4">
            <CourseCard actualPrice="1500" price="Free" />
            <CourseCard actualPrice="1500" price="Free" />
            <CourseCard actualPrice="1500" price="Free" />
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
    </div>
  );
}
