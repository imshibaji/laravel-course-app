export default function CourseCard() {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Course Title</h5>
            </div>
            <div className="card-body">
                <h1>Course Details</h1>
                <p>Here you can view the details of a specific course.</p>
                {/* Additional course content can be added here */}
            </div>
            <div className="card-footer d-flex justify-content-between p-3">
                <div>
                    <p className="mb-0">Course ID: 12345</p>
                    <p className="mb-0">Instructor: John Doe</p>
                    <p className="mb-0">Duration: 10 weeks</p>
                </div>
                <div>
                    <p className="mb-0">Level: Intermediate</p>
                    <p className="mb-0">Rating: 4.5/5</p>
                    <p className="mb-0">Last Updated: January 2025</p>
                </div>
            </div>
        </div>
    );
}