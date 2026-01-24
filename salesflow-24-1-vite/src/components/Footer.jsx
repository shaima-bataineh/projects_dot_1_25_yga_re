import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-3 footer-brand">
            <h5>SalesFlow</h5>
            <p>
              Simple, clean and modern platform to help you
              grow and manage your work smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3">
            <h6>Resources</h6>
            <ul className="footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3">
            <h6>Follow Us</h6>
            <div className="footer-social">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>

        <hr />

        <div className="footer-bottom text-center">
          <p>© 2026 SalesFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
