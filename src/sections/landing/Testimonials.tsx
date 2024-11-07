"use client";

import { useState } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import testimonials from "@/data/testimonial";
import Image from "next/image";
import quoteImg from "../../../public/assets/quotation.png";

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Grid
      container
      position={"relative"}
      sx={{
        marginTop: 10,
        marginBottom: 5,
        paddingX: 10,
        background: "#F7F7F7",
        height: "500px",
      }}
    >
      <Typography variant="h4" sx={{ color: "red", marginTop: 5 }}>
        Testimonials
      </Typography>

      <Grid item sx={{ marginTop: 10 }}>
        <Grid container spacing={2}>
          {testimonials
            .slice(currentIndex, currentIndex + 2)
            .map((testimonial, index) => (
              <Grid
                container
                key={index}
                sx={{
                  width: "640px", // Expand width horizontally
                  height: "360px", // Keep the height fixed
                  backgroundColor: "white",
                  borderRadius: "20px",
                  borderLeft: "3px solid rgba(0,0,0,0.1)",
                  borderBottom: "3px solid rgba(0,0,0,0.1)",
                  position: "relative",
                  overflow: "hidden",
                  m: 4,
                  padding: 2,
                  transition: "width 0.3s ease",
                  elevation: 4, // Smooth transition for width change
                }}
                // Handle click to toggle expansion
              >
                {/* Cutout on the top right */}
                <Grid
                  xs={12}
                  sm={6}
                  md={6}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "150px", // Width of the cutout section
                    height: "32px", // Height of the cutout section
                    backgroundColor: "#F7F7F7",
                    borderBottomLeftRadius: "10px", // Rounded corner for the cutout section
                    borderLeft: "1px solid rgba(0,0,0,0.1)", // Border around the cutout
                    zIndex: 1, // Ensure cutout is on top
                  }}
                />

                {/* Top box next to the cutout */}
                <Grid
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: "150px", // Position it to the left of the cutout
                    width: "500px", // Match the width you want
                    height: "10px", // Height of the box
                    borderTop: "3px solid rgba(0,0,0,0.1)", // Top border only
                    backgroundColor: "white",
                    borderTopLeftRadius: "10px", // Rounded top left corner
                    borderTopRightRadius: "10px", // Rounded top right corner
                    zIndex: 3, // Keep zIndex lower than the image
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-center",
                  }}
                ></Grid>

                {/* Additional box under the cutout */}
                <Grid
                  sx={{
                    position: "absolute",
                    top: "30px", // Position it right below the cutout
                    right: 0,
                    width: "146px", // Match the width of the cutout
                    height: "340px", // Adjust the height as desired
                    borderTop: "1px solid rgba(0,0,0,0.1)", // Top border
                    borderRight: "3px solid rgba(0,0,0,0.1)", // Right border
                    backgroundColor: "white",
                    borderTopRightRadius: "10px", // Only top right corner rounded
                    zIndex: 1, // Keep zIndex lower than the image
                  }}
                />

                {/* Card Content */}
                <Grid
                  container
                  item
                  xs={12}
                  p={3}
                  sx={{
                    position: "relative",
                    zIndex: 2,

                    marginTop: 0,
                  }}
                >
                  <Grid item xs={12} sx={{}}>
                    <Image src={quoteImg} alt="quotation" />
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      marginTop={3}
                      sx={{ width: "100%", marginTop: 3 }}
                    >
                      {testimonial.text}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
                      <Image src={testimonial.icon} alt="tropy-img" />
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          {testimonial.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "#475467" }}
                        >
                          {testimonial.discription}
                        </Typography>
                      </Box>
                      <Box sx={{ alignContent: "center", marginLeft: 20 }}>
                        <Image src={testimonial.img} alt="two balls" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>

      {/* Fixed Arrows on Each Side */}
      <IconButton
        onClick={prevTestimonial}
        sx={{
          position: "absolute",
          top: "10%",
          left: "90%",
          transform: "translateY(-50%)",
          border: "solid 2px",
          bgcolor: "white",
          color: "#9E9E9E",
          "&:hover": {
            bgcolor: "gray",
          },
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={nextTestimonial}
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          border: "solid 2px",
          transform: "translateY(-50%)",
          bgcolor: "white",
          color: "#9E9E9E",
          "&:hover": {
            bgcolor: "gray",
          },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Grid>
  );
}
