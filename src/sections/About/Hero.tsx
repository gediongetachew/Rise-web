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
      sx={{ marginX: 10, marginTop: 10, height: "650px" }}
    >
      <Grid item xs={12} sx={{ marginTop: 5 }}>
        <Typography
          variant="h2"
          fontWeight="4xl"
          lineHeight="normal"
          textAlign="left"
        >
          Lorem ipsum dolor sit amet consectetur.
          <br />
          Non donec erat fermentum donaslast m ultrices lobortis enim.
          <br />
          Ac blandit semper ornare congue. At.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ width: "90%" }}>
          <Image src={heroAbout} alt="Hero image" layout="responsive" />
        </Box>
      </Grid>
    </Grid>
  );
}
