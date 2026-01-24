import React from "react";

function Features() {
  return (
    <section className="features-section py-5" id="features">
      <div className="container">
        <h2 className="text-center mb-4">Why Choose SalesFlow?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <i className="bi bi-speedometer2 fs-1 mb-2"></i>
            <h5>Fast & Easy</h5>
            <p>Track your sales quickly without complicated steps.</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="bi bi-graph-up fs-1 mb-2"></i>
            <h5>Analytics</h5>
            <p>Understand your sales performance with clear charts.</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="bi bi-people fs-1 mb-2"></i>
            <h5>Manage Clients</h5>
            <p>Keep all your client info organized in one place.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
