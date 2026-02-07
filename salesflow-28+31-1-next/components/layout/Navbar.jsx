"use client";

import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTransparentPage =
    pathname === "/about" || pathname === "/contact";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // scroll فقط للـ Home
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav
      className={`
        navbar navbar-expand-lg
        custom-navbar
        ${isHome || isTransparentPage ? "transparent" : "solid"}
        ${isTransparentPage ? "static-transparent" : ""}
        ${scrolled ? "scrolled" : ""}
      `}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand logo" href="/">
          Sales<span>Flow</span>
        </Link>

        {/* Mobile Toggle */}
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
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="nav-item ms-lg-4">
              <Link
                href="/login"
                className={`nav-link ${
                  pathname === "/login" ? "active" : ""
                }`}
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
