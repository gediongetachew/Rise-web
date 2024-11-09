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
      sx={{
        backgroundColor: "#F7F7F7",
        height: { xs: "350px", sm: "350px", md: "200px", xl: "200px" },
        marginTop: { xs: 5, sm:7, md:10 },
      }}
    >
      <Grid item xs={12} sx={{ px: {xs:5,sm:7, md:10}, py: 5 }}>
        <Grid
          container
          spacing={6}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
          }}
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
            <Box
              sx={{
                width: { xs: "40px", sm: "50px", md: "100%" },
                height: "auto",
              }}
            >
              <Image src={tropyIcon} alt="support-img" />
            </Box>
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
            <Box
              sx={{
                width: { xs: "40px", sm: "50px", md: "100px" },
                height: "auto",
              }}
            >
              <Image src={supportIcon} alt="support-img" />
            </Box>
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
            <Box
              sx={{
                width: { xs: "40px", sm: "50px", md: "70px" },
                height: "auto",
              }}
            >
              <Image src={warrantyIcon} alt="support-img" />
            </Box>
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
            <Box
              sx={{
                width: { xs: "40px", sm: "50px", md: "70px" },
                height: "auto",
              }}
            >
              <Image src={supportIcon} alt="support-img" />
            </Box>

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
