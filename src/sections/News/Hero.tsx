import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/assets/newsHero.png";


export default function Hero() {

  return (
    <Grid
      container
      alignItems="start"
      justifyContent="end"
      sx={{
        padding: { xs: 10 },
        zIndex: 1,
        
      }}
    >
      <Grid
        item
        sx={{
          top: { xs: 50, sm: 20, md: 20, lg: 30 },
          right: { md: 90, lg: 160 },
        }}
      >
        <Image src={HeroImg} alt="hero-image"></Image>
      </Grid>
    </Grid>
  );
}
