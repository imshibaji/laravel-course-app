import { Link, usePage } from "@inertiajs/react";

export default function Footer() {
  const { settings } = usePage().props as any;
  return (
    <footer className="text-center bg-brand text-white py-4">
      <div className="container">
        <nav className="nav justify-content-center">
          <Link className="nav-link text-white" href="/about-us">About Us</Link>
          <Link className="nav-link text-white" href="/privacy-policy">Privacy Policy</Link>
          <Link className="nav-link text-white" href="/terms-and-conditions">Terms and Conditions</Link>
          <Link className="nav-link text-white" href="/contact-us">Contact Us</Link>
        </nav>
      </div>
      <hr />
      <div className="container">
        <p className="mb-0">{settings.website_copyright || "© 2025 Your Website Name"}</p>
      </div>
    </footer>
  );
}