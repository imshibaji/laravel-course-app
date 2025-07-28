import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import { Link, useForm } from "@inertiajs/react";
import DeleteBtn from "@/components/DeleteBtn";
import { reorderWithSortOrder } from "@/lib/ReOrder";
import { ReactSortable } from "react-sortablejs";

export default function CourseList({ courses }: any) {
    const { data, setData, put } = useForm(courses);

    const onSubmitted = (item: any) => {
        const payload = reorderWithSortOrder(data, item.oldIndex, item.newIndex);
        put(route('admin.courses.sort', {items: payload}), {
            preserveScroll: true,
            onSuccess: () => {
                console.log('Sort order saved!');
            }
        });
    };
    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="Courses" actions={
                    <>
                        <Link href={route('admin.courses.create')} className="btn btn-primary me-2">Add New Course</Link>
                        {/* <Link href={route('admin.courses.trashed')} className="btn btn-warning">Trashed Courses</Link> */}
                    </>
                }>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th className="text-center">Image</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th className="text-center">Language</th>
                                    <th className="text-center">Level</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <ReactSortable onEnd={onSubmitted} tag="tbody" list={data} setList={setData}>
                                {
                                    data?.map((course: any) => (
                                        <tr data-id={course.id} key={course.id}>
                                            <td className="text-center">
                                                <img src={course.image? "/images/courses/" + course.image : '/images/image-placeholder.jpg'} alt="Course Image" className="img-fluid rounded" style={{ width: '50px' }} />
                                            </td>
                                            <td>{course.title}</td>
                                            <td>{course.description?.length > 50 ? course.description?.substring(0, 50) + '...' : course.description}</td>
                                            <td className="text-center">{course.language}</td>
                                            <td className="text-center">{course.level}</td>
                                            <td className="text-center">{course.status}</td>
                                            <td className="text-center">
                                                <div className="btn-group" role="group">
                                                    <Link href={route('admin.courses.show', course.id)} className="btn btn-sm btn-info">View</Link>
                                                    <Link href={route('admin.courses.edit', course.id)} className="btn btn-sm btn-secondary">Edit</Link>
                                                    <DeleteBtn id={course.id} title={course.title} href={route('admin.courses.destroy', course.id)} className="btn btn-sm btn-danger">Delete</DeleteBtn>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </ReactSortable>
                                {data.length === 0 && (<tr><td colSpan={7} className="text-center py-5">No courses found.</td></tr>)}
                        </table>
                    </div>
                </Card>

            </div>
        </AdminLayout>
    );
}