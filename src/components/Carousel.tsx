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

interface Props {
  name: string;
  direction: string;
  bgcolor: boolean;
}

export default function ImageCarousel({ name, direction, bgcolor }: Props) {
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
          height: "auto",
          backgroundColor: bgcolor ? "#F7F7F7" : "white",
        }}
      >
        <Grid item xs={12} sx={{ display: name === null ? "none" : "block" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#EE484A",
              paddingX: 4,
              paddingTop: name === null ? 0 : 5,
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" }
            }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop={2}>
          <Swiper
            spaceBetween={15}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: direction === "backward",
            }}
            speed={6000}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper"
           
          >
            {cards.map((image) => (
              <SwiperSlide key={image.id} style={{ height: "100%" }}>
                <Link href={`/${image.title}`}>
                  <Image
                    src={image.img}
                    alt={image.alt}
                    className="object-contained rounded-lg transform scale-[50%]"
                    style={{ width: "100%", height: "100%" }}
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
