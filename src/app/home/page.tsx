import Link from "next/link";
import NavBar from "../../components/nav";
import Hero from "@/components/Hero";
import Brandcard from "@/components/Brandcard";
import Aboutus from "../../components/About";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Brandcard />
      <Aboutus />
    </div>
  );
}
