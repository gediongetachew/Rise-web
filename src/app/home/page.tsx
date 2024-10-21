import NavBar from "../../components/nav";
import Hero from "@/components/Hero";
import Brandcard from "@/components/Brandcard";
import Aboutus from "../../components/About";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Brandcard />
      <Aboutus />
      <Banner />
    </div>
  );
}
