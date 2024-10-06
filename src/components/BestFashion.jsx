import React from "react";
import Container from "../layers/Container";
import fashion from "/fashion.png";
import grayDot from "/grayDot.png";
import Title from "../layers/Title";

const BestFashion = () => {
  return (
    <div>
      <Container className="relative px-4 md:px-0 flex flex-col md:flex-row items-center justify-between mb-8 md:mb-[335px] tracking-wide">
        <div className="right md:hidden block mt-6">
          <Title
            className=" max-w-[437px]"
            titleText="Best Fashion
Since 2010"
          />
          <p className="max-w-[443px] font-poppins font-semibold text-base mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.
          </p>
        </div>
        <div className="left z-10 relative">
          <img
            className="rounded-tl-[150px] relative z-10"
            src={fashion}
            alt={fashion}
          />
          <img
            className="hidden md:block md:absolute top-[-48px] right-[-89px] z-0"
            src={grayDot}
            alt=""
          />
        </div>
        <div className="right md:block hidden">
          <Title
            className=" max-w-[437px]"
            titleText="Best Fashion
Since 2010"
          />
          <p className="max-w-[443px] font-poppins font-semibold text-2xl mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.
          </p>
        </div>
        <div className="overlay static md:absolute left-[537px] top-[614px] z-0 py-4 md:py-[71px] box-border px-4 md:px-0 md:pl-[76px] md:pr-[42px] rounded-md md:rounded-[20px] bg-box-color flex gap-6 md:gap-[86px] mt-4 md:mt-0">
          <div className="flex flex-col items-center justify-center relative after:bg-[#00000075] after:absolute after:h-12 md:after:h-[143px] after:w-[1px] after:right-[-11px] md:after:right-[-27px]">
            <h3 className="font-podkova font-bold text-xl md:text-[64px] md:leading-[180%]">
              2010
            </h3>
            <p className="font-poppins font-medium text-sm md:text-[28px]">
              Founded
            </p>
          </div>
          <div className="flex flex-col items-center justify-center relative after:bg-[#00000075] after:absolute after:h-12 md:after:h-[143px] after:w-[1px] after:right-[-11px] md:after:right-[-44px]">
            <h3 className="font-podkova font-bold text-xl md:text-[64px] md:leading-[180%]">
              5000+
            </h3>
            <p className="font-poppins font-medium text-sm md:text-[28px]">
              Product Sold
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-podkova font-bold text-xl md:text-[64px] md:leading-[180%]">
              4500+
            </h3>
            <p className="text-nowrap font-poppins font-medium text-sm md:text-[28px]">
              Best Reviews
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestFashion;
