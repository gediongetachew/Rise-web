import NavBar from "../../sections/nav";
import Hero from "../../sections/Hero";
import Brandcard from "../../sections/Brandcard";
import Aboutus from "../../sections/About";
import Banner from "../../sections/Banner";
import TestimonialCard from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Brandcard />
      <Aboutus />
      <Banner />
      <TestimonialCard />
    </div>
  );
}
