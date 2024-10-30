import React from "react";
import Image from "next/image";
import productsHero from "../../../public/assets/productsHero.png";
import searchIcon from "../../../public/assets/searchIcon.png";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center my-32 mx-20">
      <Image
        src={productsHero}
        alt="products-hero-img"
        className="w-full h-auto"
      />
      <div className="absolute bottom-5 right-[51%] top-[100%] transform translate-x-1/2 flex gap-0 w-2/3 items-center ">
        <div className="flex  relative w-[100%] item-center">
          <Image
            className="absolute translate scale-[55%] top-2 "
            src={searchIcon}
            alt="search-icon"
          />
          <input
            className=" rounded-r rounded-xl p-2 border-l border-t border-b  border-gray-500 focus:outline-none w-[90%] h-16 text-gray-100 text-start pl-10 "
            placeholder=" Search Product By Name, Category"
          />
          <button className=" bg-[#3D628C] w-[20%] h-16 rounded-l  rounded-xl text-white px-4 py-2 hover:bg-[gray-400] bder-t border-b border-r border-gray-500">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
