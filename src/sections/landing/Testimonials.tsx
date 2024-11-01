"use client";

import { useState } from "react";
import { Box, Typography, IconButton, Avatar, Grid, Slide } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import testimonials from "@/data/testimonial";


export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        mx: "auto",
        px: 2,
        py: 5,
        textAlign: "center",
        position: "relative",
      }}
    >
      <Grid container spacing={2}>
        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
          <Grid item xs={6} key={index}>
            <Slide in direction={ direction === 'right' ? 'right': 'left'} timeout={600}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 4,
                  minHeight: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.6s ease",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontStyle: "italic", mb: 2, maxHeight: 100, overflow: "hidden" }}
                >
                  {testimonial.testimony}
                </Typography>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%", position: "relative", top: "20px" }}
                >
                  <Avatar sx={{ bgcolor: "#EE484A", mr: 2 }}>
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box textAlign="left">
                    <Typography variant="h6" color="#3D628C">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {testimonial.position}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Slide>
          </Grid>
        ))}
      </Grid>

      {/* Fixed Arrows on Each Side */}
      <IconButton
        onClick={prevTestimonial}
        sx={{
          position: "absolute",
          top: "50%",
          left: -60,
          transform: "translateY(-50%)",
          bgcolor: '#3D628C',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark'
          }
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={nextTestimonial}
        sx={{
          position: "absolute",
          top: "50%",
          right: -60,
          transform: "translateY(-50%)",
          bgcolor: '#3D628C',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark'
          }
        }}
      >
        <ChevronRight />
      </IconButton>

      {/* Dots Navigation */}
      <Box display="flex" justifyContent="center" mt={3} gap={1}>
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: index === Math.floor(currentIndex / 2) ? "primary.main" : "grey.300",
              cursor: "pointer",
            }}
            onClick={() => {
              setDirection(index * 2 > currentIndex ? "left" : "right");
              setCurrentIndex(index * 2);
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
