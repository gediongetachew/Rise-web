import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button, Typography } from "@mui/material";
import featuredImg from "../../../public/assets/Featured.svg";
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
        paddingX: { xs: 2, sm: 4, md: 10 },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Left Column */}
      <Grid item xs={12} md={12} lg={6}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ color: "red", fontSize: { sx: 1, sm: 25, md: 28, lg: 28 } }}
              mb={3}
            >
              Featured Post
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ position: "relative" }}>
            <Image
              src={featuredImg}
              alt="featured post"
              layout="responsive"
              width={600}
              height={400}
            />

            <Button
              variant="contained"
              component="a"
              href="/post"
              sx={{
                width: "19%", // Adjust for responsiveness
                height: "13%",
                position: "absolute",
                bottom: 0,
                right: 0,
                borderRadius: "30px",
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

          <Box sx={{ mt: 4 }}>
            <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 25, sm:30, md: 35 },
                fontWeight: "bold",
                fontFamily: "Segoe UI",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: 15, sm:18,md:22 },
                color: "#6D6E76",
                mt: 3,
                fontFamily: "Inter",
                
              }}
            >
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
              paddingX: { xs: 3, sm: 4, md:6 },
              paddingY: { xs: 2, sm: 2, md:3 },
              backgroundColor: "#3D628C",
              borderRadius: "35px",
              marginTop: 7,
              fontFamily: "Roboto",
              fontSize: { xs: 15 },
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={12} lg={5}>
        <Typography variant="h4" sx={{ color: "black" }}>
          All Posts
        </Typography>
        <Grid
          container
          direction="column"
          sx={{
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
                marginBottom: 3,
                padding: 5,

                borderRadius: 10,
                transition: "background-color 0.3s",
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#6D6E76" }}>
                By <span style={{ color: "#EE484A" }}>{item.name}</span> |{" "}
                {item.date}
              </Typography>

              <Typography
                sx={{
                  fontWeight: "bold",
                  mt: 1,
                  fontFamily: "Segoe UI",
                  fontSize: { xs: 20, sm:25, md:30 },
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
