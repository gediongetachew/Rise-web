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
      alignItems="center"
      justifyContent="center"
      sx={{
        marginTop: {xs:4, sm:4, md:6},
        paddingY: { xs: 5, sm: 6, md: 15, lg:4 },
        paddingX: { xs: 2, sm: 1, md: 5 },
        position: "relative",
        width: "100%",
        height: { xs: "55vh", md: "70vh", lg: "80vh" }, // Set height for hero image section
        overflow: "hidden", // Prevent any overflow issues with responsive image
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ position: "relative", width: "100%", height: "100%", zIndex:2 }}
      > 
        {/* Hero Image with responsive width */}
        <Image
          src={HeroImg}
          alt="hero-image"
          layout="fill"
          
          // Ensures full-width cover for all screen sizes
          priority
          
        />

        {/* Overlay Text */}
        <Grid
          container
          direction="column"
          sx={{
            position: "absolute",
            top: { xs: "53%", sm: "55%", md: "50%" },
            left: { xs: "1%", sm: "2%", md: "5%" },
            transform: "translateY(-50%)",
            width: { xs: "100%", sm: "100%", md: "80%" },
            color: "white",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: ".6rem", sm: "1.5rem", md: "2rem", lg: "3rem"},
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Non donec erat fermentum
            donec
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "0.4rem", sm: "1rem", md: "1.2rem", lg:"1.5rem" },
              marginTop: { xs: 1, sm: 1, lg: 3 },
              lineHeight: 1.6,
            }}
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
              backgroundColor: "white",
              color: "black",
              marginTop: { xs: 2, sm: 5 },
              width: { xs: "140px", sm: "180px" },
              borderRadius: "20px",
              fontSize: { xs: "0.6rem", sm: "1rem" },
            }}
          >
            Order Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
