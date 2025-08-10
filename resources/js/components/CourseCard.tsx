import { Link } from "@inertiajs/react";


export const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   timeZoneName: 'short',
});

export default function CourseCard({ title, desc, duration, level, instructor, rating, actualPrice, price, image, enrollments, lastUpdated, enrollBtnText, handleEnroll, learnMoreLink, learnMoreText }: any) {
    // Default values for the course card
    return (
        <div className="col-md-4">
            <div className="card course-card">
                <img
                    src={image || "/images/image-placeholder.jpg"}
                    className="card-img-top"
                    alt={title || "Web Development Bootcamp"}
                    style={{ height: "220px", objectFit: "cover" }}
                    loading="lazy"
                />
                <div className="card-header">
                    <h4 className="card-title mb-0">{title || "Web Development Bootcamp"}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {desc.length > 90 ? desc.substring(0, 90) + "..." : desc || "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build responsive websites and web applications."}
                    </p>
                    <hr className="my-3" />
                    { duration || level ? (
                        <div className="d-flex justify-content-between align-items-center">
                        {duration && <span className="text-muted">Duration: {duration}</span>}
                        {level && <span className="text-muted">Level: {level}</span>}
                    </div>) : null}
                    { instructor || rating ? (
                        <div className="d-flex justify-content-between align-items-center mt-0">
                            {instructor && <div className="text-muted">
                                <span className="text-muted">Instructor: {instructor}</span>
                            </div>}
                            { rating && <div className="text-muted">
                                <span className="text-muted">Rating: {rating}</span>
                            </div>}
                        </div>) 
                    : null}
                    {/* Price and Enroll Now button */}
                    {
                        price && (
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div className="text-muted d-flex flex-row">
                                    <span className="text-muted me-1">Price:</span>
                                    <div className="d-flex flex-row gap-1">
                                        {actualPrice && actualPrice > 0 &&
                                            <span className="col text-danger text-decoration-line-through text-xs"> ₹{actualPrice}/-</span>
                                        }
                                        <span className="col text-success">
                                            {(price === 0 || price.toString().toLowerCase() === "free" || price === "" || price === null || price === undefined) ? "Free" : "₹" + price + "/-"}
                                        </span>
                                    </div>
                                </div>
                                {handleEnroll instanceof Function ? (
                                    <button onClick={handleEnroll} className="btn btn-outline-primary">
                                        {enrollBtnText || "Enroll Now"}
                                    </button>) :
                                    (
                                        <Link href={handleEnroll} className="btn btn-outline-primary">
                                            {enrollBtnText || "Enroll Now"}
                                        </Link>
                                    )
                                }
                            </div>
                        )
                    }
                    {/* Know More button */}
                    {
                        learnMoreLink && (
                            <div className="d-flex flex-column mt-3">
                                <Link href={learnMoreLink} className="btn btn-outline-secondary w-full">
                                    {learnMoreText || "Learn More"}
                                </Link>
                            </div>
                        )
                    }
                </div>
                <div className="card-footer text-muted">
                    <div className="d-flex justify-content-between">
                        <small>Enrollments: {enrollments || "100+"}</small>
                        <small>Last updated: {lastUpdated ? formatter.format(new Date(lastUpdated)) : "April 2025"}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}