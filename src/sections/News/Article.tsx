import Grid from "@mui/material/Grid";
import React from "react";
import Blog from "../../data/Blog";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Article() {
  return (
    <Grid
      container
      padding={4}
      spacing={4}
      marginBottom={5}
      sx={{
        borderBottom: "2px soldi #6D6E76 ",
        overflowX: { xs: "auto", sm: "auto", md: "hidden" }, // Enable horizontal scrolling on xs and sm
        flexWrap: { xs: "nowrap", sm: "nowrap", md: "nowrap" },
      }}
    >
      {Blog.map((item) => (
        <Grid
          key={item.id}
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            minWidth: { xs: "90%", sm: "90%", md: "auto" }, // Set a width to enable horizontal scrolling on smaller screens
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflow: "hidden",
            "&:hover": { border: "#F7F7F7", bgcolor: "#F7F7F7" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: {xs:250, sm:300},
              width: "100%",
              "&:hover img": {
                transform: "scale(1.1)",
                transition: "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
              },
            }}
          >
            <Image
              src={item.img}
              alt="article-image"
              layout="fill"
              objectFit="cover"
            />
          </Box>

          <Box gap={4} sx={{ padding: 2 }}>
            <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
              By <span style={{ color: "#EE484A" }}>{item.name}</span> |{" "}
              {item.date}
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "2rem" } }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ color: "#6D6E76", fontSize: { xs: ".7rem", sm: "2rem" } }}
            >
              {item.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
