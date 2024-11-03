import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button, Typography } from "@mui/material";
import featuredImg from "../../../public/assets/featuredImg.png";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import News from "../../data/news";

export default function Post() {
  return (
    <Grid
      container
      spacing={2}
      direction={{ xs: "column", md: "row" }} // Stack in column on small screens, row on larger
      sx={{
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: { xs: "center", md: "space-between" },
        paddingTop: { xs: 5, md: 10 },
        paddingX: { xs: 2, sm: 5, md: 15 },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Left Column */}
      <Grid item xs={12} md={12} lg={6}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ color: "red" }} mb={3}>
              Featured Post
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ position: "relative" }}>
            <Image src={featuredImg} alt="featured post" layout="responsive" width={600} height={400} />

            <Button
              variant="contained"
              component="a"
              href="/post"
              sx={{
                position: "absolute",
                bottom: 16,
                right: 16,
                borderRadius: "20px",
                color: "white",
                backgroundColor: "#EE484A",
                paddingX: 3,
                paddingY: 1,
              }}
            >
              News
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            By <span style={{ color: "#EE484A" }}>John Doe</span> | May 23, 2022
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "#6D6E76", mt: 1 }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Button
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#3D628C",
              borderRadius: "20px",
              marginTop: 3,
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={12} lg={6}>
        <Typography variant="h4" sx={{ color: "black" }}>
          All Posts
        </Typography>
        <Grid
          container
          direction="column"
          sx={{
            marginTop: 5,
            gap: 3, // space between posts
          }}
        >
          {News.map((item) => (
            <Box
              key={item.id}
              component="a"
              href={item.url}
              sx={{
                display: "block",
                "&:hover": { backgroundColor: "#F7F7F7" },
                padding: 2,
                borderRadius: 1,
                transition: "background-color 0.3s",
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#6D6E76" }}>
                By <span style={{ color: "#EE484A" }}>{item.name}</span> | {item.date}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
