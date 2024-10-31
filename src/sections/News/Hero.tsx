import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroImg from "../../../public/assets/newsHero.png";
import { Button, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";

export default function Hero() {
  return (
    <Grid
  container
  alignItems="start"
  justifyContent="end"
  sx={{
    padding: { xs: 10 },
    paddingY: { xs: 4 },
    paddingX: { xs: 20 },
    zIndex: 1, 
  }}
>
  <Grid item>
    <Grid container >
      <Grid item xs={12} sx={{ position: "relative" }}>
        <Image src={HeroImg} alt="hero-image" />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "50%",
          top: { xs: 150 },
          left: { xs: 250 },
        }}
      >
        <Typography variant="h3" sx={{ color: "white" }}>
          Lorem ipsum dolor sit amet consectetur. Non donec erat fermentum
          donec
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ color: "white", marginTop: { xs: 4 } }}
        >
          Lorem ipsum dolor sit amet consectetur. Amet nec leo amet diam
          pellentesque tellus maecenas massa nisl. Lacinia nam ultrices
          pretium a elementum nunc consequat. Metus quam viverra ullamcorper
          aliquet tortor semper consectetur fermentum consequat. Nisl luctus
          urna lacus suspendisse quam leo eu netus mauris. Pharetra id
          sagittis orci purus ut. Faucibus non blandit eget varius auctor.
        </Typography>

        <Button
          variant="contained"
          component="a"
          href="/contact"
          endIcon={<ArrowOutward />}
          sx={{
            background: "white",
            color: "black",
            marginTop: { xs: 10 },
            width: { xs: 180 },
            borderRadius: "20px",
          }}
        >
          Order Now
        </Button>
      </Grid>
    </Grid>
  </Grid>
</Grid>

  );
}
