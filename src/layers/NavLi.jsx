import React from "react";
import { Link } from "react-router-dom";

const NavLi = ({ liText, to, onClick, className }) => {
  return (
    <li className="relative">
      <Link
        onClick={onClick}
        to={to}
        className={`font-semibold text-base md:text-2xl md:px-0 md:py-0 px-4 py-2 md:after:w-0 md:after:left-[50%] -md:after:translate-x-[50%] md:hover:after:absolute md:hover:after:bg-black md:hover:after:content-[''] md:hover:after:w-full md:hover:after:h-1 md:hover:after:top-full md:hover:after:left-0 hover:text-[#FDBB57] md:hover:text-black duration-300 transition-all after:duration-500 after:transition-all block border-b border-b-[#49484834] md:border-0 ${className}`}
      >
        {liText}
      </Link>
    </li>
  );
};

export default NavLi;
