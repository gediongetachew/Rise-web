import Image from "next/image";
import medicalIMg from "../../assets/medical.png";
import automobile from "../../assets/automobile.png";
import automobile2 from "../../assets/automobile2.png";
export default function Aboutus() {
  return (
    <div className="px-20 py-5 h-[500px] w-full mb-20">
      <h1 className="text-red-600 text-xl ">ABOUT US</h1>
      <div className="flex justify-between pt-5">
        <h1 className="font-bold text-3xl text-left text-[#3D628C]">
          Lorem Ipsum Dolor Sit Amet <br /> Consec Tetur Attempor Eu <br />{" "}
          Fermentu Commodo
        </h1>
        <div className="flex flex-col items-end justify-end mr-32 w-1/3">
          <p className="text-gray-500  ">
            Lorem ipsum dolor sit amet consectetur. Rhoncus <br /> gravida
            consequat feugiat consectetur. Adipiscing <br /> arcu sit auctor hac
            ornare tempus. Quis praesent.
          </p>
          <button className="flex py-3 px-14 mt-3  bg-white pt-4  rounded-3xl border font-medium  hover:bg-gray-200">
            About Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17l9-9M7 7h9v9"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" w-full h-2/3 mt-3 space-x-2 flex  ">
        <div className="relative w-1/2 h-full">
          {/* Background Image */}
          <Image
            src={medicalIMg}
            alt="medical image"
            fill
            className="object-contain object-left"
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pl-30 pt-10 pb-4 ">
            <div className="flex items-end justify-end space-x-8  pt-20 mb-5">
              {/* Left Column */}
              <div className="flex flex-col">
                <h1 className="font-bold text-md px-8  text-black">+71%</h1>
                <p className="text-gray-500 text-sm">top 5 medical import</p>
              </div>

              {/* Right Column */}
              <div className="flex flex-col">
                <h1 className="font-bold text-md px-6 text-black">+1.5K</h1>
                <p className="text-gray-500 text-sm">Happy Customer</p>
              </div>
            </div>
            <div className="flex flex-col items-baseline mt-auto mr-16 mb-5 ">
              <h1 className="font-bold text-md mb-2  text-black">
                Medical Equipments
              </h1>
              <p className="text-gray-500 text-xs ">
                Lorem ipsum dolor sit amet consectetur.
                <br /> Ornare leo eget aliquam a ut. Enim cras <br /> commodo
                tortor faucibus venenatis vitae <br /> egestas et nisi. Id nisl
                sed
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/4 h-full">
          <Image
            className="object-contain object-left"
            src={automobile}
            alt="automobile"
            fill
          />
          <div className="absolute inset-0 flex flex-col items-baseline mt-44 pl-2 ">
            <h1 className="font-bold text-black text-md mb-2 ml-2">
              Automobile
            </h1>
            <p className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet <br />
              consectetur. Ornare leo eget <br />
              aliquam a ut. Enim cras commodo <br />
              tortor viverra praesent sagittis <br />
              turpis euismod.{" "}
            </p>
          </div>
        </div>
        <div className="relative w-1/4 h-full">
          <Image
            className="object-contain object-left"
            src={automobile2}
            alt="automobile"
            fill
          />
          <div className="absolute inset-0 flex flex-col items-baseline mt-44 pl-2">
            <h1 className="font-bold text-black text-md mb-2 ml-2">
              Automobile
            </h1>
            <p className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet <br />
              consectetur. Ornare leo eget <br />
              aliquam a ut. Enim cras commodo <br />
              tortor viverra praesent sagittis <br />
              turpis euismod.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
