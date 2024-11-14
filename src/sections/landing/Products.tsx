"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import img1 from "../../../public/assets/product1.jpg";
import img2 from "../../../public/assets/product2.jpg";
import img3 from "../../../public/assets/product3.jpg";
import img4 from "../../../public/assets/product4.jpg";
import { Button, Box, Typography, Grid } from "@mui/material";

export default function Products() {
  const images = [
    {
      src: img1,
      title: "Medical Equipment and Devices",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sagittis massa at quis lacus blandit eleifend sem odio at. Ut a lacinia lorem et pellentesque mauris orci dignissim. Massa imperdiet at a.",
    },
    {
      src: img2,
      title: "Automobiles",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sagittis massa at quis lacus blandit eleifend sem odio at. Ut a lacinia lorem et pellentesque mauris orci dignissim. Massa imperdiet at a.",
    },
    {
      src: img3,
      title: "Coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sagittis massa at quis lacus blandit eleifend sem odio at. Ut a lacinia lorem et pellentesque mauris orci dignissim. Massa imperdiet at a.",
    },
    {
      src: img4,
      title: "Spice and Herbs",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sagittis massa at quis lacus blandit eleifend sem odio at. Ut a lacinia lorem et pellentesque mauris orci dignissim. Massa imperdiet at a.",
    },
    {
      src: img1,
      title: "Spice and Herbs",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sagittis massa at quis lacus blandit eleifend sem odio at. Ut a lacinia lorem et pellentesque mauris orci dignissim. Massa imperdiet at a.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const imageWidth = 350; // Width of each image card

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current!.scrollBy({ left: imageWidth, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollRef.current!.scrollBy({ left: -imageWidth, behavior: "smooth" });
    }
  };

  return (
    <Grid container sx={{ paddingLeft: {xs:1} }}>
      <Grid container spacing={2} mb={5}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              color: "#EE484A",
              fontSize: { xs: 15, sm: 20, md: 25, lg: 25 },
            }}
          >
            Our Products
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="flex-start"
          sx={{ width: "full" }}
        >
          <Typography
            variant="h3"
            color="textSecondary"
            sx={{ color: "#3D628C", fontSize: { xs: 20, sm: 40, md: 50 } }}
          >
            Lorem ipsum dolor sit <br /> amet consec tetur Atte
            <br /> mpor eu fermentu Commodo
          </Typography>
        </Grid>
      </Grid>

      
        <Box
          mb={2}
          
          justifyContent="flex-end"
          sx={{
            width: "100%",
            display:{xs:'none', md:"flex"}
          }}
        >
          <Button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            variant="outlined"
            sx={{
              marginRight: 4,
              borderRadius: "20px",
              color: "black",
              border: "1px solid #9E9E9E",
            }}
          >
            ←
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            variant="outlined"
            sx={{
              marginRight: 10,
              borderRadius: "20px",
              color: "black",
              border: "1px solid #9E9E9E",
            }}
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
          width: "100%",
        height: {xs:'400px', md:"600px"}, // Increase height to accommodate text
          overflowX: { xs: "auto", sm: "auto", md: "hidden" },
          
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
            flex: {xs:"0 0 calc(100% / 1.2)",md:"0 0 calc(100% / 3.5)"},
              height: "100%",
              scrollSnapAlign: "center",
              transition: "transform .5s ease-in-out",
              transform: index === currentIndex ? "scale(1)" : "scale(0.95)",
              opacity: index === currentIndex ? 1 : 0.8,
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%", // Keep a fixed height for the image

                borderRadis: "10px",
              }}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                objectFit="cover"
              />
              <Box
                sx={{
                  height: "30%", // Ensure text container doesn't shrink the image
                  textAlign: "left",
                  paddingTop: 2,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily={"Roboto"}
                  sx={{fontSize: {xs:15,md:20}}}
                >
                  {img.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  pr={5}
                  fontFamily={"Roboto"}
                  sx={{fontSize: {xs:10,md:20}}}
                >
                  {img.description}
                </Typography>
              </Box>
            </Box>

            {/* Text Container */}
          </Box>
        ))}
      </Box>
      <Box
          mb={2}
          mt={3}
          justifyContent="flex-end"
          sx={{
            width: "100%",
            display:{xs:'flex', md:"none"}
          }}
        >
          <Button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            variant="outlined"
            sx={{
              marginRight: 4,
              borderRadius: "20px",
              color: "black",
              border: "1px solid #9E9E9E",
            }}
          >
            ←
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            variant="outlined"
            sx={{
              marginRight: 10,
              borderRadius: "20px",
              color: "black",
              border: "1px solid #9E9E9E",
            }}
          >
            →
          </Button>
        </Box>
    </Grid>
  );
}
