import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import { Link, router, useForm } from "@inertiajs/react";

export default function CourseEdit({ course }: any) {
    const { data, setData, errors, processing } = useForm(course);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.post(route('admin.courses.update', course.id), {
            _method: 'put',
            ...data,
            image: data.image ? data.image : null,
            certificate: data.certificate ? data.certificate : null,
            onSuccess: () => {
                alert('Course updated successfully');
            },
            onError: (errors: any) => {
                console.log(errors);
            },
        });
    }

    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="Course Update" actions={
                    <Link href={route('admin.courses.update', course.id)} className="btn btn-primary">Back to List</Link>
                }>
                    {errors && Object.keys(errors).length > 0 && (
                        <div className="alert alert-danger">
                            <ul className="mb-0">{Object.entries(errors).map(([key, value]) => <li key={key}>{value}</li>)}</ul>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-3 order-2 order-md-1">
                                <div className="row">
                                    <div className="col-6 col-md-12 mt-3">
                                        <img src={course.image ? "/images/courses/" + course.image : data.image ? URL.createObjectURL(data.image) : 'https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp'} alt="Course Image" className="img-fluid rounded" />
                                        <div className="mt-3">
                                            <label htmlFor="title" className="form-label">Image</label>
                                            <input onChange={(e) => setData('image', e.target.files?.[0])} type="file" className="form-control" id="image" name="image" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-12 mt-3">
                                        <img src={course.certificate ? "/images/certificates/" + course.certificate : data.certificate ? URL.createObjectURL(data.certificate) : 'https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp'} alt="Course Certificate" className="img-fluid rounded" />
                                        <div className="mt-3">
                                            <label htmlFor="certificate" className="form-label">Certificate</label>
                                            <input onChange={(e) => setData('certificate', e.target.files?.[0])} type="file" className="form-control" id="certificate" name="certificate" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₹</span>
                                            <input value={data.price} onChange={(e) => setData('price', e.target.value)} type="number" className="form-control" id="price" name="price" />
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <label htmlFor="offer_price" className="form-label">Offer Price</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₹</span>
                                            <input value={data.offer_price} onChange={(e) => setData('offer_price', e.target.value)} type="number" className="form-control" id="offer_price" name="offer_price" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <label htmlFor="duration" className="form-label">Duration</label>
                                        <input value={data.duration} onChange={(e) => setData('duration', e.target.value)} type="text" className="form-control" id="duration" name="duration" />
                                    </div>
                                    <div className="col mb-3">
                                        <label htmlFor="instructor" className="form-label">Instructor</label>
                                        <input value={data.instructor} onChange={(e) => setData('instructor', e.target.value)} type="text" className="form-control" id="instructor" name="instructor" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <label htmlFor="level" className="form-label">Level</label>
                                        <select value={data.level} onChange={(e) => setData('level', e.target.value)} className="form-select" id="level" name="level">
                                            <option value="">Select Level</option>
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Advanced</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="col mb-3">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select value={data.status} onChange={(e) => setData('status', e.target.value)} className="form-select" id="status" name="status">
                                            <option value="">Select Status</option>
                                            <option value="published">Published</option>
                                            <option value="unpublished">Unpublished</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 order-1 order-md-2">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input value={data.title} onChange={(e) => setData('title', e.target.value)} type="text" className="form-control" id="title" name="title" />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="slug" className="input-group-text">Slug</label>
                                    <input value={data.slug} onChange={(e) => setData('slug', e.target.value)} type="text" className="form-control" id="slug" name="slug" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Details</label>
                                    <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} className="form-control" id="description" name="description" rows={23}></textarea>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <div className="input-group mb-3">
                                            <label htmlFor="category" className="input-group-text">Category</label>
                                            <select value={data.category} onChange={(e) => setData('category', e.target.value)} className="form-select" id="category" name="category">
                                                <option value="">Select Category</option>
                                                <option>Website Design</option>
                                                <option>Website Development</option>
                                                <option>Software Development</option>
                                                <option>Mobile App Development</option>
                                                <option>E-commerce Solutions</option>
                                                <option>Artificial Intelligence</option>
                                                <option>UI/UX Design</option>
                                                <option>Graphic Design</option>
                                                <option>Photography</option>
                                                <option>Video Editing</option>
                                                <option>Music Production</option>
                                                <option>Digital Marketing</option>
                                                <option>Content Writing</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="input-group mb-3">
                                            <label htmlFor="language" className="input-group-text">Language</label>
                                            <select value={data.language} onChange={(e) => setData('language', e.target.value)} className="form-select" id="language" name="language">
                                                <option value="">Select Language</option>
                                                <option>English</option>
                                                <option>Hindi</option>
                                                <option>Bangla</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="tags" className="input-group-text">Tags</label>
                                    <input value={data.tags} onChange={(e) => setData('tags', e.target.value)} type="text" className="form-control" id="tags" name="tags" />
                                </div>
                            </div>
                        </div>
                        <div className="d-grid">
                            {processing ? (
                                <button type="button" className="btn btn-primary" disabled>
                                    Saving...
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-primary">Save</button>
                            )}
                        </div>
                    </form>
                </Card>
            </div>
        </AdminLayout>
    );
}