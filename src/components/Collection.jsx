import React from "react";
import Slider from "react-slick";
import women1 from "/women1.png";
import women2 from "/women2.png";
import women3 from "/women3.png";
import women4 from "/women4.png";
import women5 from "/women5.png";
import man1 from "/man/man1.png";
import man2 from "/man/man2.png";
import man3 from "/man/man3.png";
import man4 from "/man/man4.png";
import man5 from "/man/man5.png";
import man6 from "/man/man6.png";
import man7 from "/man/man7.png";
import man8 from "/man/man8.png";
import kids1 from "/kids/kid1.png";
import kids2 from "/kids/kid2.png";
import kids3 from "/kids/kid3.png";
import kids4 from "/kids/kid4.png";
import kids5 from "/kids/kid5.png";
import kids6 from "/kids/kid6.png";
import kids7 from "/kids/kid7.png";
import kids8 from "/kids/kid8.png";
import kids9 from "/kids/kid9.png";

const Collection = () => {
  const collectionSliderSettings = {
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
      <Slider {...collectionSliderSettings}>
        <div className="h-[50px] md:h-[284px]">
          <img src={man1} alt={man1} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={women1} alt={women1} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids1} alt={kids1} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man2} alt={man2} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={women2} alt={women2} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids2} alt={kids2} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man3} alt={man3} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man4} alt={man4} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={women4} alt={women4} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids4} alt={kids4} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man5} alt={man5} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={women5} alt={women5} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids5} alt={kids5} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man7} alt={man7} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man8} alt={man8} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids6} alt={kids6} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids7} alt={kids7} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={man6} alt={man6} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids8} alt={kids8} />
        </div>
        <div className="h-[50px] md:h-[284px]">
          <img src={kids9} alt={kids9} />
        </div>
      </Slider>
    </div>
  );
};

export default Collection;
