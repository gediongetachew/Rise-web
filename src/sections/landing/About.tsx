import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import aboutUsCardContent from "@/data/aboutUsCardContent";
import CuttedBorder from "../../components/CuttedBorder";

export default function About() {
  return (
    <Grid
      container
      sx={{ paddingY: { xs: 5, md: 5 }, paddingX: { xs: 3, sm: 3 }, marginTop: 10}}
    >
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ color: "#EE484A", fontSize: {xs:15,sm: 20, md:25,lg:25} }}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography variant="h3" sx={{ color: "#3D628C", fontSize: {xs:30, sm:40, md:50}, marginTop:3 }}>
          Lorem ipsum dolor sit amet consec tetur Attempor eu fermentu Commodo
          it amet consec tetur
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#616161", alignContent: "left" ,fontSize: {xs:15,sm: 20, md:25,lg:25},marginTop: 2}}
          >
            Lorem ipsum dolor sit amet consectetur. Rhoncus gravida consequat
            feugiat consectetur. Adipiscing arcu sit auctor hac ornare tempus.
            Quis praesent.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowOutward />}
            sx={{
              color: "black",
              background: "white",
              width: 170,
              height: 50,
              borderRadius: "20px",
              border: "solid 1px #9E9E9E",
              alignItems: "right",
            }}
          >
            About Us
          </Button>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            
            marginTop: 20
            
          },
        }}
      >
        {aboutUsCardContent.map((item) => (
          <Grid item xs={4} key={item.id}>
            <CuttedBorder
              title={item.title}
              text={item.text}
              img={item.img}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
