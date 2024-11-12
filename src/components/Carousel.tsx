"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import cards from "@/data/brandCards";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

interface Props {
  name: string;
  direction: string;
  bgcolor: boolean;
}

export default function ImageCarousel({ name, direction, bgcolor }: Props) {
  return (
    <Grid container>
      {name && (
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              color: "#EE484A",
              
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.5rem" },
              backgroundColor: bgcolor ? "#F7F7F7" : "white",
              paddingLeft: 2,
              paddingTop: 5

            }}
          >
            {name}
          </Typography>
        </Grid>
      )}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          width: "100vw",
          height: name ? { xs: "140px", sm: "160px", md: "170px", lg: "220px" }: { xs: "120px", sm: "160px", md: "170px", lg: "170px" },
          backgroundColor: bgcolor ? "#F7F7F7" : "white",
        }}
      >
        {/* Title Section */}

        {/* Swiper Carousel */}
        <Grid item xs={12} marginTop={2}>
          <Swiper
            spaceBetween={15}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 1, // Set a small delay to avoid freezing
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: direction === "backward",
            }}
            speed={6000}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {cards.map((image) => (
              <SwiperSlide key={image.id} style={{ height: "100%" }}>
                <Link href={`/${image.title}`} passHref>
                  <Box
                    sx={{
                      width: {
                        xs: "70px",
                        sm: "120px",
                        md: "150px",
                        lg: "110px",
                      },
                      height: {
                        xs: "70px",
                        sm: "140px",
                        md: "120px",
                        lg: "160px",
                      },
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}
                  >
                    <Image
                      src={image.img}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 600px) 90px, (max-width: 960px) 160px, (max-width: 1280px) 200px, 300px"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Grid>
  );
}
