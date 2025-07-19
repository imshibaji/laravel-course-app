import Sidebar from "@/components/Sidebar";
import CourseCard from "./components/CourseCard";
import AdminLayout from "@/layouts/AdminLayout";

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
        <AdminLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-3">
                        <Sidebar title="Course Menu" menus={menus} />
                    </div>
                    <div className="col-md-9 py-3">
                        <CourseCard />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}