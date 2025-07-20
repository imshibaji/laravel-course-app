import { Link } from "@inertiajs/react";


export default function CourseCard({ title, desc, duration, level, instructor, rating, actualPrice, price, image, enrollments, last_updated, handleEnroll, learnMore }: any) {
    // Default values for the course card
    return (
        <div className="col-md-4">
            <div className="card course-card">
                <img
                    src={image || "https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp"}
                    className="card-img-top"
                    alt={title || "Web Development Bootcamp"}
                    style={{ height: "200px", objectFit: "cover" }}
                    loading="lazy"
                />
                <div className="card-header">
                    <h4 className="card-title mb-0">{title || "Web Development Bootcamp"}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {desc || "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build responsive websites and web applications."}
                    </p>
                    <hr className="my-3" />
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="text-muted">Duration: {duration || "6 Months"}</span>
                        <span className="text-muted">Level: {level || "Beginner"}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-0">
                        <div className="text-muted">
                            <span className="text-muted">Instructor: {instructor || "Shibaji Debnath"}</span>
                        </div>
                        <div className="text-muted">
                            <span className="text-muted">Rating: {rating || "4.5/5"}</span>
                        </div>
                    </div>
                    {/* Price and Enroll Now button */}
                    {
                        price && (
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div className="text-muted d-flex flex-row">
                                    <span className="text-muted me-1">Price:</span>
                                    <div className="d-flex flex-row gap-1">
                                        {actualPrice &&
                                            <span className="col text-danger text-decoration-line-through text-xs"> ₹{actualPrice}/-</span>
                                        }
                                        <span className="col text-success">
                                            {(price === 0 || price.toString().toLowerCase() === "free" || price === "" || price === null || price === undefined) ? "Free" : "₹" + price + "/-"}
                                        </span>
                                    </div>
                                </div>
                                {handleEnroll instanceof Function ? (
                                    <button onClick={handleEnroll} className="btn btn-outline-primary">
                                        Enroll Now
                                    </button>) :
                                    (
                                        <Link href={handleEnroll} className="btn btn-outline-primary">
                                            Enroll Now
                                        </Link>
                                    )
                                }
                            </div>
                        )
                    }
                    {/* Know More button */}
                    {
                        learnMore && (
                            <div className="d-flex flex-column mt-3">
                                <Link href={learnMore} className="btn btn-outline-secondary w-full">
                                    Learn More
                                </Link>
                            </div>
                        )
                    }
                </div>
                <div className="card-footer text-muted">
                    <div className="d-flex justify-content-between">
                        <small>Enrollments: {enrollments || "100+"}</small>
                        <small>Last updated: {last_updated || "April 2025"}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}