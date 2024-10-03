import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import NewCollection from "../components/NewCollection";
import BestFashion from "../components/BestFashion";
import BestSellerProduct from "../components/BestSellerProduct";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <NewCollection />
      <BestFashion />
      <BestSellerProduct />
    </div>
  );
};

export default Home;
