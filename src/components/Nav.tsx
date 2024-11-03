"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Rise from "../../public/assets/rise-logo.png";
import Link from "next/link";

const navItems = [
  { title: "Home", address: "/home" },
  { title: "About", address: "/about" },
  { title: "Product", address: "/product" },
  { title: "News", address: "/news" },
  { title: "Contact", address: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        backgroundColor: "white",
        zIndex: 2,
        width: "100%",
        height: { xs: 50, sm: 60, md: 80 }, // Responsive height
      }}
    >
      <Toolbar sx={{ minHeight: "inherit", zIndex: 4 }}>
        <Grid
          container
          alignItems="center"
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%" }, // Responsive width
            padding: { xs: "8px 16px", md: "16px 30px" },
          }}
        >
          {/* Logo Section with Responsive Size */}
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{ width: { xs: 60, sm: 70, md: 80 }, marginRight: "16px" }}
            >
              {" "}
              {/* Adjust logo size */}
              <Image src={Rise} alt="rise logo" layout="responsive" />
            </Box>
          </Grid>

          {/* Navigation Links for Medium and Larger Screens */}
          <Grid
            item
            xs={0}
            md={8}
            container
            alignItems="center"
            sx={{
              display: { xs: "none", md: "flex" }, // Only show on medium and larger screens
              justifyContent: "flex-start", // Align navigation next to the logo
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.title}
                component={Link}
                href={item.address}
                sx={{
                  color: "black",
                  fontWeight: "medium",
                  fontSize: { md: "0.7rem", lg: "1rem" }, // Responsive font size
                  "&:hover": {
                    fontWeight: "bold",
                    color: "black",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Grid>

          {/* Mobile Menu Button for Small Screens, aligned to the right */}
          <Grid
            item
            xs={6}
            md={2}
            sx={{ display: { md: "none" }, textAlign: "right" }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ marginLeft: { xs: 15, sm: 40 } }} // Align to the right
            >
              <MenuIcon
                sx={{
                  color: "black",
                  fontSize: { xs: "1.5rem", sm: "1.75rem" },
                }}
              />
            </IconButton>
          </Grid>
        </Grid>

        {/* Drawer for Mobile Navigation */}
        <Drawer
          anchor="top" // Drawer opens from the top
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              paddingX: { xs: "8px", sm: "12px", md: "16px" }, // Responsive padding
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto", // Allow horizontal scrolling
              whiteSpace: "nowrap", // Prevent wrapping to the next line
              paddingX: { xs: "2px 5px", sm: "8px 12px", md: "12px 16px" }, // Responsive padding
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.title}
                component={Link}
                href={item.address}
                onClick={handleDrawerToggle}
                sx={{
                  color: "black",
                  fontWeight: "medium",
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" }, // Responsive font size for drawer items
                  padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" }, // Responsive button padding
                  "&:hover": {
                    fontWeight: "bold",
                    color: "black",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
