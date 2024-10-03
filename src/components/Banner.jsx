import React from "react";
import Container from "../layers/Container";
import banner from "/banner.jpg";
import dots from "/bannerDots.png";

const Banner = () => {
  return (
    <div className="bg-banner-color pb-8 md:pb-[178px]">
      <Container className="pt-7 md:pt-0 flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between md:items-center">
        <div className="left">
          <h1 className="max-w-[454px] font-semibold  text-[34px] md:text-[64px]">
            Find The Best Fashion Style For You
          </h1>
          <p className="max-w-[502px] mt-5 md:mt-[38px] mb-6 md:mb-[76px] tracking-wide text-xl md:text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.
          </p>
          <button className="py-4 md:py-6 w-full md:w-auto md:px-[90px] bg-black font-semibold text-xl md:text-2xl text-white rounded-[10px] border-2 border-transparent hover:border-[#FDBB57] hover:bg-transparent duration-300 transition-all hover:text-black">
            SHOP NOW
          </button>
        </div>
        <div className="right relative">
          <img
            className="rounded-bl-[195px] relative z-10"
            src={banner}
            alt={banner}
          />
          <img
            className="absolute z-0 left-[-9px] md:left-[-92px] top-[180px] md:top-[410px]"
            src={dots}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
