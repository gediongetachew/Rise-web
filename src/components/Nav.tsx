"use client";
import { useState, useEffect } from "react";
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
  const [bgColor, setBgcolor] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 60) {
      setBgcolor("#818181");
    } else {
      setBgcolor("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed  flex  items-center justify-center w-1/2 pt-5 px-10 ml-10 rounded-3xl transition-transfrom duration-300 `}
      style={{ zIndex: 2, top: 0, backgroundColor: bgColor }}
    >
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
