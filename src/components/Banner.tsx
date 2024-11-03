"use client";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Banner() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "relative",
        my: 10,
        width: '100%',
        height: {xs:"35vh",sm:"35vh", md: "50vh"},
        backgroundImage: `url('/assets/banner.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
      }}
    >
      <Grid
        item
        sx={{
          position: "absolute",
          bottom: { xs: "10%", sm: "0%", md: "5%" },
          left: { xs: "5%", sm: "0%", md: "0%" },
          width: { xs: "90%", sm: "80%", md: "60%" },
          zIndex: 10,
        }}
        xs={12}
        sm={8}
        md={6}
        lg={4}
      >
        <Box
          display={"flex "}
          sx={{
            padding: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            textAlign: "center",
            gap: 10,
          }}
        >
          <Box display={"flex flex-col"}>
            <Typography
              variant="h6"
              component="h1"
              color="white"
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "4rem" } }}
            >
              +71%
            </Typography>
            <Typography variant="h6" color="white">
              Top 5 Medical Equipment <br /> Imports
            </Typography>
          </Box>
          <Box display={"flex flex-col"}>
            <Typography
              variant="h6"
              component="h1"
              color="white"
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "4rem" } }}
            >
              +1.5K
            </Typography>
            <Typography variant="h6" color="white">
              Happy Customer
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* New Top Right Box */}
      <Grid
        item
        sx={{
          position: "absolute",
          paddingLeft: {xs:4, sm:10 , md:0},
          top: { xs: "0%", sm: "0%", md: "5%" },
          right: { xs: "0%", sm: "0%", md: "0%" },
          width: { xs: "90%", sm: "90%", md: "60%" },
          zIndex: 10,
        }}
        xs={12}
        sm={8}
        md={6}
        lg={4}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            padding: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            textAlign: "left",
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            color="white"
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            sx={{ fontSize:{xs: "1.7rem", sm: "1.5rem", md: "1.7rem"} }}
          >
            Happy Customer
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            color="white"
            gutterBottom
            sx={{ fontSize: { xs: "1.2rem", sm: "1.3rem", md: "2rem" } }}
          >
            Lorem ipsum dolor sit amet consectetur. Mauris mollis.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
