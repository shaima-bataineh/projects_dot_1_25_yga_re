import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          Sales<span>Flow</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link active" href="#features">Features</a></li>
            <li className="nav-item"><a className="nav-link active" href="#how">How it Works</a></li>
            <li className="nav-item"><a className="nav-link active" href="#pricing">Pricing</a></li>
            <li className="nav-item ms-lg-4">
              <a href="login.html" className="login-link d-flex align-items-center">
                <i className="bi bi-person-circle me-2"></i>
                <span>Log In</span>
              </a>
            </li>
            <li className="nav-item ms-lg-3">
              <a className="btn btn-accent cta-btn" href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
