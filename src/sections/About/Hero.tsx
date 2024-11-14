import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroImg from "../../../public/assets/Hero2.png";
import { Typography } from "@mui/material";

export default function Hero() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        marginTop: { xs: 4, sm: 4, md: 6 },
        paddingY: { xs: 5, sm: 6, md: 15, lg: 4 },
        paddingX: { xs: 2, sm: 1, md: 5 },
        position: "relative",
        width: "100%",
        height: { xs: "33vh", sm: "50vh", md: "70vh", lg: "70vh" }, // Set height for hero image section
        // Prevent any overflow issues with responsive image
      }}
    >
      <Grid item xs={12} sx={{ mt: { xs: 2, md: 5 } }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          lineHeight="normal"
          textAlign="left"
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur.
          <br />
          Non donec erat fermentum donaslast m ultrices lobortis enim.
          <br />
          Ac blandit semper ornare congue. At.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 2,
          marginTop: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Hero Image with responsive width */}
        <Image src={HeroImg} alt="hero-image" layout="fill" priority />
      </Grid>
    </Grid>
  );
}
