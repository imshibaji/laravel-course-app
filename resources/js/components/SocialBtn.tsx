export default function SocialBtn() {
    const handleGoogle = () => {
        window.location.href = '/auth/google/redirect';
    };
    const handleFacebook = () => {
        window.location.href = '/auth/facebook/redirect';
    };
    return (
        <div className="text-center mb-4">
            <button onClick={handleGoogle} className="btn btn-danger mb-3">
                <i className="bi bi-google me-1"></i>
                Sign up with Google
            </button>
            <button onClick={handleFacebook} className="btn btn-primary mb-3 ms-3">
                <i className="bi bi-facebook me-1"></i>
                Sign up with Facebook
            </button>
        </div>
    );
}