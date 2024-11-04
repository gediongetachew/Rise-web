import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import tropyIcon from "../../../public/assets/tropy.png";
import verifyIcon from "../../../public/assets/verify.png";
import warrantyIcon from "../../../public/assets/warranty.png";
import supportIcon from "../../../public/assets/support.png";

export default function Quality() {
  return (
    <Grid container sx={{ backgroundColor: "#F7F7F7" }}>
      <Grid item xs={12} sx={{ p: 4 }}>
        <Grid
          container
          spacing={6}
        sx={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}
        >
          {/* Each grid item */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            alignItems="center"
            justifyContent="center"
          >
            <Image src={tropyIcon} alt="tropy-img" />
            <Box>
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
            
            alignItems="center"
            justifyContent="center"
          >
            <Image src={verifyIcon} alt="verify-img" />
            <Box>
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
            
            alignItems="center"
            justifyContent="center"
          >
            <Image src={warrantyIcon} alt="warranty-img" />
            <Box>
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
            
            alignItems="center"
            justifyContent="center"
          >
            <Image src={supportIcon} alt="support-img" />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Support
              </Typography>
              <Typography variant="body2">Top Products & Materials</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
