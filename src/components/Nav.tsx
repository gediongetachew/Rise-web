import Link from "next/link";
import Image from "next/image";
import Rise from "../../public/assets/rise-logo.png";

export default function Nav() {
  const navItems = [
    { title: "Home", address: "/home" },
    { title: "About", address: "/about" },
    { title: "Product", address: "/product" },
    { title: "News", address: "/news" },
    { title: "Contact", address: "/contact" },
  ];
  return (
    <div className="relative flex justify-between items-center w-1/2 p-10 mx-10">
      <div className="w-24">
        <Image src={Rise} alt="rise logo" />
      </div>

      <div className="flex justify-center items-center w-full">
        <ul className="flex space-x-20 text-black hover:text-black font-medium">
          {navItems.map((item) => (
            <li
              key={item.title}
              className="hover:font-bold w-10 transition-all duration-300"
            >
              <Link href={`${item.address}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
