import React from "react";
import Image from "next/image";
import tropyIcon from "../../../public/assets/tropy.png";
import verifyIcon from "../../../public/assets/verify.png";
import warrantyIcon from "../../../public/assets/warranty.png";
import supportIcon from "../../../public/assets/support.png";

export default function Quality() {
  return (
    <div className="flex gap-2 justify-between items-center bg-[#F7F7F7] w-full h-[200px] mt-32 mb-20">
      <div className="flex gap-3 items-center justify-center w-1/4 ">
        <Image src={tropyIcon} alt="tropy-img" />
        <div>
          <h1 className="font-bold text-xl">High Quality</h1>
          <p>Top Products & Materials</p>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center w-1/4 ">
        <Image src={verifyIcon} alt="tropy-img" />
        <div>
          <h1 className="font-bold text-xl">High Quality</h1>
          <p>Top Products & Materials</p>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center w-1/4 ">
        <Image src={warrantyIcon} alt="tropy-img" />
        <div>
          <h1 className="font-bold text-xl">High Quality</h1>
          <p>Top Products & Materials</p>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center w-1/4 ">
        <Image src={supportIcon} alt="tropy-img" />
        <div>
          <h1 className="font-bold text-xl">High Quality</h1>
          <p>Top Products & Materials</p>
        </div>
      </div>
    </div>
  );
}
