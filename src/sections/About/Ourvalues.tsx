import React from "react";
import world from "../../../public/assets/world.png";
import fair from "../../../public/assets/fair.png";
import social from "../../../public/assets/social.png";
import sphareWorld from "../../../public/assets/sphare.png";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

export default function Values() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#F7F7F7",
        py: { xs: 0, sm: 0 },
        px: { xs: 3, sm: 5 },
       
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
                  xl={5} // Adjust width for large screens
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
                      ml: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.5rem", xl: '1.8rem' },
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
        md={4}
        lg={4}
        container
        alignItems="start"
        justifyContent="center"
        sx={{
          paddingTop: {xs:10, sm:20}, 
        
        }}
      >
        <Image
          src={sphareWorld}
          alt="world-sphare"
          style={{ transform: "scale(1.3)", maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}
