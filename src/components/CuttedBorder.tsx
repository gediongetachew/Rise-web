"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  id: number;
  title: string;
  text: string;
  icon: StaticImageData; // New prop for the icon
  img: StaticImageData;
  selected: number | null;
  handleSelect: (id: number) => void;
}

const FolderCard = (props: Props) => {
  const expand = props.id === props.selected;

  console.log(`${props.id} ${expand}`);

  return (
    <Grid
      container
      onClick={() => props.handleSelect(props.id)}
      sx={{
        width: { xs: "350px", md: expand ? "740px" : "300px" }, // Expand width horizontally
        height: { xs: "250px", md: "340px" }, // Keep the height fixed
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
        sx={{
          position: "absolute",
          top: 10,
          right: 0,
          width: "70px", // Width of the cutout section
          height: "40px", // Height of the cutout section
          backgroundColor: "white",
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
          right: "70px", // Position it to the left of the cutout
          width: expand ? "524px" : "410px", // Match the width you want
          height: "10px", // Height of the box
          borderTop: "3px solid rgba(0,0,0,0.1)", // Top border only
          backgroundColor: "white",
          borderTopLeftRadius: "10px", // Rounded top left corner
          borderTopRightRadius: "10px", // Rounded top right corner
          zIndex: 1, // Keep zIndex lower than the image
        }}
      />

      {/* Additional box under the cutout */}
      <Grid
        sx={{
          position: "absolute",
          top: "49px", // Position it right below the cutout
          right: 0,
          width: "62px", // Match the width of the cutout
          height: "280px", // Adjust the height as desired
          borderTop: "1px solid rgba(0,0,0,0.1)", // Top border
          borderRight: "3px solid rgba(0,0,0,0.1)", // Right border
          backgroundColor: "white",
          borderTopRightRadius: "10px", // Only top right corner rounded
          zIndex: 1, // Keep zIndex lower than the image
        }}
      />

      {/* Image Section */}
      {expand && (
        <Image
          src={props.img} // Use the imported image
          alt="Expanded Content"
          // layout="fill" // Fill the parent container
          objectFit="cover" // Ensure image covers the area
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "45%", // Set image width to 50% of the card
            height: "100%", // Set image height to fill the card
            zIndex: 2, // Set zIndex higher than the boxes
            borderTopLeftRadius: "20px", // Optional: Add rounded corners to match the card
            borderBottomLeftRadius: "20px", // Optional: Add rounded corners to match the card
          }}
        />
      )}

      {/* Card Content */}
      <Grid
        container
        item
        xs={12}
        sx={{
          position: "relative",
          zIndex: 2,
          marginLeft: expand ? "45%" : "0",
          paddingX: expand ? 1 : 0,
          marginTop: 0,
        }}
      >
        <Grid item xs={12}>
          {/* Icon on top of the text */}
          <Box
            sx={{
              width: { xs: "50px", sm: "50px", md: "60px" },
              height: { xs: "30px", sm: "50px", md: "60px" },
              position: "relative",
            }}
          >
             <Image
            src={props.icon} // Use the imported icon
            alt="Icon"
            width={60} // Set a width for the icon
            height={24} // Set a height for the icon
            style={{ marginRight: "8px", marginBottom: 4 }} // Add space between icon and text
          />
          </Box>
         

          {expand && (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "20%",
                marginTop: { xs: 4, md: 8 },

                gap: {xs:2,md:10},
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 30 },
                    fontFamily: "Helvetica Light",
                    fontWeight: "bold"
                  }}
                >
                  +70.1%
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 10, md: 12 },
                    fontFamily: "Helvetica Light",
                    color: "#616161",
                  }}
                >
                  Top 5 Medical Equipment Imports
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 30 },
                    fontFamily: "Helvetica Light",
                    fontWeight: "bold",
                  }}
                >
                  +1.5k
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 10, md: 12 },
                    fontFamily: "Helvetica Light",
                    color: "#616161",
                  }}
                >
                  Happy Customer{" "}
                </Typography>
              </Box>
            </Box>
          )}
          <Typography
            variant="h6"
            color="textPrimary"
            fontFamily={"Helvetica Light"}
            sx={{
              marginTop: expand ? 4 : 17,
              fontWeight: "bold",
              fontSize: { xs: 15, md: 20 },
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            fontFamily={"Helvetica Light"}
            sx={{ fontSize: { xs: 10, md: 15 } }}
          >
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FolderCard;
