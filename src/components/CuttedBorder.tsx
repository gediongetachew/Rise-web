"use client";
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  text: string;
  icon: StaticImageData; // New prop for the icon
  img: StaticImageData;
}

const FolderCard = (props: Props) => {
  const [expanded, setExpanded] = useState(false); // State to control expansion

  const handleToggleExpand = () => {
    setExpanded(!expanded); // Toggle expansion state
  };

  return (
    <Grid
      container
      sx={{
        width: expanded ? "555px" : "300px", // Expand width horizontally
        height: "280px", // Keep the height fixed
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
      onClick={handleToggleExpand} // Handle click to toggle expansion
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
          width: expanded ? "524px" : "410px", // Match the width you want
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
          height: "220px", // Adjust the height as desired
          borderTop: "1px solid rgba(0,0,0,0.1)", // Top border
          borderRight: "3px solid rgba(0,0,0,0.1)", // Right border
          backgroundColor: "white",
          borderTopRightRadius: "10px", // Only top right corner rounded
          zIndex: 1, // Keep zIndex lower than the image
        }}
      />

      {/* Image Section */}
      {expanded && (
        <Image
          src={props.img} // Use the imported image
          alt="Expanded Content"
          // layout="fill" // Fill the parent container
          objectFit="cover" // Ensure image covers the area
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%", // Set image width to 50% of the card
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
        p={3}
        sx={{
          position: "relative",
          zIndex: 2,
          marginLeft: expanded ? "50%" : "0",
          marginTop: 0,
        }}
      >
        <Grid item xs={12}>
          {/* Icon on top of the text */}

          <Image
            src={props.icon} // Use the imported icon
            alt="Icon"
            width={60} // Set a width for the icon
            height={24} // Set a height for the icon
            style={{ marginRight: "8px", marginBottom: 4 }} // Add space between icon and text
          />

          <Typography variant="h6" color="textPrimary" sx={{}}>
            {props.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FolderCard;
