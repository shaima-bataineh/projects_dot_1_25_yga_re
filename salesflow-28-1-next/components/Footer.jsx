"use client";
import "./Footer.css";
import Backtotop from "./Backtotop";
export default function Footer() {
  
  return (
    <footer className="footer">
      
      <div className="footer-container">
        {/* قسم نبذة */}
        <div className="footer-about">
          <h3>Sales<strong>Flow</strong></h3>
          <p>Smart Sales Management Platform to grow your business.</p>
        </div>

        {/* قسم الروابط */}
        <div className="footer-links">
          <Backtotop/>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* قسم السوشيال ميديا */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="footer-bottom">
        <p>&copy; 2026 SalesFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}

