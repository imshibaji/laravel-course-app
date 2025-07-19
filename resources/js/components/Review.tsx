export default function Review({message, author}: {message: string, author: string}) {
    return (
        <div className="col-md-3">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p>{message || "I landed a job after completing the web dev course. Highly recommended!"}</p>
                    <h6>- {author || "Rahul D., Developer"}</h6>
                </div>
            </div>
        </div>
    );
}