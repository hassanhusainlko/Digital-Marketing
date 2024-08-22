import React from "react";
export default function PricingSection() {
  return (
    <section id="pricing" className="pricing-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Basic</h5>
                <h6 className="card-price">$19/month</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>5 Projects</li>
                  <li>Basic Analytics</li>
                  <li>Email Support</li>
                </ul>
                <a href="#" className="btn btn-primary mt-3">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Standard</h5>
                <h6 className="card-price">$49/month</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>20 Projects</li>
                  <li>Advanced Analytics</li>
                  <li>Priority Support</li>
                </ul>
                <a href="#" className="btn btn-primary mt-3">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Premium</h5>
                <h6 className="card-price">$99/month</h6>
                <hr />
                <ul className="list-unstyled">
                  <li>Unlimited Projects</li>
                  <li>All Features</li>
                  <li>24/7 Support</li>
                </ul>
                <a href="#" className="btn btn-primary mt-3">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
