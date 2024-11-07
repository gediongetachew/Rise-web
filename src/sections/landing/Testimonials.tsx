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
        paddingX: { xs: 3, sm: 2, md: 10 },
        background: "#F7F7F7",
        height: "600px",
      }}
    >
      <Typography variant="h4" sx={{ color: "red", marginTop: 5 }}>
        Testimonials
      </Typography>

      <Grid item xs={12} sx={{ marginTop: 10 }}>
        <Grid
          container
          spacing={2}
          sx={{
            gap: "55px",
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            whiteSpace: "nowrap",
            alignItems: "flex-end",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {testimonials
            .slice(currentIndex, currentIndex + 2)
            .map((testimonial, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={5.8}
                lg={5.8}
                xl={5.8}
                key={index}
                sx={{
                  height: { xs: "260px", sm: "360px", md: "360px" },
                  width: { xs: "100%", sm: "360px", md: "360px" },
                  flexShrink: 0,
                  backgroundColor: "white",
                  borderRadius: "20px",
                  borderLeft: "1px solid rgba(0,0,0,0.1)",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "width 0.3s ease",
                }}
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
                    width: "150px",
                    height: "32px",
                    backgroundColor: "#F7F7F7",
                    borderBottomLeftRadius: "10px",
                    borderLeft: "1px solid rgba(0,0,0,0.1)",
                    zIndex: 1,
                  }}
                />

                {/* Top box next to the cutout */}
                <Grid
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: "150px",
                    height: "32px",
                    width: "calc(100% - 150px)",
                    backgroundColor: "white",
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    zIndex: 2,
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
                  <Grid item xs={12}>
                    <Image
                      src={quoteImg}
                      alt="quotation"
                      width={50}
                      height={50}
                      layout="intrinsic" // Makes the quote image responsive
                      objectFit="contain" // Keeps the aspect ratio
                    />
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      marginTop={3}
                      sx={{
                        width: "100%",
                        marginTop: 3,
                        whiteSpace: "wrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: { xs: 7,sm:20, md: 20 },
                      }}
                    >
                      {testimonial.text}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 80,
                        width: '100%',
                        marginTop: { xs: 2, sm: 5, md: 0 },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: "40px", sm: "60px", md: "60px" },
                          height: { xs: "40px", sm: "60px", md: "60px" },
                          position: "relative",
                        }}
                      >
                        <Image
                          src={testimonial.icon}
                          alt="tropy-img"
                          layout="fill"
                          objectFit="contain"
                        />
                          <Box sx={{ marginLeft: { xs: 10, md: 25 } }}>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ fontSize: { xs: 10, sm:20, md: 20 } }}
                        >
                          {testimonial.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "#475467", fontSize: { xs: 6,sm:15, md: 20 } }}
                        >
                          {testimonial.discription}
                        </Typography>
                      </Box>
                      </Box>

                    

                      <Box sx={{ width: { xs: "40px", sm: "50px" },  height: "auto" }}>
                        <Image
                          src={testimonial.img}
                          alt="two balls"
                          layout="intrinsic"
                          objectFit="contain"
                        />
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
