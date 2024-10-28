import Hero from "../../sections/landing/Hero";
import Aboutus from "../../sections/landing/About";
import Banner from "../../components/Banner";
import Products from "../../sections/landing/Products";
import TestimonialCard from "../../sections/landing/Testimonials";
import ImageCarousel from "@/components/Carousel";
export default function Home() {
  return (
    <div>
      <Hero />
      <ImageCarousel />
      <Aboutus />
      <Banner />
      <Products />
      <TestimonialCard />
    </div>
  );
}
