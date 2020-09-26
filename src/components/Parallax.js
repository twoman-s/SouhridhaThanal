import React, { useEffect } from "react";
import mountain1 from "./../assets/images/parallax/mountain1.png";
import mountain2 from "./../assets/images/parallax/mountain2.png";
import mountain3 from "./../assets/images/parallax/mountain3.png";
import plant from "./../assets/images/parallax/plant.png";
import sky from "./../assets/images/parallax/sky.png";
import "./../assets/Parallax.css";
import logo from "./../assets/images/logo/logo.png";
import Carousel from "./Carousel";
function Parallax() {
  useEffect(() => {
    const translate = document.querySelectorAll(".translate");
    const big_title = document.querySelector(".big-title");
    const header = document.querySelector("header");
    const shadow = document.querySelector(".shadow");
    // const content = document.querySelector(".content");
    const section = document.querySelector("section");
    // const image_container = document.querySelector(".imgContainer");
    // const opacity = document.querySelectorAll(".opacity");
    const border = document.querySelector(".border");

    let header_height = header.offsetHeight;
    let section_height = section.offsetHeight;

    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset;
      let sectionY = section.getBoundingClientRect();

      translate.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
      });

      //   opacity.forEach((element) => {
      //     element.style.opacity = scroll / (sectionY.top + section_height);
      //   });

      big_title.style.opacity = -scroll / (header_height / 2) + 1;
      shadow.style.height = `${scroll * 0.5 + 300}px`;

      //   content.style.transform = `translateY(${
      //     (scroll / (section_height + sectionY.top)) * 50 - 50
      //   }px)`;
      //   image_container.style.transform = `translateY(${
      //     (scroll / (section_height + sectionY.top)) * -50 + 50
      //   }px)`;

      border.style.width = `${
        (scroll / (sectionY.top + section_height)) * 40
      }%`;
    });
  });
  return (
    <>
      <header id="home" className="container">
        <h1 className="big-title translate" data-speed="0.1">
          Souhrudha Thanal
        </h1>
        <img
          src={plant}
          className="person translate"
          data-speed="-0.25"
          alt=""
        />
        <img
          src={mountain1}
          className="mountain1 translate"
          data-speed="-0.2"
          alt=""
        />
        <img
          src={mountain2}
          className="mountain2 translate"
          data-speed="0.4"
          alt=""
        />
        <img
          src={mountain3}
          className="mountain3 translate"
          data-speed="0.3"
          alt=""
        />
        <img src={sky} className="sky translate" data-speed="0.5" alt="" />
      </header>
      ` <Carousel />`
      <section id="aboutus">
        <div className="shadow"></div>

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
    </>
  );
}

export default Parallax;
