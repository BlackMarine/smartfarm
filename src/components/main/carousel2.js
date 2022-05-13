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
      style={{ ...style, display: "block", background: "", right: "0px", zIndex: 1}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "", left: "0px", zIndex: 1}}
      onClick={onClick}
    />
  );
}

const Carousel2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
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
            <img style={{ maxHeight: "338px", objectFit: "fill" }} src="img/a_main_gif01.gif"></img>
          </div>
          <div>
            <img style={{ maxHeight: "338px", objectFit: "fill" }} src="img/a_main_gif02.gif"></img>
          </div>
          <div>
            <img style={{ maxHeight: "338px", objectFit: "fill" }} src="img/a_main_gif03.gif"></img>
          </div>
          <div>
            <img style={{ maxHeight: "338px", objectFit: "fill" }} src="img/a_main_gif04.gif"></img>
          </div>
          <div>
            <img style={{ maxHeight: "338px", objectFit: "fill" }} src="img/a_main_gif05.gif"></img>
          </div>
          <div>
            <img style={{ maxHeight: "338px", objectFit: "fill" }} src="img/a_main_gif06.gif"></img>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel2;
