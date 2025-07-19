import { Link } from "@inertiajs/react";


export default function Hero({ title, subtitle, image, link, buttonText }: any) {
    const heroImage = image || 'https://shibajidebnath.com/wp-content/uploads/2024/04/Web-design.webp';
    
    return (
        <div className="hero" style={{ position: "relative", overflow: "hidden", height: "400px" }}>
            <img
                src={heroImage}
                alt={title || "Learn Anytime, Anywhere"}
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}
            />
            <div className="overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="container" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "50px 10px", borderRadius: "10px" }}>
                    <div>
                        <h1>{title || "Learn Anytime, Anywhere"}</h1>
                        <p className="lead">
                            {subtitle || "Unlock the Power of Learning with Shibaji Sir's Courses"}
                        </p>
                        {link && buttonText &&
                            <Link href={link} className="btn btn-success btn-lg">
                                {buttonText}
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}