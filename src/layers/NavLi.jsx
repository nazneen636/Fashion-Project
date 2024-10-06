import React from "react";
import { Link } from "react-router-dom";

const NavLi = ({ liText, to, onClick, className }) => {
  return (
    <li className="relative">
      <Link
        onClick={onClick}
        to={to}
        className={`font-bold text-sm md:text-2xl md:px-0 md:py-0 px-4 py-2 md:after:w-0 md:after:h-[3px] md:after:top-full md:after:left-[50%] -md:after:translate-x-[50%] md:after:absolute md:after:bg-white md:after:content-[''] md:hover:after:w-full md:hover:after:left-0   duration-300 transition-all after:duration-500 after:transition-all ${className}`}
      >
        {liText}
      </Link>
    </li>
  );
};

export default NavLi;
