import React from "react";
import { Grid, Typography } from "@mui/material";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, title, description, link, sx }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Image
          src={image}
          width={420}
          height={20}
          alt={title}
          style={{ ...sx }}
        />
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>

        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              mt: 2,
            }}
          >
            <Link
              href={link}
              style={{
                display: "flex",
                color: "white",

                backgroundColor: "#3D628C",

                padding: 5,
                paddingRight: 15,
                borderRadius: 26,
              }}
            >
              {" "}
              <Typography variant="body1" sx={{ px: 2, py: 0.8 }}>
                {" "}
                Order Now
              </Typography>{" "}
              <IconArrowUpRight
                size="1.2rem"
                stroke="1.4"
                style={{ py: 1 }}
              />{" "}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
