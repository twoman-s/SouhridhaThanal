import React from "react";
import "./../assets/Services.css";

function Services() {
  //   function handleNavClick() {

  //   }
  return (
    <div id="services" className="container mt-3">
      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">Our Services</h1>
          <div className="border-title"></div>
          <div className="services-container">
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-coins"></i>
              </div>
              <div className="service-title">Gold Loan</div>
              <div className="service-desc">
                The best gold loan schemes with lowest interest.
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-building"></i>
              </div>
              <div className="service-title">Property Loan</div>
              <div className="service-desc">
                Get more with our low interest property loan schemes.
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-rupee-sign"></i>
              </div>
              <div className="service-title">Fixed Deposits</div>
              <div className="service-desc">
                Get more with our various Fixed Deposit schemes.
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-piggy-bank"></i>
              </div>
              <div className="service-title">Savings Deposits</div>
              <div className="service-desc">
                Higher interest rate savings scheme
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-coins"></i>
                <i className="fa fa-coins"></i>
              </div>
              <div className="service-title">Recurring Deposits</div>
              <div className="service-desc">
                LOrem ipsum poli sanam gold loan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
