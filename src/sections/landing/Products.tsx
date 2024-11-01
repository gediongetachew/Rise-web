"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import img1 from "../../../public/assets/product1.jpg";
import img2 from "../../../public/assets/product2.jpg";
import img3 from "../../../public/assets/product3.jpg";
import img4 from "../../../public/assets/product4.jpg";
import img5 from "../../../public/assets/product1.jpg";
import { Button, Box, Typography, Grid } from "@mui/material";

export default function Products() {
  const images = [
    {
      src: img1,
      title: "Medical Equipment and Devices",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: img2,
      title: "Automobiles",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: img3,
      title: "Coffee",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: img4,
      title: "Spice and Herbs",
      description: "Lorem ipsum dolor sit amet...",
    },
    { src: img5, title: "Product 5", description: "This is product 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current!.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollRef.current!.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <article className="w-full mt-10 px-20">
      {/* Grid Container with Typography */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ color: "#EE484A" }}>
            Our Products
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="flex-start"
          sx={{ width: "full" }}
        >
          <Typography
            variant="h3"
            color="textSecondary"
            sx={{ color: "#3D628C", width: "1/2" }}
          >
            Lorem ipsum dolor sit <br /> amet consec tetur Atte
            <br /> mpor eu fermentu Commodo
          </Typography>
        </Grid>
      </Grid>

      <Box mb={2} display="flex" justifyContent="flex-end">
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          variant="outlined"
          sx={{ marginRight: 1 }}
        >
          ←
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          variant="outlined"
        >
          →
        </Button>
      </Box>

      {/* Scrollable Image Container */}
      <Box
        ref={scrollRef}
        display="flex"
        overflow="hidden"
        sx={{
          height: "350px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "300px",
              height: "100%",
              scrollSnapAlign: "center",
              transition: "transform 0.7s ease-in-out",
              transform: index === currentIndex ? "scale(1)" : "scale(0.95)",
              opacity: index === currentIndex ? 1 : 0.7,
            }}
          >
            <Image
              src={img.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-[250px] object-cover rounded-md"
              width={300}
              height={250}
            />
            <Box mt={2}>
              <Typography variant="h6" fontWeight="bold">
                {img.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {img.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </article>
  );
}
