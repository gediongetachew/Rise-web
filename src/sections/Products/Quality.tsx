import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import tropyIcon from "../../../public/assets/tropy.png";
import verifyIcon from "../../../public/assets/verify.png";
import warrantyIcon from "../../../public/assets/warranty.png";
import supportIcon from "../../../public/assets/support.png";

export default function Quality() {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: "#F7F7F7",
        width: "100%",
        mt: { xs: 8, md: 16 }, // Margin top for responsiveness
        mb: { xs: 5, md: 10 }, // Margin bottom for responsiveness
        py: { xs: 3, md: 5 },
        px: { xs: 2, md: 10 }, // Padding for side spacing on smaller screens
      }}
    >
      {/* Each grid item */}
      <Grid
        item
        xs={6}
        sm={6}
        md={3}
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={tropyIcon} alt="tropy-img" />
        <Box marginLeft={2}>
          <Typography variant="h6" fontWeight="bold">
            High Quality
          </Typography>
          <Typography variant="body2">Top Products & Materials</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        sm={6}
        md={3}
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={verifyIcon} alt="verify-img" />
        <Box marginLeft={2}>
          <Typography variant="h6" fontWeight="bold">
            Verified
          </Typography>
          <Typography variant="body2">Top Products & Materials</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        sm={6}
        md={3}
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={warrantyIcon} alt="warranty-img" />
        <Box marginLeft={2}>
          <Typography variant="h6" fontWeight="bold">
            Warranty
          </Typography>
          <Typography variant="body2">Top Products & Materials</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        sm={6}
        md={3}
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={supportIcon} alt="support-img" />
        <Box marginLeft={2}>
          <Typography variant="h6" fontWeight="bold">
            Support
          </Typography>
          <Typography variant="body2">Top Products & Materials</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
