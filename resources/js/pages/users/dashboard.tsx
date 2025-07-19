import MainCourseCard from "../../components/CourseCard";
import Hero from "../../components/Hero"; // Adjust the path as necessary
import UserLayout from "@/layouts/UserLayout";


export default function Dashboard() {

    return (
        <UserLayout>
            <div className="container py-5">
                <section className="pb-5">
                    <h2 className="text-center my-4">Latest Learning Courses</h2>
                    <hr className="my-4" />
                    <div className="row g-4">
                        <MainCourseCard learnMore="/user/course?id=1&chapter=1" />
                        <MainCourseCard learnMore="/user/course?id=1&chapter=2" />
                        <MainCourseCard learnMore="/user/course?id=1&chapter=3" />
                    </div>
                </section>
            </div>
        </UserLayout>
    );
}