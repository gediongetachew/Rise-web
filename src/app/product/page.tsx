import Banner from "@/components/Banner";
import ImageCarousel from "@/components/Carousel";
import Hero from "@/sections/Products/Hero";
import Menu from "@/sections/Products/Menu";
import Quality from "@/sections/Products/Quality";

export default function Products() {
  return (
    <div>
      <Hero />
      <Quality />
      <Menu />
      <Banner />
      <ImageCarousel prop={'Our Brands'} />
    </div>
  );
}
