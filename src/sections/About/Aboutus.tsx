import Image from "next/image";
import React from "react";
import visionImg from "../../../public/assets/vision-icon.png";

export default function Aboutus() {
  return (
    <div className="flex flex-col justify-between h-[600px] w-full gap-10 mt-20 mb-40 mx-28">
      <div className="items-start">
        <p className="text-2xl text-[#EE484A]">ABOUT US</p>
      </div>

      <div className="flex  w-full  ">
        <div className="w-[45%]">
          <h1 className=" text-5xl text-[#3D628C] ">
            Lorem ipsum dolor sit amet consectetur.Non donec erat <br />{" "}
            fermentum donec{" "}
          </h1>
        </div>
        <div className="px-36 w-[50%]">
          <p className="text-2xl text-[#616161]">
            Lorem ipsum dolor sit amet consectetur. Sit arcu elit enim lorem at
            venenatis ipsum. Dolor nunc ultrices in accumsan massa mattis urna
            volutpat ac. Dui nisl consequat id aliquam. Accumsan enim sed
            fermentum neque. Feugiat montes amet dapibus in mauris eget
            scelerisque tincidunt. Rutrum et odio mi vestibulum eros euismod
            morbi. Risus lobortis non tellus mi massa. Arcu pulvinar convallis.
          </p>
        </div>
      </div>

      <div className="flex  gap-20 mt-10 ">
        <div className="w-[41%] flex flex-col items-start border border-[#D8D8D8] gap-3 p-5">
          <Image src={visionImg} alt="vision icon" />
          <h1>Our Vision</h1>
          <span className="text-md">
            Lorem ipsum dolor sit amet consectetur. Egestas blandit pellentesque
            fermentum quis eget vehicula eleifend eleifend orci. Faucibus sed
            elem entum suspendisse felis lacus. In lectus vitae enim pulvinar
            sed vulp utate.
          </span>
        </div>

        <div className="w-[41%] flex flex-col items-start border border-[#D8D8D8] gap-3 p-5">
          <Image src={visionImg} alt="vision icon" />
          <h1>Our Vision</h1>
          <span className="text-md">
            Lorem ipsum dolor sit amet consectetur. Egestas blandit pellentesque
            fermentum quis eget vehicula eleifend eleifend orci. Faucibus sed
            elem entum suspendisse felis lacus. In lectus vitae enim pulvinar
            sed vulp utate. Ornare sit ridiculus sed massa et ut. Eleifend sit
            tempor facilisi sit mi dictumst odio.
          </span>
        </div>
      </div>
    </div>
  );
}
