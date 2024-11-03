import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import successImg from "../../public/assets/success.png";
import React from "react";

export default function Success() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: 'center',
        gap: 5,
        marginTop: {xs:30}
      }}
    >
      <Grid item xs={12}>
        <Image src={successImg} alt="success image" />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3">Successfully Sent</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" sx={{ color: "#70778B", alignContent: 'center'}}>
          The user has been successfully registered but doesnot have <br />  the app.
          Please send an invitation link to their emailand phone <br />  via SMS for
          app download and access.
        </Typography>
      </Grid>
      <Button
        variant="contained"
        component="a"
        href="/product"
        sx={{
          color: "white",
          background: "#3D628C",
          paddingX: { xs: 6, md: 15 },
          paddingY: { xs: 1, sm: 2 },
          borderRadius: "25px",
          fontSize: { xs: 16, md: 20 },
        }}
      >
        Done
      </Button>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
