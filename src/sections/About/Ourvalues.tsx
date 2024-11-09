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
        width: "100%",
        minHeight: "608px",
        backgroundColor: "#F7F7F7",
        py: { xs: 0, sm: 4 },
        px: { xs: 3, sm: 5 },
        marginTop: { xs: 20 },
      }}
    >
      {/* Text Section */}
      <Grid item xs={12} md={6}>
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
                  md: "3rem",
                  lg: "3.75rem",
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur Adipiscing elit, sed do
              eiusmod tempor
            </Typography>
          </Grid>

          {/* Values Cards Section */}
          <Grid item>
            <Grid
              display='flex'
              container
              spacing={2}
              flexDirection={{ xs: "column", lg: "row" }} // Change to row for lg and up
              alignItems="center"
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
                  lg={4} // Adjust width for large screens
                  container
                  alignItems="center"
                  sx={{
                    py: 2,
                    borderBottom: { xs: "1px solid #D8D8D8", lg: "none" },
                    borderRight: { lg: index < 2 ? "1px solid #D8D8D8" : "none" }, // Add right border except last item
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={28}
                    height={28}
                  />
                  <Typography
                    sx={{
                      ml: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
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
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={sphareWorld}
          alt="world-sphare"
          style={{ transform: "scale(0.9)", maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}
