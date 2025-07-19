import VideoPlayer from "@/components/VideoPlayer";

export interface CourseCardProps {
    title?: string;
    youtubeLink?: string;
    children?: React.ReactNode;
    previousLesson?: () => void;
    nextLesson?: () => void;
    markAsCompleted?: () => void;
    footer?: React.ReactNode; // Optional footer content
}

export default function CourseLearningCard({title, youtubeLink, children, previousLesson, nextLesson, markAsCompleted, footer }: CourseCardProps) {

    const prevHandler = () => {
        previousLesson ? previousLesson() : console.log("Previous lesson clicked");
    }
    const nextHandler = () => {
        nextLesson ? nextLesson() : console.log("Next lesson clicked");
    }
    const markAsCompletedHandler = () => {
        markAsCompleted ? markAsCompleted() : console.log("Mark as completed clicked");
    }
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{title || "Course Title"}</h5>
            </div>
            <div className="card-body">
                <div className="ratio ratio-16x9">
                    <VideoPlayer src={youtubeLink || ""} />
                </div>
                <div className="mt-3">
                    {children}
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between p-3">
                {footer && <div className="flex-grow-1">{footer}</div>}
                {!footer && (
                    <>
                        <button className="btn btn-outline-secondary" onClick={prevHandler}>
                            <i className="bi bi-arrow-left-short"></i> Previous
                        </button>
                        <button className="btn btn-outline-primary" onClick={markAsCompletedHandler}>
                            <i className="bi bi-check-circle"></i> Mark as Completed
                        </button>
                        <button className="btn btn-outline-secondary" onClick={nextHandler}>
                            Next <i className="bi bi-arrow-right-short"></i>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}