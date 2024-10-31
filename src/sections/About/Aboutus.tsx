import { Grid, Typography, Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import visionImg from "../../../public/assets/vision-icon.png";

export default function AboutUs() {
  return (
    <Grid container sx={{ mx: 12, width: "80%", marginBottom: { xs: 10} }}>
     
      <Grid item xs={12} sx={{ mb: 5, mt: 40 }}>
        <Typography variant="h4" sx={{ color: "#EE484A" }}>
          ABOUT US
        </Typography>
      </Grid>

   
      <Grid item xs={12} sx={{ display: "flex", gap: 20 }}>
        <Typography
          variant="h3"
          sx={{ color: "#3D628C", fontWeight: "bold", width: "50%" }}
        >
          Lorem ipsum dolor sit amet consectetur. Non donec erat <br /> fermentum donec
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#616161", fontSize: "1.25rem", width: "50%" }}
        >
          Lorem ipsum dolor sit amet consectetur. Sit arcu elit enim lorem at venenatis ipsum. Dolor nunc ultrices in
          accumsan massa mattis urna volutpat ac. Dui nisl consequat id aliquam. Accumsan enim sed fermentum neque.
          Feugiat montes amet dapibus in mauris eget scelerisque tincidunt. Rutrum et odio mi vestibulum eros euismod
          morbi. Risus lobortis non tellus mi massa. Arcu pulvinar convallis.
        </Typography>
      </Grid>

      {/* Vision Cards Section */}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10, // Corrected `gap` property
          mt: 5,
          marginTop: 10
        }}
      >
        <Card variant="outlined" sx={{ borderColor: "#D8D8D8", p: 3, width: "50%" }}>
          <CardContent>
            <Image src={visionImg} alt="vision icon" width={50} height={50} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Our Vision
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur. Egestas blandit pellentesque fermentum quis eget vehicula eleifend
              eleifend orci. Faucibus sed elementum suspendisse felis lacus. In lectus vitae enim pulvinar sed vulputate.
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ borderColor: "#D8D8D8", p: 3, width: "50%" }}>
          <CardContent>
            <Image src={visionImg} alt="vision icon" width={50} height={50} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Our Vision
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur. Egestas blandit pellentesque fermentum quis eget vehicula eleifend
              eleifend orci. Faucibus sed elementum suspendisse felis lacus. In lectus vitae enim pulvinar sed vulputate.
              Ornare sit ridiculus sed massa et ut.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid container spacing={20} sx={{ mb: 5, display: "flex", justifyContent: "center" }}></Grid>
    </Grid>
  );
}
