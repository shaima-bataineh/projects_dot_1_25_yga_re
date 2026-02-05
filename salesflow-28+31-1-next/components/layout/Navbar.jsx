"use client";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg custom-navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand logo" href="/">
          Sales<span>Flow</span>
        </Link>

        {/* Toggle */}
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

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
           
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              onClick={() => setActive("about")} href="/about">

                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/services" ? "active" : ""}`}
              onClick={() => setActive("services")} href="/services">

            Services
              </Link>
            </li>

            <li className="nav-item">

              <Link
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
              onClick={() => setActive("contact")}
               href="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-4">
              <Link href="/login" 
              className={`nav-link ${pathname === "/login" ? "active" : ""}`}
              >
                Log In
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <a className="cta-btn" href="#">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
