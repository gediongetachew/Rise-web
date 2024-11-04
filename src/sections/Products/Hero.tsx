import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroImg from "../../../public/assets/productsHero.png";
import { Typography } from "@mui/material";

export default function Hero() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        marginTop: { xs: 4, sm: 4, md: 0, lg: 8 },
        paddingY: { xs: 5, sm: 6, md: 15, lg: 4 },
        paddingX: { xs: 0, sm: 1, md: 5 },
        position: "relative",
        width: "100%",
        height: { xs: "40vh", md: "70vh", lg: "80vh" }, // Set height for hero image section
        overflow: "hidden", // Prevent any overflow issues with responsive image
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ position: "relative", width: "100%", height: "100%", zIndex: 2 }}
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
            left: { xs: "1%", sm: "5%", md: "13%" },
            transform: "translateY(-50%)",
            width: { xs: "100%", sm: "90%", md: "80%" },
            color: "white",
            zIndex: 2,
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
              fontWeight: "bold",
            }}
          >
            Discover Quality Products
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.5rem",
              },
              marginTop: { xs: 1, sm: 1, lg: 3 },
              lineHeight: 1.6,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet donec etiam neque sed.
            Convallis non commodo pulvinar diam elit urna ac morbi aenean. Odio
            nec vulputate mauris congue. Potenti risus amet feugiat nunc posuere
            eget.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
