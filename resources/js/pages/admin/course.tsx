import Sidebar from "@/components/Sidebar";
import AdminLayout from "@/layouts/AdminLayout";
import { useEffect, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import AppMarkdown from "@/components/AppMarkdown";

// const menus = [
//     { label: "Overview", link: "#" },
//     { label: "Carriculum", link: "#" },
//     { label: "Instructor", link: "#" },
//     { label: "Reviews", link: "#" },
//     { label: "Assignments", link: "#" },
//     { label: "Forum", link: "#" },
//     { label: "Announcements", link: "#" },
//     { label: "Syllabus", link: "#" },
//     { label: "Resources", link: "#" },
// ];

export interface ChapterProps {
    title?: string;
    details?: string;
    embed_code?: string;
    video_url?: string;
    duration?: string;
    instructor?: string;
    order?: string;
    course_id?: number;
    status?: string;
    created_at?: string;
    updated_at?: string;
    id?: number;
}

export default function Course({ chapters }: { chapters: ChapterProps[] }) {
    const [chapter, setChapter] = useState<ChapterProps>({});
    const menus = chapters.map((chap: any) => {
        return {
            label: chap.title,
            link: () => setChapter(chap),
            icon: "bi bi-play-circle",
        }
    });
    useEffect(() => {
        if (!chapter.title) {
            setChapter(chapters[0]);
        }
    })
    const prevHandler = () => {
        chapters.forEach((chap: any, index: number) => {
            if (chap.id === chapter.id) {
                if (index > 0) {
                    setChapter(chapters[index - 1]);
                }
            }
        })
    }
    const nextHandler = () => {
        chapters.forEach((chap: any, index: number) => {
            if (chap.id === chapter.id) {
                if (index < chapters.length - 1) {
                    setChapter(chapters[index + 1]);
                }
            }
        });
    }
    const markAsCompletedHandler = () => {
        console.log("Mark as completed clicked");
    }
    return (
        <AdminLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-3 order-2 order-md-1">
                        <Sidebar title="Course Menu" menus={menus} />
                    </div>
                    <div className="col-md-9 py-3 order-1 order-md-2">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">{chapter.title || "Course Title"}</h5>
                            </div>
                            <div className="card-body">
                                <div className="ratio ratio-16x9">
                                    <VideoPlayer src={chapter.video_url || ""} />
                                </div>
                                <div className="mt-3">
                                    <AppMarkdown content={chapter.details} />
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between p-3">
                                <button onClick={prevHandler} className="btn btn-outline-secondary">
                                    <i className="bi bi-arrow-left-short"></i> Previous
                                </button>
                                <button className="btn btn-outline-primary">
                                    <i className="bi bi-check-circle"></i> Mark as Completed
                                </button>
                                <button onClick={nextHandler} className="btn btn-outline-secondary">
                                    Next <i className="bi bi-arrow-right-short"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}