import React from "react";
import Slider from "react-slick";
import man1 from "/man/man1.png";
import man2 from "/man/man2.png";
import man3 from "/man/man3.png";
import man4 from "/man/man4.png";
import man5 from "/man/man5.png";
import man6 from "/man/man6.png";
import man7 from "/man/man7.png";
import man8 from "/man/man8.png";

const Man = () => {
  const menSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...menSliderSettings}>
        <div className="h-[50px] md:h-[284px]">
          <img src={man1} alt={man1} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man2} alt={man2} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man3} alt={man3} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man4} alt={man4} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man5} alt={man5} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man6} alt={man6} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man7} alt={man7} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man8} alt={man8} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man1} alt={man1} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man2} alt={man2} />
        </div>
      </Slider>
    </div>
  );
};

export default Man;
