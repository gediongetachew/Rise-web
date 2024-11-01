import Banner from "@/components/Banner";
import ImageCarousel from "@/components/Carousel";
import Hero from "@/sections/Products/Hero";
import Menu from "@/sections/Products/Menu";
import Quality from "@/sections/Products/Quality";
import Grid from "@mui/material/Grid";

export default function Products() {
  return (
    <div>
      <Hero />
      <Quality />
      <Menu />
      <Banner />
      <Grid
        sx={{
          borderTop: "solid 2px #9E9E9E",
          borderBottom: "solid 2px #9E9E9E",
        }}
      >
        <ImageCarousel name="" direction="forward" />
        <ImageCarousel name="" direction="backward" />
      </Grid>
    </div>
  );
}
