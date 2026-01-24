import React, { useState, useEffect } from "react";
import "../css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // إضافة كلاس login-page على body
  useEffect(() => {
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // ===== Validation =====
    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setMessage("Login successful!");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="login-page">
      {/* LOGIN CARD */}
      <div className="login-card">
        {/* Brand */}
        <div className="brand-top">
          <h1>Sales<span>Flow</span></h1>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* LEFT */}
          <div className="col-md-6">
            <h5 className="mb-5">
              Manage <span className="sale">Sales </span> & Clients
            </h5>

            <form onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="example@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">{errors.email}</div>
              </div>

              {/* Password */}
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="invalid-feedback">{errors.password}</div>
              </div>

              {/* Remember & Forgot */}
              <div className="d-flex justify-content-between mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label className="form-check-label">Remember me</label>
                </div>
                <a href="#" className="help-link">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-success px-4 signin-btn">
                Sign In
              </button>
            </form>

            {/* General message */}
            {message && <div className="form-message">{message}</div>}
          </div>

          {/* DIVIDER */}
          <div className="col-md-1 d-none d-md-flex justify-content-center divider-col">
            <div className="divider"></div>
          </div>

          {/* RIGHT */}
          <div className="col-md-5 ps-md-4 r-signin">
            <p className="mb-3 or-text">Or, Sign in with</p>
            <button className="btn btn-outline-secondary w-100 mb-1">
              <i className="bi bi-microsoft me-1"></i> Microsoft
            </button>
            <button className="btn btn-outline-secondary w-100">
              <i className="bi bi-google me-1"></i> Google
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="login-footer">
        <p>© 2026 SalesFlow · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </footer>
    </div>
  );
}

export default Login;
