import React from "react";
import { FaStar } from "react-icons/fa";

const ProductItem = ({
  productImg,
  productTitle,
  oldPrice,
  newPrice,
  className,
}) => {
  return (
    <div
      className={`card overflow-hidden flex flex-col gap-4 bg-white ${className} w-full md:w-[318px] h-[526px] duration-500 transition-all`}
    >
      <img className="h-[404px]" src={productImg} alt="" />
      <div className="px-[22px] flex flex-col gap-[11px]">
        <div className="icon flex gap-2">
          <FaStar className="text-[#FFAF37]" />
          <FaStar className="text-[#FFAF37]" />
          <FaStar className="text-[#FFAF37]" />
          <FaStar className="text-[#FFAF37]" />
          <FaStar className="text-[#FFAF37]" />
        </div>
        <h4 className="font-semibold text-[22px] font-poppins">
          {productTitle}
        </h4>
        <div className="flex gap-[31px]">
          <p className="text-2xl text-[#C4C4C4]">${oldPrice}</p>
          <p className="text-2xl">${newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
