import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import heroAbout from "../../../public/assets/Hero2.png";

export default function MyComponent() {
  return (
    <Grid
      container
      alignItems="center"
      spacing={4}
      sx={{
        mx: { xs: 0, sm: 4, md: 10 },
        mt: { xs: 5, sm: 6, md: 10 },
        height: { xs: "auto", md: "650px" },
      }}
    >
      <Grid item xs={12} sx={{ mt: { xs: 2, md: 5 } }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          lineHeight="normal"
          textAlign="left"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur.
          <br />
          Non donec erat fermentum donaslast m ultrices lobortis enim.
          <br />
          Ac blandit semper ornare congue. At.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ paddingX: { xs: 5, sm: 4, md:15 } }}>
        <Box
          sx={{
            width: { xs: "100%" },
            mx: "auto",
          }}
        >
          <Image src={heroAbout} alt="Hero image" layout="responsive" />
        </Box>
      </Grid>
    </Grid>
  );
}
