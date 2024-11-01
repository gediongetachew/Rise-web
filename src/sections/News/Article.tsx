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
      marginTop={12}
      marginBottom={10}
      sx={{ borderBottom: "2px soldi #6D6E76 " }}
    >
      {Blog.map((item) => (
        <Grid
          key={item.id}
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
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
              height: 300,
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

            <Typography variant="h5" gutterBottom>
              {item.title}
            </Typography>

            <Typography variant="subtitle2" sx={{ color: "#6D6E76" }}>
              {item.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
