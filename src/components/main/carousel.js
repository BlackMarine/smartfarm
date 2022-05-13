//https://react-slick.neostack.com/

import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

  const [data, setData] = useState('@!#!@#!@# e');
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <Slider {...settings}>
          <div>
            <img style={{width:"100%"}} src="img/a_banner01.png"></img>
          </div>
          <div>
            <img style={{width:"100%"}} src="img/a_banner02.png"></img>
          </div>
          <div>
            <img style={{width:"100%"}} src="img/a_banner03.png"></img>
          </div>
        </Slider>
    </>
  )
};

export default Carousel;
