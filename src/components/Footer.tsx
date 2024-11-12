import Image from "next/image";
import React from "react";
import flag from "../../public/assets/Flag.png";
import Link from "next/link";
import { Grid, Typography, Box, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Grid
      container
      spacing={2}
      component={"footer"}
      sx={{
        backgroundColor: "#284667",
        color: "#fff",
        pt: 5,
        px: { xs: 3, md: 8 },
        pb: 2,
        height: {xs:'900px', sm:'800px', md: '700px', lg:'650px'}
      }}
    >
      <Grid
        item
        xs={12}
        md={4}
        order={{ xs: 1, md: 5 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 4, md: 0 },
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ color: "#EE484A" }}>
          RISE GLOBAL GMBA
        </Typography>
        <Typography variant="h6" sx={{ color: "#FFFFFFBF", mt: 1, fontSize: {xs:10, sm:15, md:25}}}>
          Lorem ipsum dolor sit amet consectetur. Rhoncus gravida consequat
          feugiat consectetur. Adipiscing arcu sit auctor hac ornare tempus.
          Quis praesent.
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
        sm={3}
        md={2}
        order={{ xs: 2, md: 1 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          textAlign: "left",
        }}
      >
        <Typography variant="body1" fontWeight="bold" color='#FFFFFFBF'>
          Industry
        </Typography>
        <Typography variant="body2">AgriTech businesses</Typography>
        <Typography variant="body2">Cafe</Typography>
        <Typography variant="body2">Import and Exports</Typography>
      </Grid>

      <Grid
        item
        xs={6}
        sm={3}
        md={2}
        order={{ xs: 3, md: 2 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          textAlign: "left",
        }}
      >
        <Typography variant="body1" fontWeight="bold" color='#FFFFFFBF'>
          Industry
        </Typography>
        <Typography variant="body2">AgriTech businesses</Typography>
        <Typography variant="body2">Cafe</Typography>
        <Typography variant="body2">Import and Exports</Typography>
      </Grid>

      <Grid
        item
        xs={6}
        sm={3}
        md={2}
        order={{ xs: 4, md: 3 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          textAlign: "left",
        }}
      >
        <Typography variant="body1" fontWeight="bold" color='#FFFFFFBF'>
          Company
        </Typography>
        <Link href="/Home" passHref>
          <Typography variant="body2" component="a">
            Home
          </Typography>
        </Link>
        <Link href="/About" passHref>
          <Typography variant="body2" component="a">
            About Us
          </Typography>
        </Link>
        <Link href="/Products" passHref>
          <Typography variant="body2" component="a">
            Products
          </Typography>
        </Link>
        <Link href="/News" passHref>
          <Typography variant="body2" component="a">
            News
          </Typography>
        </Link>
        <Link href="/Contact" passHref>
          <Typography variant="body2" component="a">
            Contact
          </Typography>
        </Link>
      </Grid>

      <Grid
        item
        xs={6}
        sm={3}
        md={2}
        order={{ xs: 5, md: 4 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          textAlign: "left",
        }}
      >
        <Typography variant="body1" fontWeight="bold" color='#FFFFFFBF'>
          Contact
        </Typography>
        <Typography variant="body2">+251-900-111100</Typography>
        <Typography variant="body2">Contact@rise.com</Typography>
        <Typography variant="body2">Help@rise.com</Typography>
      </Grid>

      <Grid
        item
        xs={12}
        order={6}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box
          display="flex"
          alignItems="flex-end"
          justifyItems={"flex-end"}
          gap={1}
          sx={{ padingLeft: { sx: 35, sm: 35 } }}
        >
          <Image src={flag} alt="flag" width={24} height={16} />
          <Typography variant="body2">ENGLISH USA</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} order={7}>
        <Divider sx={{ borderColor: "#FFFFFFBF", my: 2 }} />
        <Box
          display="flex"
          flexDirection={{ xs: "row", sm: "row" }}
          justifyContent="space-between"
        >
          <Typography variant="body2" sx={{ mb: { xs: 1, sm: 0 } }}>
            Rise Ltd 2024 |{" "}
            <Link href="/privacyPolicy" passHref>
              <Typography
                component="span"
                variant="body2"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Company
              </Typography>
            </Link>
          </Typography>
          <Box display="flex" gap={2}>
            <Typography variant="body2">All Rights Reserved</Typography>
            <Link href="/privacyPolicy" passHref>
              <Typography
                component="span"
                variant="body2"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Privacy Policy
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
