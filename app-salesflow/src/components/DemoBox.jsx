import React, { useState } from "react";

function DemoBox() {
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("Please enter your Business Name to continue.");

  const handleChange = (e) => {
    const value = e.target.value;
    setBusinessName(value);
    if (!value) {
      setMessage("Please enter your Business Name to continue.");
    }
  };

  const handleClick = () => {
    setMessage(`Welcome, ${businessName}! let's get started with your sales flow demo.`);
  };

  return (
    <div className="demo-box mt-5">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter your Business Name"
        value={businessName}
        onChange={handleChange}
      />
      <button
        className="btn btn-dark"
        disabled={!businessName}
        onClick={handleClick}
      >
        Try Live Demo
      </button>
      <p className={businessName ? "active-Message" : ""}>{message}</p>
    </div>
  );
}

export default DemoBox;
