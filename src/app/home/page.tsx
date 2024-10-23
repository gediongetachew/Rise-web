import NavBar from "../../sections/nav";
import Hero from "../../sections/Hero";
import Brandcard from "../../sections/Brandcard";
import Aboutus from "../../sections/About";
import Banner from "../../sections/Banner";
import Products from "../products/page";
// import TestimonialCard from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Brandcard />
      <Aboutus />
      <Banner />
      <Products />
      {/* <TestimonialCard /> */}
    </div>
  );
}
