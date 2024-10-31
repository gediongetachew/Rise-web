import React from "react";
import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import Image from "next/image";
import Rise from "../../public/assets/rise-logo.png"; // Adjust the path accordingly
import Link from "next/link";

const navItems = [
  { title: "Home", address: "/home" },
  { title: "About", address: "/about" },
  { title: "Product", address: "/product" },
  { title: "News", address: "/news" },
  { title: "Contact", address: "/contact" },
];

export default function Nav() {
  return (
    <AppBar
    position="fixed" 
    elevation={0}
    sx={{ top: 0, backgroundColor: "white", zIndex: 2, width: "100%" }} 
  >
    <Toolbar>
      <Grid
        container
        alignItems="center"
        spacing={2}
        sx={{ padding: "16px 40px" }}
      >
        {/* First half of the nav with logo and links, higher zIndex */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", alignItems: "center", zIndex: 4 }} // High zIndex here
        >
          <div style={{ width: "96px", marginRight: "16px" }}>
            <Image src={Rise} alt="rise logo" layout="responsive" />
          </div>
          <Grid container>
            {navItems.map((item) => (
              <Grid item key={item.title}>
                <Button
                  component={Link}
                  href={item.address}
                  sx={{
                    color: "black",
                    fontWeight: "medium",
                    marginX: 2,
                    "&:hover": {
                      fontWeight: "bold",
                      color: "black",
                    },
                  }}
                >
                  {item.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Second half of the nav with lower zIndex */}
        <Grid item xs={6} sx={{ zIndex: 2 }} /> 
      </Grid>
    </Toolbar>
  </AppBar>
  
  );
}
