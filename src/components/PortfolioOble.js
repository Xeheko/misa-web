import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { imagesOble } from "./imagesOble";
import arrow from "./images/arrowSlider.svg";
import arrowL from "./images/arrowSliderL.svg";


function Portfolio() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img loading="lazy" 
      className={className}
      id="arrowROble"
      src={arrow} alt="" 
      onClick={onClick}
      style={{ ...style, scale: "10%", display: "flex" }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img loading="lazy" 
      className={className}
      id="arrowLOble"
      src={arrowL} alt="" 
      onClick={onClick}
      style={{ ...style, scale: "10%",  }}
      />
    );
  }

    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 3,
      className: "innerSlider",
      centerPadding: "-150px",
      slidesToScroll: 2,
      initialSlide: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: "0px",
              centerMode: true,
              infinite: true,
              dots: false,
              arrows: true
            },
          },
          { 
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true
          },
        },
        {
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: false,
            dots: true
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            dots: true,

          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,

      }));
    };
  
    return (
      <div className="sliderApp">
      <h1>Oblečení</h1>
      <div className="portfolioComp">
        <Slider {...settings}>
          {imagesOble.map((item) => (
            <div className="cardPro">
              <div className="card-top">
                <a href={item.category}>
                <img loading="lazy"
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  title={item.title}
                  onError={handleErrorImage}
                />
                </a>

              </div>
            </div>
          ))}
        </Slider>

      </div>

      </div>

    );
  }

export default Portfolio;
