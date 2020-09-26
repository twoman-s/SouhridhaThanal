import React from "react";
import img1 from "./../assets/images/carousel/img1.jpg";
import img2 from "./../assets/images/carousel/img2.jpg";
import img3 from "./../assets/images/carousel/img3.jpg";
import "./../assets/Carousel.css";

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide container"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={img1} alt="First slide" />
          <div className="carousel-caption">
            <h4>We are your</h4>
            <h2>One stop banking solution</h2>
            <button className="btn carousel-button">Why Us?</button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <div className="carousel-caption">
            <h4>Most Trustable Services</h4>
            <h2>Check out our Board Members</h2>
            <button className="btn carousel-button">Go</button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <div className="carousel-caption">
            <h4>The Best Schemes</h4>
            <h2>We provide the best schemes for your need</h2>
            <button className="btn carousel-button">Schemes</button>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
