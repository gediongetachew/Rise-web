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
        marginTop: { xs: 5, sm: 7, md: 10 },
      }}
    >
      <Grid
        container
        sx={{
          px: { xs: 5, sm: 7, md: 10 },
          py: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/** Each grid item */}
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Box>
            <Image src={tropyIcon} alt="tropy-img" width={70} height={70} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left", // Align text to the left
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily={'Helvetica'} sx={{fontSize: {xs:15,sm: 20,md:25}}}>
              High Quality
            </Typography>
            <Typography variant="body2" fontFamily={'Roboto'}>Top Products & Materials</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Box>
            <Image src={verifyIcon} alt="verify-img" width={70} height={70} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left", // Align text to the left
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily={'Helvetica'} sx={{fontSize: {xs:15,sm: 20,md:25}}}>
              Verified
            </Typography>
            <Typography variant="body2" fontFamily={'Roboto'}>Top Products & Materials</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Box>
            <Image
              src={warrantyIcon}
              alt="warranty-img"
              width={70} height={70}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left", // Align text to the left
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily={'Helvetica'} sx={{fontSize: {xs:15,sm: 20,md:25}}}>
              Warranty
            </Typography>
            <Typography variant="body2" fontFamily={'Roboto'}>Top Products & Materials</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Box>
            <Image src={supportIcon} alt="support-img" width={70} height={70} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left", // Align text to the left
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily={'Helvetica'} sx={{fontSize: {xs:15,sm: 20,md:25}}}>
              Support
            </Typography>
            <Typography variant="body2" fontFamily={'Roboto'}>Top Products & Materials</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
