import React from "react";
import { Link } from "react-router-dom"; // مهم جدا للتنقل بين الصفحات

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand logo" to="/">
          Sales<span>Flow</span>
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#how">
                How it Works
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>

            <li className="nav-item ms-lg-4">
              <Link to="/login" className="login-link d-flex align-items-center">
                <i className="bi bi-person-circle me-2"></i>
                <span>Log In</span>
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <a className="btn btn-accent cta-btn" href="#">
                Get Started
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
