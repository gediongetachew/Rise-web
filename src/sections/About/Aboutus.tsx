import { Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import visionImg from "../../../public/assets/vision-icon.png";

export default function AboutUs() {
  return (
    <Grid
      container
      sx={{
        mx: { xs: 4, md: 12 },
        pr: { xs: 2, md: 15 },
        width: "100%",
        mb: { xs: 10, md: 15 },
      }}
    >
      <Grid item xs={12} sx={{ mb: 5, mt: { xs: 10, md: 40 } }}>
        <Typography variant="h5" sx={{ color: "#EE484A" }}>
          ABOUT US
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          gap: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#3D628C",
            fontWeight: { xs: "20%", sm: "70%" },
            width: { xs: "80%", md: "50%" },
            fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem", lg: "3rem" }
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Non donec erat <br />{" "}
          fermentum donec
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#616161",
            fontSize: "1.25rem",
            width: { xs: "95%", md: "50%" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Sit arcu elit enim lorem at
          venenatis ipsum. Dolor nunc ultrices in accumsan massa mattis urna
          volutpat ac. Dui nisl consequat id aliquam. Accumsan enim sed
          fermentum neque. Feugiat montes amet dapibus in mauris eget
          scelerisque tincidunt. Rutrum et odio mi vestibulum eros euismod
          morbi. Risus lobortis non tellus mi massa. Arcu pulvinar convallis.
        </Typography>
      </Grid>

      {/* Vision Cards Section */}
      <Grid
        item
        xs={11}

        container
        spacing={3}
        sx={{
          mt: { xs: 5, md: 10 },
          alignItems: 'center',
          justifyContent: 'center'
          
        }}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Card variant="outlined" sx={{ borderColor: "#D8D8D8", p: 3 }}>
            <CardContent>
              <Image src={visionImg} alt="vision icon" width={50} height={50} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Our Vision
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, fontSize: "1rem", width: { xs: "100%" } }}
              >
                Lorem ipsum dolor sit amet consectetur. Egestas blandit
                pellentesque fermentum quis eget vehicula eleifend eleifend
                orci. Faucibus sed elementum suspendisse felis lacus. In lectus
                vitae enim pulvinar sed vulputate.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <Card variant="outlined" sx={{ borderColor: "#D8D8D8", p: 3 }}>
            <CardContent>
              <Image src={visionImg} alt="vision icon" width={50} height={50} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Our Vision
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur. Egestas blandit
                pellentesque fermentum quis eget vehicula eleifend eleifend
                orci. Faucibus sed elementum suspendisse felis lacus. In lectus
                vitae enim pulvinar sed vulputate. Ornare sit ridiculus sed
                massa et ut.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
