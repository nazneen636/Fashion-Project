import React from "react";
import Title from "../layers/Title";
import Container from "../layers/Container";
import collection1 from "/collection1.png";
import collection2 from "/collection2.png";
import collection3 from "/collection3.png";
import collectionRec from "/collectionRec.png";
3;
const NewCollection = () => {
  return (
    <div>
      <Container className="px-4 md:px-0 my-8 md:my-[224px]">
        <Title
          className="mb-5 md:mb-[108px] text-center"
          titleText="New Collection"
        />
        <div className="relative flex flex-wrap md:justify-between items-center justify-center gap-5 md:gap-0">
          <div className="relative">
            <img className="rounded-[20px]" src={collection1} alt="" />
            <div className="overlay absolute left-[50%] translate-x-[-50%] bottom-[44px] px-[108px] py-[10px] rounded-[20px] bg-white">
              <p className="font-poppins text-2xl">Sweater</p>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[20px]" src={collection2} alt="" />
            <div className="overlay absolute left-[50%] translate-x-[-50%] bottom-[44px] px-[108px] py-[10px] rounded-[20px] bg-white">
              <p className="font-poppins text-2xl">Jeans</p>
            </div>
          </div>
          <div className="relative z-10">
            <img className="rounded-[20px]" src={collection3} alt="" />
            <div className="overlay absolute left-[50%] translate-x-[-50%] bottom-[44px] px-[108px] py-[10px] rounded-[20px] bg-white">
              <p className="font-poppins text-2xl">Baskets</p>
            </div>
          </div>
          <img
            className="hidden md:block static md:absolute right-[-50px]  bottom-[-100px] z-0"
            src={collectionRec}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default NewCollection;
