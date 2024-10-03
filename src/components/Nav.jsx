import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import Container from "../layers/Container";
import NavLi from "../layers/NavLi";
import { Link } from "react-router-dom";
import { TbArticle } from "react-icons/tb";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  let [show, setShow] = useState(false);
  useEffect(() => {
    function size() {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    size();

    window.addEventListener("resize", size);
  }, []);

  return (
    <div className="bg-banner-color">
      <Container className="relative bg-[#f3ede2] md:bg-transparent flex md:px-0 md:items-center justify-between items-center pt-5 md:pt-[66px] pb-5 md:pb-[136px]">
        <div className="logo">
          <img className="w-24 md:w-full" src={logo} alt={logo} />
        </div>
        <div
          className={`menu w-full bg-white md:bg-transparent  md:w-auto absolute top-full left-0 md:static ${
            show ? "block visible" : "hidden invisible"
          }`}
        >
          <ul
            className={`flex gap-x-4 md:gap-x-[60px] md:items-center md:flex-row flex-col md:bg-transparent`}
          >
            <NavLi liText="Men" />
            <NavLi liText="Woman" />
            <NavLi liText="Kids" />
            <NavLi liText="Collection" />
            <NavLi liText="Trends" />
          </ul>
          <div className="btn md:hidden my-4 flex flex-col gap-y-3 ">
            <Link
              className="text-base mx-4 w-[100px]  font-semibold text-[#050505] text-center py-2 border border-transparent bg-[#FDBB57] rounded-[8px] hover:bg-transparent hover:border-[#FFD687] duration-500 transition-all"
              to="/signup"
            >
              Login
            </Link>
            <Link
              className="text-base mx-4 w-[100px]  font-semibold text-[#050505] text-center py-2 border border-transparent bg-[#FDBB57] rounded-[8px] hover:bg-transparent hover:border-[#FFD687] duration-500 transition-all"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className="btn hidden md:flex gap-[10px]">
          <Link
            className="text-2xl font-semibold text-[#050505]  py-[10px] px-[14px] border border-transparent bg-[#FDBB57] rounded-[10px] hover:bg-transparent hover:border-[#FFD687] duration-500 transition-all"
            to="/signup"
          >
            Login
          </Link>
          <Link
            className="md:text-2xl text-base font-semibold text-[#050505]  md:py-[10px] md:px-[14px] py-[6px] px-2 border border-transparent bg-[#FDBB57] rounded-[6px] md:rounded-[10px] hover:bg-transparent hover:border-[#FFD687] duration-500 transition-all"
            to="/signup"
          >
            Sign up
          </Link>
        </div>

        <div
          onClick={() => {
            setShow(!show);
          }}
          className="block md:hidden"
        >
          <FaBars className="text-xl  top-0 right-0 text-slate-800" />
        </div>
      </Container>
    </div>
  );
};

export default Nav;
