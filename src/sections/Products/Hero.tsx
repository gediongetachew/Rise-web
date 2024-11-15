import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroImg from "../../../public/assets/p.png";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Hero() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        marginTop: { xs: 10, sm: 8, md: 4, lg: 12 },
        paddingY: { xs: 5, sm: 6, md: 15, lg: 4 },
        paddingX: { xs: 2, sm: 4, md: 10 },
        position: "relative",
        width: "100%",
        height: { xs: "40vh", md: "70vh", lg: "80vh" }, // Set height for hero image section
        overflow: "hidden", // Prevent any overflow issues with responsive image
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ position: "relative", width: "100%", height: "100%", zIndex: 2 }}
      >
        {/* Hero Image with responsive width */}
        <Image
          src={HeroImg}
          alt="hero-image"
          layout="fill"
          // Ensures full-width cover for all screen sizes
          priority
        />

        {/* Overlay Text */}
        <Grid
          container
          direction="column"
          sx={{
            position: "absolute",
            top: { xs: "53%", sm: "55%", md: "50%" },
            left: { xs: "1%", sm: "5%", md: "13%" },
            transform: "translateY(-50%)",
            width: { xs: "90%", sm: "90%", md: "80%" },
            color: "white",
            zIndex: 2,
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem" },
              fontWeight: "bold",
            }}
          >
            Discover Quality Products
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.5rem",
              },
              marginTop: { xs: 1, sm: 1, lg: 3 },
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet donec etiam neque sed.
            Convallis non commodo pulvinar diam elit urna ac morbi aenean. Odio
            nec vulputate mauris congue. Potenti risus amet feugiat nunc posuere
            eget.
          </Typography>
        </Grid>

        <Box
          sx={{
            position: "absolute",
            bottom: 5,
            right: "50%",
            top: "100%",
            transform: "translateX(50%)",
            display: "flex",
            gap: 0,
            width: "66%", // equivalent to 2/3 width
            alignItems: "center",
            paddingTop: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* Search Icon */}
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: 100,
                transform: "translateY(-50%) scale(0.55)",
              }}
            ></IconButton>

            {/* Input Field */}
            <InputBase
              placeholder="Search Product By Name, Category"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color: "gray",
                      transform: { xs: "scale(0.5)", sm: "scale(0.9)" },
                    }}
                  />
                </InputAdornment>
              }
              sx={{
                pl: 7,
                pr: 1,
                py: { xs: 2.5, sm: 3, md: 3.5 },
                borderRadius: "16px 0 0 16px ",
                borderLeft: "1px solid #D1D5DB",
                borderTop: "1px solid #D1D5DB",
                fontSize: { xs: 10, sm: 12, md: 15, lg: 20 },
                fontFamily: "Roboto",
             
                borderBottom: "1px solid #D1D5DB",
                backgroundColor: "white",
                color: "black",
                width: "90%",
                height: { xs: "10px", sm: "20px", md: "20px", lg: "25px" },
                "&::placeholder": {
                  color: "gray",
                },
              }}
            />

            {/* Search Button */}
            <Button
              variant="contained"
              sx={{
                py: { xs: 2.5, sm: 3, md: 3.5 },
                height: { xs: "35px", sm: "35px", md: "34px" },
                borderRadius: "0px 16px 16px 0px",
                backgroundColor: "#3D628C",
                fontSize: { xs: 10, sm: 12, md: 15, lg: 20 },
                fontFamily: "Roboto",
                color: "white",
                width: "20%",
                borderTop: "1px solid #D1D5DB",
                borderBottom: "1px solid #D1D5DB",
                borderLeft: "1px solid #D1D5DB",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
