import React from "react";

const Title = ({ titleText, className }) => {
  return (
    <div
      className={`text-3xl md:text-[64px] leading-[120%] font-bold font-frank-ruhl-libre ${className}`}
    >
      {titleText}
    </div>
  );
};

export default Title;
