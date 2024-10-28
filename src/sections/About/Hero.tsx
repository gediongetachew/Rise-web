import Image from "next/image";
import React from "react";
import Hero2 from "../../../public/assets/Hero2.png";

export default function Hero() {
  return (
    <div className="flex flex-col w-full h-[400px gap-3]  gap-16 ">
      <div className=" flex  justify-center w-full ">
        <h1 className="font-bold text-5xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. <br />
          Non donec erat fermentum donaslast m ultrices lobortis enim.
          <br />
          Ac blandit semper ornare congue. At.
        </h1>
      </div>
      <div className="mx-28">
        <Image src={Hero2} alt="Hero image" />
      </div>
    </div>
  );
}
