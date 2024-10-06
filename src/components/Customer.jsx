import React from "react";

const Customer = ({
  className,
  customerPosition,
  customerImg,
  customerName,
  customerTitle,
  customerDescription,
}) => {
  return (
    <div>
      <div
        className={`w-full md:max-w-[515px] flex flex-col items-center justify-center gap-[14px] bg-banner-color pt-9 pb-4 ${className}`}
      >
        <h3 className="font-bold text-base md:text-[18px]">{customerTitle}</h3>
        <p className="text-base md:text-[18px] px-4 md:px-0 text-justify md:text-left tracking-wider w-auto md:max-w-[438px]">
          {customerDescription}
        </p>
        <img src={customerImg} alt={customerName} className="w-[75px]" />
        <h5 className="font-bold text-[18px]">{customerName}</h5>
        <span className="">{customerPosition}</span>
      </div>
    </div>
  );
};

export default Customer;
