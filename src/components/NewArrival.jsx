import React from "react";
import ProductItem from "../layers/ProductItem";
import Product1 from "/Product1.png";
import Product2 from "/Product2.png";
import Product3 from "/Product3.png";
import Product4 from "/Product4.png";
import Product5 from "/Product5.png";
import Product6 from "/Product6.png";
import Product7 from "/Product7.png";
import Product8 from "/Product8.png";

const products = [
  {
    id: 1,
    img: Product7,
    title: "Sweater Shirt",
    oldPrice: 45.99,
    newPrice: 35.99,
  },
  {
    id: 2,
    img: Product6,
    title: "Pastel Long Sleeve",
    oldPrice: 45.99,
    newPrice: 35.99,
  },
  {
    id: 3,
    img: Product1,
    title: "T-Shirt orange",
    oldPrice: 45.99,
    newPrice: 35.99,
  },
  {
    id: 4,
    img: Product8,
    title: "Sweater Shirt",
    oldPrice: 45.99,
    newPrice: 35.99,
  },
  {
    id: 5,
    img: Product2,
    title: "Pastel Long Sleeve",
    oldPrice: 45.99,
    newPrice: 35.99,
  },
  {
    id: 6,
    img: Product5,
    title: "T-Shirt orange",
    oldPrice: 45.99,
    newPrice: 35.99,
  },
  {
    id: 7,
    img: Product4,
    title: "Pastel Long Sleeve",
    oldPrice: 45.99,
    newPrice: 35.99,
  },
  {
    id: 8,
    img: Product3,
    title: "T-Shirt orange",
    oldPrice: 45.99,
    newPrice: 35.99,
  },
];

const NewArrival = () => {
  return (
    <div className="relative px-4 md:px-0 z-10 grid grid-cols-1 items-center md:grid-cols-4 gap-x-[30px] gap-y-[60px]">
      {products.map((item, index) => (
        <ProductItem
          key={index}
          productImg={item.img}
          productTitle={item.title}
          oldPrice={item.oldPrice}
          newPrice={item.newPrice}
        />
      ))}
    </div>
  );
};

export default NewArrival;
