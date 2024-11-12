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
      marginBottom={20}
      sx={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid #6D6E76",
        overflowX: { xs: "auto", sm: "auto", md: "hidden" }, // Enable horizontal scrolling on xs and sm
        flexWrap: { xs: "nowrap", sm: "nowrap", md: "nowrap" },
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ color: "#EE484A", padding:4 }}>
          Articles & Blog
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ display: "flex", gap: 4 , marginTop: {xs:5}}}>
        {Blog.map((item) => (
          <Box
            key={item.id}
            sx={{
              flex: "0 0 auto", // Prevent shrinking
              width: { xs: "75vw", sm: "60vw", md: "570px" }, // Control the width here
              display: "flex",
              flexDirection: "column",
              gap: 4,
              overflow: "hidden",
              "&:hover": { border: "#F7F7F7", bgcolor: "#F7F7F7" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 250, sm: 420 }, // Set a fixed height for the image container
                "&:hover img": {
                  transform: "scale(1.1)",
                  transition: "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
                },
              }}
            >
              <Image
                src={item.img}
                alt="article-image"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
              />
            </Box>

            <Box gap={4} sx={{ padding: 2, textAlign: "left" }}>
              <Typography variant="subtitle2" sx={{ marginBottom: 2 , fontFamily: 'Inter'}}>
                By <span style={{ color: "#EE484A" }}>{item.name}</span> |{" "}
                {item.date}
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontSize: { xs: "1rem", sm: "2.5rem" }, fontWeight: 'bold', fontFamily: 'Segoe UI' }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ color: "#6D6E76", fontSize: { xs: ".7rem", sm: "1.3rem" }, fontFamily: 'Inter' }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
