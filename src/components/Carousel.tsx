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
import { Typography } from "@mui/material";

export default function ImageCarousel() {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          background: "white",
          width: "full",
          heigh: "100vh",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{ color: "#EE484A", paddingX: 10, paddingTop: 5 }}
          >
            Trusted By
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ }}>
          <Swiper
            spaceBetween={15}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={6000}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {cards.map((image) => (
              <SwiperSlide key={image.id} className="flex justify-center">
                <Link href={`/${image.title}`}>
                  <Image
                    src={image.img}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg transform scale-[40%]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}
