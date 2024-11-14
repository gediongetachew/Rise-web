import React from "react";
import { Grid, Typography } from "@mui/material";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, title, description, link, sx }) => {
  return (
    <Grid container >
      <Grid item xs={12} >
        <Image
          src={image}
          width={420}
          height={30}
          alt={title}
          style={{ ...sx }}
        />
        <Typography variant="h5" sx={{ fontSize: { xs: 25, sm: 30, md: 40 } }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#616161', fontSize: { xs: 12, sm:15, md:15, lg:15 },fontFamily: 'Segoe UI' }}>
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
            <Link
              href={link}
              style={{
                display: "flex",
                color: "white",
               
                backgroundColor: "#3D628C",
               
                paddingLeft: 5,
                paddingRight: 10,
                borderRadius: 26,
              }}
            >
              {" "}
              <Typography
                variant="body1"
                sx={{ px: { xs: 1, sm: 2 }, py: {xs:1, sm: .8}, fontSize:{xs:10,sm:20} }}
              >
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
