import React from "react";
import Container from "../layers/Container";
import Title from "../layers/Title";
import bestProduct1 from "/Product1.png";
import bestProduct2 from "/Product2.png";
import grayDot from "/grayDot.png";
import ProductItem from "../layers/ProductItem";

const BestSellerProduct = () => {
  return (
    <div className="bg-[#CFA485]">
      <Container className="relative px-4 md:px-0 flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 md:items-center py-8 md:pt-9 md:pl-[79px] md:pb-[191px]">
        <img
          className="hidden md:block absolute top-[-107px] left-[175px]"
          src={grayDot}
          alt=""
        />
        <div className="text">
          <Title
            className="max-w-[315px] text-white"
            titleText="Best Seller Product"
          />
          <p className="text-[#ffffffce] md:text-white font-bold text-base md:text-2xl font-frank-ruhl-libre my-4 md:mt-[43px] md:mb-10 max-w-[437px] tracking-[.8px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque,
            velit tortor quam at donec etiam bibendum sagittis. Libero tempor,
            lacus amet, scelerisque neque mauris odio risus nec. Nisl,
            parturient at morbi morbi sit arcu. At integer maecenas tortor non
            lectus.
          </p>
          <button className="py-3 md:py-6 w-full md:w-auto md:px-[86px] bg-black font-semibold text-xl md:text-2xl text-white rounded-[10px] hover:bg-box-color duration-500 transition-all hover:text-black">
            Learn MORE
          </button>
        </div>
        <ProductItem
          className="rounded-tl-[60px] rounded-tr-[60px]"
          productImg={bestProduct1}
          productTitle="Sweater Shirt"
          oldPrice="45.99"
          newPrice="35.99"
        />
        <ProductItem
          className="rounded-tl-[60px] rounded-tr-[60px]"
          productImg={bestProduct2}
          productTitle="Pants fashion"
          oldPrice="55"
          newPrice="44.99"
        />
      </Container>
    </div>
  );
};

export default BestSellerProduct;
