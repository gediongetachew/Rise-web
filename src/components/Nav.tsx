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
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Home", address: "/home" },
  { title: "About", address: "/about" },
  { title: "Product", address: "/product" },
  { title: "News", address: "/news" },
  { title: "Contact", address: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
        zIndex: 8,
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
            xs={6}
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
                  fontWeight: pathname === item.address ? "bold" : "medium",
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
            sx={{ dislay: { md: "none" }, textAlign: "right" }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ marginLeft: { xs: 18, sm: 45 } }} // Align to the right
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
          anchor="right" // Drawer opens from the top
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              paddingX: { xs: "8px", sm: "12px", md: "16px" }, // Responsive padding
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
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
                  color: "#3D628C",
                  fontWeight: pathname === item.address ? "bold" : "medium",
                  fontSize: { xs: "2rem", sm: "3rem", md: "0.95rem" }, // Responsive font size for drawer items
                  paddingY: { xs: "20px", sm: "25px", md: "8px 16px" }, // Responsive button padding
                  "&:hover": {
                    fontWeight: "xl",
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
