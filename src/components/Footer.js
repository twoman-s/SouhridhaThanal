import React from "react";
import "./../assets/Footer.css";
// import logo from "./../assets/images/logo/logo.png";

function Navigation() {
  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>Quick Links</h2>
          <div className="content">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="gallery">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fa fa-map-marker"></span>
              <span className="text">Joysland Arcade</span>
            </div>
            <div className="phone">
              <span className="fa fa-phone-alt"></span>
              <span className="text">+919874563210</span>
            </div>
            <div className="mail">
              <span className="fa fa-envelope"></span>
              <span className="text">souhrudhanidhi@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Location</h2>
          <div className="content"></div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">
            Created By <a href="alex">Alex Antony </a>|{" "}
          </span>
          <span className="fa fa-copyright"></span>
          <span> 2020 All rights reserved</span>
        </center>
      </div>
    </footer>
  );
}

export default Navigation;
