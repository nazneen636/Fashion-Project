import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import Container from "../layers/Container";
import NavLi from "../layers/NavLi";
import { Link } from "react-router-dom";
import { TbArticle } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

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
      <Container className="relative bg-[#f3ede2] md:bg-transparent flex px-4 md:px-0 md:items-center justify-between items-center pt-5 md:pt-[66px] pb-5 md:pb-[136px]">
        <div className="logo">
          <img className="w-24 md:w-full" src={logo} alt={logo} />
        </div>
        <div
          className={`menu w-full bg-white md:bg-transparent  md:w-auto absolute top-full  md:static duration-300 transition-all ${
            show
              ? "opacity-100 visible left-0"
              : "opacity-0 invisible left-[-100px]"
          }`}
        >
          <ul
            className={`flex py-2 md:py-0 gap-3 md:gap-[60px] md:items-center md:flex-row flex-col md:bg-transparent`}
          >
            <NavLi
              className="hover:text-[#FDBB57] md:hover:text-black md:hover:after:bg-black "
              to="/product"
              liText="Men"
            />
            <NavLi
              className="hover:text-[#FDBB57] md:hover:text-black md:hover:after:bg-black"
              to="/product"
              liText="Woman"
            />
            <NavLi
              className="hover:text-[#FDBB57] md:hover:text-black md:hover:after:bg-black"
              to="/product"
              liText="Kids"
            />
            <NavLi
              className="hover:text-[#FDBB57] md:hover:text-black md:hover:after:bg-black"
              to="/product"
              liText="Collection"
            />
            <NavLi
              className="hover:text-[#FDBB57] md:hover:text-black md:hover:after:bg-black"
              to="/product"
              liText="Trends"
            />
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
          className="block md:hidden absolute right-4 top-[38%]"
        >
          <FaBars
            className={`absolute text-xl  top-0 right-0 text-black duration-500 transition-all ${
              show ? "opacity-0 invisible rotate-45" : "opacity-100 visible"
            }`}
          />
          <IoMdClose
            className={`absolute text-2xl  top-0 right-0 text-black duration-500 transition-all ${
              show ? "opacity-100 visible" : "opacity-0 invisible -rotate-45"
            }`}
          />
        </div>
      </Container>
    </div>
  );
};

export default Nav;
