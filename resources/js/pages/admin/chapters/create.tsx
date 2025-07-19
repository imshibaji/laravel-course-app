import AdminLayout from "@/layouts/AdminLayout";
import Card from "../components/Card";
import { Link, useForm } from "@inertiajs/react";
import VideoPlayer from "@/components/VideoPlayer";

export default function ChapterCreate() {
    const { data, setData, errors, processing, submit } = useForm({
        video_type: 'youtube',
        video: '',
        title: '',
        details: '',
        duration: '',
        instructor: '',
        status: 'active',
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        submit('post', route('admin.chapters.store'));
    }

    return (
        <AdminLayout>
            <div className="container py-3">
                <Card title="Chapter Creation" actions={
                    <Link href={route('admin.courses.show', 1)} className="btn btn-primary">Back to List</Link>
                }>
                    {
                        errors && Object.keys(errors).length > 0 && (
                            <div className="alert alert-danger">
                                <ul className="mb-0">
                                    {Object.entries(errors).map(([key, value]) => (
                                        <li key={key}>{value}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                    <form onSubmit={handleSubmit} className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div style={{ position: "sticky", top: "20px" }}>
                                    <VideoPlayer src="https://www.youtube.com/watch?v=EwdKdeuMxjw" />
                                    <div className="row">
                                        <div className="col-4 mt-3">
                                            <label htmlFor="video_type" className="form-label">Video Type</label>
                                            <select value={data.video_type} onChange={(e) => setData('video_type', e.target.value)} className="form-select" id="video_type" name="video_type">
                                                <option value="youtube">Youtube</option>
                                                <option value="vimeo">Vimeo</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-8 mt-3">
                                            <label htmlFor="video" className="form-label">Video</label>
                                            <input value={data.video} onChange={(e) => setData('video', e.target.value)} type="text" className="form-control" id="video" name="video" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input value={data.title} onChange={(e) => setData('title', e.target.value)} type="text" className="form-control" id="title" name="title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="details" className="form-label">Details</label>
                                <textarea value={data.details} onChange={(e) => setData('details', e.target.value)} className="form-control" id="details" name="details" rows={15}></textarea>
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
                                <div className="col mb-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select value={data.status} onChange={(e) => setData('status', e.target.value)} className="form-select" id="status" name="status">
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid mt-3">
                            {processing ? (
                                <button type="submit" className="btn btn-primary" disabled>
                                    Saving...
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            )}
                        </div>
                    </form>
                </Card>
            </div>
        </AdminLayout>
    );
}