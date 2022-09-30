import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ArrowForwardIcon  } from '@chakra-ui/icons'
// import "./Components/Carousel.module.css"

export default class Fade extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      nextArrow:<ArrowForwardIcon/>
      // prevArrow: 
    };
    return (
      <div style={{ margin: "auto" }}>
        {/* <h2>Fade</h2> */}
        <Slider {...settings}>
          <div>
            <img src="https://i.postimg.cc/CxGjwgLn/Bitrix-1.png" alt=""/>
          </div>
          <div>
            <img src="https://i.postimg.cc/5tf230L1/Bitrix-2.png" alt=""/>
          </div>
          <div>
            <img src="https://i.postimg.cc/zDHH3ykP/Bitrix-3.png" alt=""/>
          </div>
          <div>
            <img src="https://i.postimg.cc/D01z6bjv/Bitrix-4.png" alt=""/>
          </div>
          <div>
            <img src="https://i.postimg.cc/XvX7hPHD/Bitrix-5.png" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
