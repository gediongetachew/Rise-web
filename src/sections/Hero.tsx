import Image from "next/image";
import heroImage from "../../assets/rise.png";

export default function Hero() {
  return (
    <>
      <div className="flex  mt-20 p-10">
        <div className="w-1/2 pt-12">
          <h1 className="font-bold text-3xl">
            Bringing Innovation to <br /> HealthCare Your Trusted Partner In{" "}
            <br /> Medical Equipment{" "}
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et
            esse facere numquam earum dolore modi officiis excepturi
            exercitationem accusamus, sequi magni, amet natus odit blanditiis,
            magnam eaque illo. Quaerat!
          </p>
          <div className="pt-10 space-x-3">
            <button className="bg-[#3D628C] text-white rounded-3xl py-3 px-14 font-medium inline-block hover:text-black hover:bg-transparent hover:border-blue-900 hover:border duration-300 border border-transparent">
              Discover
            </button>
            <button className="rounded-3xl py-3 px-10 font-medium inline-block hover:bg-transparent border-blue-900 hover:bg-blue-900 hover:text-black hover:border-blue-900 hover:border duration-300 border border-transparent">
              Get In Touch
            </button>
          </div>
          <div className="pt-44">
            <p className="text-gray-400">
              Medium Equipment/ Automobile/ Cafe/ <br />
              Coffee/ Import/ Export{" "}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center pl-5 pt-5">
          <Image
            className="clip-custom rounded-lg hidden md:block"
            src={heroImage}
            height={75}
            width={500}
            alt={""}
          />
        </div>
      </div>
    </>
  );
}
