import React from "react";
import banner from "./../assets/images/parallax/banner.png";
import "./../assets/Parallax.css";
import logo from "./../assets/images/logo/logo.png";
import Carousel from "./Carousel";
function Parallax() {
  return (
    <>
      <header id="home" className="container">
        <div className="carousel slide container">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="banner" src={banner} alt="banner" />
              <div className="carousel-caption c-banner">
                <h3>Welcome to</h3>
                <h1>
                  <span className="main">Souhrudha</span> Thanal
                </h1>
                <h2>Nidhi Limited</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="aboutus">
        <div className="container">
          <div className="content opacity">
            <h3 className="title">About Us</h3>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              officiis quos expedita ipsa, a quidem inventore voluptates debitis
              accusamus tenetur qui et voluptas dicta, culpa earum, doloribus
              odio consectetur consequuntur soluta quasi nobis! Deserunt
              voluptatum reiciendis iure expedita sequi quisquam laboriosam
              temporibus exercitationem.
            </p>
          </div>

          <div className="imgContainer opacity">
            <img className="parallax-logo" src={logo} alt="" />
          </div>
        </div>
      </section>
      ` <Carousel />`
    </>
  );
}

export default Parallax;
