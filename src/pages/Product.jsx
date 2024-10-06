import React, { useEffect, useState } from "react";
import Container from "../layers/Container";
import Title from "../layers/Title";
import NavLi from "../layers/NavLi";
import grayDot from "/grayDot.png";
import HotProduct from "../components/HotProduct";
import OnSale from "../components/OnSale";
import Trending from "../components/Trending";
import NewArrival from "../components/NewArrival";
import Deal from "../components/Deal";
import PeopleSay from "../components/PeopleSay";
import Women from "../components/Women";
import Man from "../components/Man";
import Kids from "../components/Kids";
import Collection from "../components/Collection";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Trends from "../components/Trends";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from "/signLogo.png";

const Product = () => {
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
  }, []);

  let [hot, setHot] = useState(true);
  let [onSale, setOnSale] = useState(false);
  let [trending, setTrending] = useState(false);
  let [arrivalNew, setArrivalNew] = useState(false);

  let [women, setWomen] = useState(true);
  let [men, setMen] = useState(false);
  let [kids, setKids] = useState(false);
  let [collection, setCollection] = useState(false);
  let [trends, setTrends] = useState(false);

  return (
    <div>
      <Container className="relative max-w-[1334px]">
        <img
          className="hidden md:block absolute left-[-69px] top-[233px] z-0"
          src={grayDot}
          alt=""
        />
        <div className="relative">
          <Title
            className="py-3 pl-4 md:pl-0 md:py-12 bg-[#FDBB57] md:bg-transparent md:text-center"
            titleText="Our Product"
          />
          <ul
            className={`absolute md:static top-[50px] z-20 w-full flex md:flex-row flex-col items-start md:bg-transparent bg-banner-color px-3 md:px-0 py-4 md:py-3 md:items-center  justify-center gap-3 md:gap-[60px] mb-6 md:mb-[153px] duration-300 transition-all ${
              show
                ? "left-0 opacity-100 visible"
                : "opacity-0 invisible left-[-100px]"
            }`}
          >
            <NavLi
              onClick={() => {
                setHot(true);
                setOnSale(false);
                setTrending(false);
                setArrivalNew(false);
              }}
              className={`hover:text-[#ca8e33] md:hover:text-black md:hover:after:bg-black ${
                hot ? "active-link" : ""
              }`}
              liText="HOT"
            />
            <NavLi
              onClick={() => {
                setHot(false);
                setOnSale(true);
                setTrending(false);
                setArrivalNew(false);
              }}
              className={`hover:text-[#ca8e33] md:hover:text-black md:hover:after:bg-black ${
                onSale ? "active-link" : ""
              }`}
              liText="ON SALE"
            />
            <NavLi
              onClick={() => {
                setHot(false);
                setOnSale(false);
                setTrending(true);
                setArrivalNew(false);
              }}
              className={`hover:text-[#ca8e33] md:hover:text-black md:hover:after:bg-black ${
                trending ? "active-link" : ""
              }`}
              liText="TRENDING NOW"
            />
            <NavLi
              onClick={() => {
                setHot(false);
                setOnSale(false);
                setTrending(false);
                setArrivalNew(true);
              }}
              className={`hover:text-[#ca8e33] md:hover:text-black md:hover:after:bg-black ${
                arrivalNew ? "active-link" : ""
              }`}
              liText="NEW ARRIVAL"
            />
          </ul>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="block md:hidden absolute right-4 top-[35%]"
          >
            <FaBars
              className={`absolute text-xl  top-0 right-0 text-slate-800 duration-500 transition-all ${
                show ? "opacity-0 invisible rotate-45" : "opacity-100 visible"
              }`}
            />
            <IoMdClose
              className={`absolute text-2xl  top-0 right-0 text-slate-800 duration-500 transition-all ${
                show ? "opacity-100 visible" : "opacity-0 invisible -rotate-45"
              }`}
            />
          </div>
        </div>

        {/* Animate Product Sections */}
        <TransitionGroup component={null}>
          {hot && (
            <CSSTransition key="hot" timeout={400} classNames="fade">
              <HotProduct />
            </CSSTransition>
          )}
          {onSale && (
            <CSSTransition key="onSale" timeout={400} classNames="fade">
              <OnSale />
            </CSSTransition>
          )}
          {trending && (
            <CSSTransition key="trending" timeout={400} classNames="fade">
              <Trending />
            </CSSTransition>
          )}
          {arrivalNew && (
            <CSSTransition key="arrivalNew" timeout={400} classNames="fade">
              <NewArrival />
            </CSSTransition>
          )}
        </TransitionGroup>

        <Deal />
      </Container>
      <PeopleSay />
      {/* ========================================================== */}
      {/* ========================================================== */}

      {women && <Women />}
      {men && <Man />}
      {kids && <Kids />}
      {collection && <Collection />}
      {trends && <Trends />}

      {/* =======================footer nav============ */}
      <div className="flex flex-col md:gap-[111px] bg-black text-white md:pt-[128px] pb-5 md:pb-[105px] items-center justify-center relative ">
        <div className="absolute left-[50%] -translate-x-[50%] top-[-12px] md:top-[-10px] z-20">
          <a
            href="https://www.instagram.com/"
            className="rounded-[5px] md:rounded-[10px] py-1 md:py-[43px] px-6 md:px-[88px] bg-[#ffffffdd] text-[10px] md:text-[28px] font-bold text-nowrap text-black"
          >
            Follow Our INSTAGRAM : @FRESH
          </a>
        </div>
        <ul
          className={`w-full py-2 md:py-0 md:bg-transparent bg-slate-800 md:w-auto absolute z-10 md:static bottom-[104px] flex gap-3 md:gap-[60px] items-start md:items-center flex-col md:flex-row md:bg-none duration-500 transition-all ${
            show ? "opacity-100 left-0" : "opacity-0 left-[-100px]"
          }`}
        >
          <NavLi
            onClick={() => {
              setWomen(false);
              setMen(true);
              setKids(false);
              setCollection(false);
              setTrends(false);
            }}
            className={`hover:text-[#ca8e33] md:hover:text-white ${
              men ? "active-link2" : ""
            }`}
            liText="Men"
          />
          <NavLi
            onClick={() => {
              setWomen(true);
              setMen(false);
              setKids(false);
              setCollection(false);
              setTrends(false);
            }}
            className={`hover:text-[#ca8e33] md:hover:text-white  ${
              women ? "active-link2" : ""
            }`}
            liText="Woman"
          />
          <NavLi
            onClick={() => {
              setWomen(false);
              setMen(false);
              setKids(true);
              setCollection(false);
              setTrends(false);
            }}
            className={`hover:text-[#ca8e33] md:hover:text-white  ${
              kids ? "active-link2" : ""
            }`}
            liText="Kids"
          />
          <NavLi
            onClick={() => {
              setWomen(false);
              setMen(false);
              setKids(false);
              setCollection(true);
              setTrends(false);
            }}
            className={`hover:text-[#ca8e33] md:hover:text-white  ${
              collection ? "active-link2" : ""
            }`}
            liText="Collection"
          />
          <NavLi
            onClick={() => {
              setWomen(false);
              setMen(false);
              setKids(false);
              setCollection(false);
              setTrends(true);
            }}
            className={`hover:text-[#ca8e33] md:hover:text-white  ${
              trends ? "active-link2" : ""
            }`}
            liText="Trends"
          />
        </ul>
        <div className="flex w-full md:hidden">
          <img
            className="block md:hidden absolute left-4 top-[22%] h-6"
            src={logo}
            alt=""
          />
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="block md:hidden absolute right-4 top-[24%]"
          >
            <FaBars
              className={`absolute text-xl  top-0 right-0 text-white duration-500 transition-all ${
                show ? "opacity-0 invisible rotate-45" : "opacity-100 visible"
              }`}
            />
            <IoMdClose
              className={`absolute text-2xl  top-0 right-0 text-white duration-500 transition-all ${
                show ? "opacity-100 visible" : "opacity-0 invisible -rotate-45"
              }`}
            />
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          <p className="font-semibold text-sm md:text-2xl">
            Copyright FRESH. All Right Reserved
          </p>
        </div>
      </div>
      {/* =======================footer nav============ */}
    </div>
  );
};

export default Product;
