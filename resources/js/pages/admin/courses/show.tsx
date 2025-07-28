import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import { Link, useForm } from "@inertiajs/react";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";
import AppMarkdown from "@/components/AppMarkdown";
import DeleteBtn from "@/components/DeleteBtn";
import { reorderWithSortOrder } from "@/lib/ReOrder";
import { ReactSortable } from "react-sortablejs";

const menus = [
    { label: "Play", link: "#" },
    { label: "Details", link: "#" },
    { label: "Instructor", link: "#" },
];

export default function CourseShow({ course, chapters }: any) {
    const [chapter, setChapter] = useState(null);
    const { data, setData, put } = useForm(chapters);
    
    const onSubmitted = (item: any) => {
        let payload = reorderWithSortOrder(data, item.oldIndex, item.newIndex);
        put(route('admin.chapters.sort', {items: payload, courseId: course.id}), {
            preserveScroll: true,
            onSuccess: () => {
                console.log('Sort order saved!');
            }
        });
    };

    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="Course Details" actions={
                    <div className="btn-group" role="group">
                        <Link href={route('admin.courses.index')} className="btn btn-warning">Back to List</Link>
                        <Link href={route('admin.chapters.create', { courseId: course.id })} className="btn btn-primary">Add New Chapter</Link>
                    </div>

                }>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">{course.title}</h3>
                                </div>
                                <div className="card-body">
                                    {chapter && <VideoPlayer src={chapter ? chapter?.video_url : "https://www.youtube.com/watch?v=lPhDaw3Aiig"} />}
                                    {!chapter && <div className="ratio ratio-16x9"><img className="img-fluid" src={course.image ? "/images/courses/" + course.image : "/images/image-placeholder.jpg"} alt={course.title} /></div>}
                                </div>
                                <div className="card-body">
                                    <div className="accordion" id="courseAccordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Course Description
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#courseAccordion">
                                                <div className="accordion-body">
                                                    <AppMarkdown content={course.description} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Course Image and Certificate
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#courseAccordion">
                                                <div className="accordion-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <img src={course.image ? "/images/courses/" + course.image : "/images/image-placeholder.jpg"} alt="Course Image" className="img-fluid" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <img src={course.certificate ? "/images/certificates/" + course.certificate : "/images/certificate.jpg"} alt="Course Image" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3 className="text-muted">Chapters List</h3>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-flex justify-content-end items-center">
                                                <Link href={route('admin.courses.edit', course.id)} className="btn btn-warning">Edit Course</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Status</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <ReactSortable onEnd={onSubmitted} tag={'tbody'} list={data} setList={setData} >
                                                {chapters.map((chapter: any) => (
                                                    <tr key={chapter.id}>
                                                        <td>{chapter.title}</td>
                                                        <td>{chapter.status}</td>
                                                        <td className="text-center">
                                                            <div className="btn-group" role="group">
                                                                <button onClick={() => setChapter(chapter)}  className="btn btn-sm btn-info">Play</button>
                                                                <Link href={route('admin.chapters.edit', chapter.id)} className="btn btn-sm btn-secondary">Edit</Link>
                                                                <DeleteBtn id={chapter.id} href={route('admin.chapters.destroy', chapter.id)} title={chapter.title} className="btn btn-sm btn-danger">Delete</DeleteBtn>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </ReactSortable>
                                            {
                                                chapters.length === 0 && (<tr><td colSpan={3} className="text-center py-5">No chapters found.</td></tr>)
                                            }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

            </div>
        </AdminLayout>
    );
}