import ImageCarousel from "@/components/Carousel";
import Aboutus from "@/sections/About/Aboutus";
import Hero from "@/sections/About/Hero";
import Values from "@/sections/About/Ourvalues";

export default function About() {
  return (
    <div>
      <Hero />
      <Aboutus />
      <Values />
      <ImageCarousel name="Trusted By" direction="forward"  bgcolor={false}/>
    </div>
  );
}
