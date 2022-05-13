//https://react-slick.neostack.com/

import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", right: "0px", zIndex: 11}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", left: "0px", zIndex: 11}}
      onClick={onClick}
    />
  );
}

const Carousel3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="maxwidth">
        <Slider {...settings}>
          <div>
            <img style={{ width: "100%"}} src="img/a_main_slider01.png"></img>
          </div>
          <div>
            <img style={{ width: "100%"}} src="img/a_main_slider02.png"></img>
          </div>
          <div>
            <img style={{ width: "100%"}} src="img/a_main_slider03.png"></img>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel3;
