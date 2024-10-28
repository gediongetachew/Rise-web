import Image from "next/image";
import React from "react";
import flag from "../../public/assets/Flag.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-[450px]">
      <footer className=" bg-[#284667] pt-20 px-20 text-[#ffff] text-sm grid grid-cols-6 gap-2 w-full h-full">
        <div className="col-span-1 space-y-4">
          <p>industry</p>
          <p>AgriTech businesses</p>
          <p>cafe</p>
          <p>import and Exports</p>
        </div>
        <div className="col-span-1 space-y-4">
          <p>industry</p>
          <p>AgriTech businesses</p>
          <p>cafe</p>
          <p>import and Exports</p>
        </div>
        <div className="col-span-1 space-y-4 ">
          <p>Company</p>
          <div className="flex flex-col gap-4">
            <Link href={"/Home"}>Home</Link>
            <Link href={"/About"}>About Us</Link>
            <Link href={"/Products"}>Products</Link>
            <Link href={"/News"}>News</Link>
            <Link href={"/Contact"}>Contact</Link>
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <p>+251-900-111100</p>
          <p>Contact@rise.com</p>
          <p>cafe</p>
          <p>help@rise.com</p>
        </div>
        <div className="flex flex-col col-span-2 space-y-10 ml-36">
          <div className="items-start justify-end space-y-3">
            <h1 className="text-3xl font-bold text-[#EE484A]">
              RISE GLOBAL GMBA
            </h1>
            <p className="text-xs text-[#FFFFFFBF]">
              Lorem ipsum dolor sit amet consectetur
              <br /> Rhoncus gravida consequat feugiat consectetur.
              <br /> Adipiscing arcu sit auctor hac ornare tempus. Quis
              praesent.
            </p>
          </div>
          <div className=" pt-10 justify-center  flex gap-4 items-center">
            <Image src={flag} alt="flag"></Image>
            <p>ENGLISH USA</p>
          </div>
        </div>
        <div className="flex justify-between col-span-6 items-center px-24  border-t">
          <span className="text-xm mr-2">
            Rise Ltd 2024 |<Link href={"/privacyPolicy"}>Company</Link>
          </span>
          <span className="flex gap-4 text-xs">
            All Rights Reserved |
            <Link href={"/privacyPolicy"}>privacy policy</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
