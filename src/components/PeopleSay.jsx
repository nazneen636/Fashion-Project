import React, { useState } from "react";
import Container from "../layers/Container";
import Title from "../layers/Title";
import customer1 from "/customer1.png";
import customer2 from "/customer2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Customer from "./Customer";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const customers = [
  {
    id: 1,
    title: "Comfortable And Meet All My Expectation !",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec",
    image: customer1,
    name: "John Deep",
    position: "Customer",
  },
  {
    id: 2,
    title: "Really Satisfied With The Product !",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec",
    image: customer2,
    name: "Alexandra Dario",
    position: "Customer",
  },
  {
    id: 3,
    title: "Comfortable And Meet All My Expectation !",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec",
    image: customer1,
    name: "Alexandra Dario",
    position: "Customer",
  },
  {
    id: 4,
    title: "Really Satisfied With The Product !",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec",
    image: customer2,
    name: "Alexandra Dario",
    position: "Customer",
  },
  {
    id: 5,
    title: "Comfortable And Meet All My Expectation !",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec",
    image: customer2,
    name: "Alexandra Dario",
    position: "Customer",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "black",
        fontSize: "30px",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "34px",
        top: "315px",
      }}
      onClick={onClick}
    >
      {/* <FaLongArrowAltRight /> */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "white",
        fontSize: "16px",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "18px",
        top: "315px",
        zIndex: "10",
      }}
      onClick={onClick}
    >
      {/* <FaLongArrowAltLeft /> */}
    </div>
  );
}
const PeopleSay = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "380px",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    beforeChange: (item, index) => {
      setActiveIndex(index);
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "50%",
          position: "absolute",
          bottom: "-80px",
          left: "50%",
          transform: "translate(0, -50%)",
          padding: "0px",
        }}
      >
        <ul
          style={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            gap: "8px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px black solid",
          borderRadius: "50%",
          marginTop: "50px",
          color: "transparent",
          cursor: "pointer",
          backgroundColor: i == activeIndex ? "black" : "white",
        }}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          centerMode: true,
          centerPadding: "0",
          // centerMode: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "50%",
                position: "absolute",
                bottom: "-80px",
                left: "50%",
                // transform: "translateX(-50%)",
                padding: "0px",
              }}
            >
              <ul
                style={{
                  width: "100%",
                  marginTop: "20px",
                  display: "flex",
                  gap: "8px",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="md:mt-[119px] mt-8 md:pb-[180px]">
      <Title
        className="text-center text-[22px]"
        titleText="What People Say About Us"
      />
      <p className="text-center my-3 md:my-10 text-sm px-2 md:px0 md:text-xl tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit
        tortor quam at donec etiam.
      </p>
      <div className="slider__container">
        <Slider {...settings} className="w-full">
          {customers.map((item, index) => (
            <Customer
              key={item.id}
              customerTitle={item.title}
              customerImg={item.image}
              customerName={item.name}
              customerPosition={item.position}
              customerDescription={item.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PeopleSay;
