import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button, Typography } from "@mui/material";
import featuredImg from "../../../public/assets/featuredImg.png";
import Image from "next/image";
import Link from "next/link";
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
        paddingTop: 10,
        paddingX: 4,
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
                bottom: -1,
                right: { xs: 10, sm: 40, md: 10, lg: 100 },
                borderRadius: "14px",
                rounded: "3xl",
                color: "white",
                backgroundColor: "#EE484A",
                paddingX: 5.6,
                paddingY: 1.6,
              }}
            >
              News
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ mt: 3 }}>
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

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography variant="h4" sx={{ color: "#EE484A" }}>
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
