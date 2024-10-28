import React from "react";
import world from "../../../public/assets/world.png";
import fair from "../../../public/assets/fair.png";
import social from "../../../public/assets/social.png";
import Image from "next/image";
import sphareWorld from "../../../public/assets/sphare.png";

export default function Values() {
  return (
    <div className="flex w-full h-[560px] bg-[#F7F7F7]  py-10 px-20 justify-between  ">
      <div className="w-[50%] flex flex-col items-start ">
        <div className="flex flex-col my-3">
          <h1 className="text-[#EE484A] text-2xl mb-10">OUR VALUES</h1>
          <p className="text-5xl">
            Lorem ipsum dolor sit amet consec tetur Attempor eu fermentu Commodo
          </p>
        </div>
        <div>
          <div className=" pt-10 justify-center  flex gap-4 items-center border-[#D8D8D8] border-b">
            <Image src={world} alt="flag" />
            <p>Ethical Business</p>
          </div>
          <div className=" pt-10 justify-center  flex gap-4 items-center border-[#D8D8D8] border-b ">
            <Image src={fair} alt="flag" />
            <p>Ethical Business</p>
          </div>
          <div className=" pt-10 justify-center  flex gap-4 items-center border-[#D8D8D8] border-b">
            <Image src={social} alt="flag" />
            <p>Ethical Business</p>
          </div>
        </div>
      </div>
      <div className="items-center justify-center">
        <Image className="transfrom scale-95" src={sphareWorld} alt="world-sphare" />
      </div>
    </div>
  );
}
