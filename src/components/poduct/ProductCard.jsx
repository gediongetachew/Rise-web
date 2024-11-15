import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import { ArrowOutward } from "@mui/icons-material";

const ProductCard = ({ image, title, description, sx }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <Image
          src={image}
          width={400}
          height={30}
          alt={title}
          style={{ ...sx }}
        />
        </Box>
        
        <Typography variant="h5" sx={{ fontSize: { xs: 25, sm: 30, md: 35 } }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#616161",
            fontSize: { xs: 12, sm: 15, md: 15, lg: 15 },
            fontFamily: "Segoe UI",
          }}
        >
          {description}
        </Typography>

        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              component="a"
              href="/contact"
              endIcon={<ArrowOutward />}
              sx={{
                color: "white",
                boxShadow: "none",
                background: "#3D628C",
                borderRadius: "40px",
                border: "0.5px solid #9E9E9E",
                paddingX: { xs: 2, md: 2 },
                paddingY: { xs: 1, sm: 2, md: 1 },
                fontSize: { xs: 8, md: 15 },
              }}
            >
              Order Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
