import Image from "next/image";
import Brandimg from "../../assets/brand3.png";

export default function Brandcard() {
  return (
    <div className="py-8 px-10 bg-gray-200">
      <h1 className="text-red-600 text-xl ">OUR BRANDS</h1>
      <div className=" py-5 px-10  flex items-center justify-center space-x-32 ">
        <Image height={50} width={100} src={Brandimg} alt="brand img" />
        <Image height={50} width={100} src={Brandimg} alt="brand img" />
        <Image height={50} width={100} src={Brandimg} alt="brand img" />
        <Image height={50} width={100} src={Brandimg} alt="brand img" />
        <Image height={50} width={100} src={Brandimg} alt="brand img" />
        <Image height={50} width={100} src={Brandimg} alt="brand img" />
      </div>
    </div>
  );
}
