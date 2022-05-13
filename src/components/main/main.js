//https://react-slick.neostack.com/

import React, { useState } from "react";
import Slider from "react-slick";
import Carousel from "./carousel";
import Carousel2 from "./carousel2";
import Carousel3 from "./carousel3";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <>
      <Carousel/>

      <div className="maxwidth" style={{paddingTop: "110px", paddingBottom: "50px", textAlign: "center"}}>
        <img src="img/a_main_text01.png"></img>
      </div>
      <div className="maxwidth" style={{paddingBottom: "50px"}}>
        <Slider {...settings}>
          <div>
            <img style={{ width: "100%" }} src="img/a_main_control01.png"></img>
          </div>
          <div>
            <img style={{ width: "100%" }} src="img/a_main_control02.png"></img>
          </div>
          <div>
            <img style={{ width: "100%" }} src="img/a_main_control03.png"></img>
          </div>
          <div>
            <img style={{ width: "100%" }} src="img/a_main_control04.png"></img>
          </div>
          <div>
            <img style={{ width: "100%" }} src="img/a_main_control05.png"></img>
          </div>
        </Slider>
      </div>

      <Carousel2/>

      <div style={{paddingTop: "50px", textAlign: "center"}}>
        {/* <img src="img/a_main_text02.png"></img> */}
        <div style={{color: "white", backgroundColor: "#6BB522", paddingTop: "35px", paddingBottom: "35px"}}>
          <span style={{fontSize: "30px"}}>Service center</span><span style={{fontSize: "32px"}}> Tel) 063-213-8801 / Fax) 063-213-8802</span><br></br>AM 09:00 ~ PM 06:00 / 공휴일 및 주말 제외
        </div>
      </div>

      <Carousel3/>

      <div style={{backgroundImage: `url(asd)`}}>
      </div>
    </>
  );
};

export default Main;
