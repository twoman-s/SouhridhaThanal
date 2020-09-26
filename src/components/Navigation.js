import React from "react";
import "./../assets/Navbar.css";
import logo from "./../assets/images/logo/logo.png";

function Navigation() {
  function handleNavClick() {
    document.querySelector(".navbar-toggler").classList.add("collapsed");
    document.querySelector("#navbarNavAltMarkup").classList.remove("show");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img className="logo" src={logo} alt="Souhrudha"></img>
      <a className="logo-name" href="#home">
        Souhrudha Thanal
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a
            onClick={handleNavClick}
            className="nav-item nav-link active"
            href="#home"
          >
            Home
          </a>
          <a
            onClick={handleNavClick}
            className="nav-item nav-link"
            href="#services"
          >
            Services
          </a>
          <a
            onClick={handleNavClick}
            className="nav-item nav-link"
            href="#aboutus"
          >
            About Us
          </a>
          <a
            onClick={handleNavClick}
            className="nav-item nav-link"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
