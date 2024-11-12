"use client";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import aboutUsCardContent from "@/data/aboutUsCardContent";
import CuttedBorder from "../../components/CuttedBorder";
import { useState } from "react";

export default function About() {
  const [selectedCard, setSelectedcard] = useState<number | null>(null);
  const handleSelect = (id: number) => {
    setSelectedcard((prev) => (prev === id ? null : id));
  };

  return (
    <Grid
      container
      sx={{
        paddingY: { xs: 5, md: 5 },
        paddingX: { xs: 3, sm: 3 },
        marginTop: 5,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          sx={{
            color: "#EE484A",
            fontSize: { xs: 15, sm: 20, md: 25, lg: 25 },
          }}
        >
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#3D628C",
            fontSize: { xs: 30, sm: 40, md: 50 },
            fontFamily: "Helvetica",
            marginTop: 3,
            width: "80%",
          }}
        >
          Lorem ipsum dolor sit amet consec <br /> tetur Attempor eu fermentu
          Commodo
          <br />
          it amet consec tetur
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "flex-end", // Ensures all children are aligned to the right
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#616161",
              fontFamily: "Roboto",
              fontSize: { xs: 15, sm: 20, md: 25, lg: 20 },
              textAlign: "left", // Align text to the right
              marginTop: 2,
              width: "100%", // Ensures it takes full width for alignment
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Rhoncus gravida consequat
            feugiat consectetur. Adipiscing arcu sit auctor hac ornare tempus.
            Quis praesent.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowOutward />}
            sx={{
              color: "black",
              background: "white",
              width: 170,
              height: 50,
              borderRadius: "20px",
              border: "solid 1px #9E9E9E",
              alignSelf: "flex-end", // Aligns button to the right
            }}
          >
            About Us
          </Button>
        </Box>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3, // Adds space between cards
          justifyContent: "space-between", // Ensures cards are evenly spaced
          padding: 2,
        }}
      >
        {aboutUsCardContent.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // Ensures 3 cards per row
              marginBottom: 3,
            }}
          >
            <CuttedBorder
              selected={selectedCard}
              handleSelect={handleSelect}
              title={item.title}
              text={item.text}
              img={item.img}
              icon={item.icon}
              id={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
