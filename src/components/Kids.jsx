import React from "react";
import Slider from "react-slick";
import kids1 from "/kids/kid1.png";
import kids2 from "/kids/kid2.png";
import kids3 from "/kids/kid3.png";
import kids4 from "/kids/kid4.png";
import kids5 from "/kids/kid5.png";
import kids6 from "/kids/kid6.png";
import kids7 from "/kids/kid7.png";
import kids8 from "/kids/kid8.png";
import kids9 from "/kids/kid9.png";

const Kids = () => {
  const kidsSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...kidsSliderSettings}>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids1} alt={kids1} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids2} alt={kids2} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids3} alt={kids3} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids4} alt={kids4} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids5} alt={kids5} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids6} alt={kids6} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids7} alt={kids7} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids8} alt={kids8} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids9} alt={kids9} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids3} alt={kids3} />
        </div>
      </Slider>
    </div>
  );
};

export default Kids;
