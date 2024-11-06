import Hero from "../../sections/landing/Hero";
import Aboutus from "../../sections/landing/About";
import Banner from "../../components/Banner";
import Products from "../../sections/landing/Products";
import TestimonialCard from "../../sections/landing/Testimonials";
import ImageCarousel from "@/components/Carousel";
import Grid from "@mui/material/Grid";
export default function Home() {
  return (
    <div>
      <Hero />
      <ImageCarousel name="Our Brands" direction="forward" bgcolor={true} />
      <Aboutus />
      <Banner />
      <Products />
      <TestimonialCard />
      <Grid
        sx={{
          borderTop: "solid 2px #9E9E9E",
          borderBottom: "solid 2px #9E9E9E",
        }}
      >
        <ImageCarousel name="" direction="forward" bgcolor={false}  />
        <ImageCarousel name="" direction="backward" bgcolor={false} />
      </Grid>
    </div>
  );
}
