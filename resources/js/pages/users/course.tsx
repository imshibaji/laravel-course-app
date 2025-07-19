import UserLayout from "@/layouts/UserLayout";
import Sidebar from "@/components/Sidebar";
import CourseLearningCard from "@/components/CourseLearningCard";
import { Link } from "@inertiajs/react";

const menus = [
    { label: "Overview", link: "#" },
    { label: "Carriculum", link: "#" },
    { label: "Instructor", link: "#" },
    { label: "Reviews", link: "#" },
    { label: "Assignments", link: "#" },
    { label: "Forum", link: "#" },
    { label: "Announcements", link: "#" },
    { label: "Syllabus", link: "#" },
    { label: "Resources", link: "#" },
];

export default function Course() {
    return (
        <UserLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-3 d-none d-md-block">
                        <div style={{ position: "sticky", top: "20px" }}>
                            <Sidebar title="Course Menu" menus={menus} extra={
                                <Link href="/user/live" className="list-group-item list-group-item-action active">
                                    Join to Live
                                </Link>
                            } />
                        </div>
                    </div>
                    <div className="col-md-9 py-3">
                        <CourseLearningCard title="Power of Code" youtubeLink="https://www.youtube.com/watch?v=GpJGmdQBMas">
                            <p>In this course, we will explore the power of coding and how it can transform your career.</p>
                            <p>Join us to learn about the latest trends in technology and how you can leverage them for your personal and professional growth.</p>
                            <p>By the end of this course, you will have a deeper understanding of the importance of coding and how it can help you succeed in your career.</p>
                            <p>Thank you for joining us!</p>
                        </CourseLearningCard>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}