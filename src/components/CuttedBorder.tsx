import { Grid, Typography } from "@mui/material";
import React from "react";
import medical from "../../public/assets/medical.png";

const CuttedBorder = () => {
  return (
    <Grid
      container
      sx={{
        width: "400px",
        borderRadius: 3,
        m: 4,
        backgroundImage: `url(/assets/banner.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item xs={12}>
        <Grid container sx={{ display: "flex" }}>
          <Grid
            item
            xs={8}
            p={2}
            sx={{
              position: "relative",
              background: "linear-gradient(30deg, #0000, #0000, #0000, #0000,#0000,#0000,  #fff)",
              borderTopRightRadius: 10,
              
"&::after": {
    content: '""', 
    width: 40,
    height: 40,
    backgroundColor: "#aea",
    position: 'absolute',
    top:0,
    right:0 
}
            }}
          >
            <Typography variant="body1">Section 1</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            p={2}
            sx={{
              backgroundColor: "#fff",
              borderBottomLeftRadius: 20,
              position: "relative",
            }}
          >
            <Typography variant="body1">Section 2</Typography>
          </Grid>
        </Grid>

        <Grid container p={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Main Section</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CuttedBorder;
