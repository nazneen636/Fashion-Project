import React from "react";
import Slider from "react-slick";
import women1 from "/women1.png";
import women2 from "/women2.png";
import women3 from "/women3.png";
import women4 from "/women4.png";
import women5 from "/women5.png";

function Women() {
  const womenSliderSettings = {
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
      <Slider {...womenSliderSettings}>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women1} alt={women1} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women2} alt={women2} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women3} alt={women3} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women4} alt={women4} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women5} alt={women5} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women1} alt={women1} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women2} alt={women2} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women3} alt={women3} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women4} alt={women4} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img className="object-cover" src={women5} alt={women5} />
        </div>
      </Slider>
    </div>
  );
}

export default Women;
