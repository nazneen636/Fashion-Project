import React from "react";
import Container from "../layers/Container";
import CountdownTimer from "./CountdownTimer";
import bannerImg from "/dealBanner.png";
import grayDot from "/grayDot.png";

const Deal = () => {
  return (
    <div className="mt-10 md:mt-[150px] md:pl-[75px] md:pr-[60px] bg-banner-color flex flex-col md:flex-row justify-between">
      <div className="left">
        <h2 className="mt-6 md:mt-[105px] font-bold text-4xl md:text-[64px] font-frank-ruhl-libre">
          Deal Of The Day
        </h2>
        <p className="font-bold text-base md:text-2xl font-frank-ruhl-libre my-4 md:mt-[60px] md:mb-[70px] max-w-[569px] tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque,
          velit tortor quam at donec etiam bibendum sagittis.
        </p>
        <CountdownTimer targetDate="2024-10-31" />
        <button className="my-6 md:mt-[70px]  w-full md:w-auto bg-black rounded-[10px] text-xl md:text-2xl text-white font-semibold py-2 md:py-[23px] md:px-[86px]">
          SHOP NOW
        </button>
      </div>
      <div className="md:mt-[51px] md:mb-[98px] right relative">
        <img
          className="rounded-[20px] h-auto relative z-10 md:h-[532px]"
          src={bannerImg}
          alt={bannerImg}
        />
        <img
          className="hidden md:block absolute h-[149px] left-[-66px] bottom-[-86px] z-0"
          src={grayDot}
          alt=""
        />
      </div>
    </div>
  );
};

export default Deal;
