import React, { useState } from "react";
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

const Product = () => {
  let [hot, setHot] = useState(true);
  let [onSale, setOnSale] = useState(false);
  let [trending, setTrending] = useState(false);
  let [arrivalNew, setArrivalNew] = useState(false);

  return (
    <div>
      <Container className="relative max-w-[1334px]">
        <img
          className="hidden md:block absolute left-[-69px] top-[233px] z-0"
          src={grayDot}
          alt=""
        />
        <Title className="my-12 text-center" titleText="Our Product" />
        <ul className="w-full flex items-center justify-center gap-[60px] mb-6 md:mb-[153px]">
          <NavLi
            onClick={() => {
              setHot(true);
              setOnSale(false);
              setTrending(false);
              setArrivalNew(false);
            }}
            className="font-bold"
            liText="HOT"
          />
          <NavLi
            onClick={() => {
              setHot(false);
              setOnSale(true);
              setTrending(false);
              setArrivalNew(false);
            }}
            className="font-bold"
            liText="ON SALE"
          />
          <NavLi
            onClick={() => {
              setHot(false);
              setOnSale(false);
              setTrending(true);
              setArrivalNew(false);
            }}
            className="font-bold"
            liText="TRENDING NOW"
          />
          <NavLi
            onClick={() => {
              setHot(false);
              setOnSale(false);
              setTrending(false);
              setArrivalNew(true);
            }}
            className="font-bold"
            liText="NEW ARRIVAL"
          />
        </ul>
        {hot && <HotProduct />}
        {onSale && <OnSale />}
        {trending && <Trending />}
        {arrivalNew && <NewArrival />}

        <Deal />
      </Container>
      <PeopleSay />
    </div>
  );
};

export default Product;
