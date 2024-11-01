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
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingTop: { xs: 10 },
        paddingX: { xs: 15 },
        gap: { xs: 0 },
      }}
    >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ color: "red" }} mb={3}>
              Featured Post
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ position: "relative" }}>
            <Image src={featuredImg} alt="featured post" />

            <Button
              variant="contained"
              component="a"
              href="/post"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                borderRadius: "20px",
                rounded: "3xl",
                color: "white",
                backgroundColor: "#EE484A",
                paddingX: { xs: 7 },
                paddingY: { xs: 2 },
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
            <Typography variant="subtitle2" sx={{ color: "#6D6E76" }}>
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
              padingX: 3,
              paddingY: 2,
              backgroundColor: "#3D628C",
              rounded: "3xl",
              borderRadius: "20px",
              marginTop: 3,
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{}}>
        <Typography variant="h4" sx={{ color: "black" }}>
          All Post
        </Typography>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "justify-between",
            marginTop: 5,
          }}
        >
          {News.map((item) => (
            <Box
              key={item.id}
              component={"a"}
              href={item.url}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                "&:hover": { border: "#F7F7F7", bgcolor: "#F7F7F7" },
                justifyContent: "flex-center",
                paddingY: 5,
                paddingX: 2,
              }}
            >
              <Typography variant="subtitle2">
                By <span style={{ color: "#EE484A" }}>{item.name}</span> |{" "}
                {item.date}
              </Typography>

              <Typography variant="h6" sx={{ font: "bold" }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
