import React from "react";
import world from "../../../public/assets/world.png";
import fair from "../../../public/assets/fair.png";
import social from "../../../public/assets/social.png";
import sphareWorld from "../../../public/assets/world.svg";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

export default function Values() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#F7F7F7",
        py: { xs: 0, sm: 0 },
        paddingX: { xs: 2, sm: 4, md: 10 },
   
      }}
    >
      {/* Text Section */}
      <Grid item xs={12} md={6} marginTop={5}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography
              variant="h5"
              color="secondary"
              sx={{
                mb: 2,
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              }}
            >
              OUR VALUES
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2.25rem",
                  md: "2.1rem",
                  lg: "3rem",
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur Adipiscing elit, sed do
              eiusmod tempor
            </Typography>
          </Grid>

          {/* Values Cards Section */}
          <Grid item mt={5}>
            <Grid
              display="flex"
              container
              spacing={3}
              flexDirection={{ xs: "column", lg: "column" }} // Change to row for lg and up
              alignItems="flex-start"
              sx={{ paddingX: { xs: 2, sm: 4, md: 6 } }}
            >
              {[
                { src: world, text: "Ethical Business" },
                { src: fair, text: "Fair Trade" },
                { src: social, text: "Social Responsibility" },
              ].map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  lg={7}
                  xl={6} // Adjust width for large screens
                  container
                  alignItems="center"
                  sx={{
                    py: 4,
                    borderBottom: { xs: "1px solid #D8D8D8" },
                    // Add right border except last item
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={50}
                    height={50}
                  />
                  <Typography
                    sx={{
                      ml: 1,
                      fontSize: {
                        xs: "0.9rem",
                        sm: "1rem",
                        md: "1.5rem",
                        xl: "1.8rem",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Image Section */}
      <Grid
  item
  xs={12}
  md={6}
  container
  alignItems="center" // Center vertically
  justifyContent="center" // Center horizontally
  sx={{
    paddingTop: { xs: 5, sm: 0 },
    display: "flex", // Ensure flexbox is applied
  }}
>
  <Image
    src={sphareWorld}
    alt="world-sphare"
    style={{ transform: "scale(1)", maxWidth: '100%', height: "auto" }}
  />
</Grid>
    </Grid>
  );
}
