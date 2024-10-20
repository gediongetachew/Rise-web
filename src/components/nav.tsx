import Link from "next/link";

export default function Nav() {
  const arry = ["Home", "About", "Products", "News", "Contact"];
  return (
    <div className="flex justify-between items-center w-full p-10">
      <h1 className="font-bold text-xl">Rise</h1>
      <div className="flex justify-center items-center w-full">
        <ul className="flex space-x-20 text-black hover:text-black font-medium">
          {arry.map((item) => (
            <li
              key={item}
              className="hover:font-bold w-10 transition-all duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
