import { Card, Typography, Box, Grid, Button } from "@mui/material";
import Image from "next/image";

export default function CurvedCard() {
  return (
    <Grid
      container
      alignItems="start"
      justifyContent="end"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        paddingY: { xs: 5, md: 5 },
        paddingX: { xs: 2, sm: 4, md: 10 },
        zIndex: 1,
      }}
    >
      <Grid item xs={12} md={6}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            paddingTop: { xs: 5, sm: 5, md: 10, lg: 30 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                color: "#3D628C",
                alignContent: "left",
                fontWeight: { sx: 20 },
              }}
            >
              Bringing Innovation to Healthcare Your Trusted Partner in Medical
              Equipment
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant="subtitle1" sx={{ color: "#616161" }}>
              Lorem ipsum dolor sit amet consectetur. Mauris semper tristique
              elit tincidunt. Odio suspendisse hendrerit quis vel fermentum.
              Sit.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            marginTop={4}
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "start" },
              marginTop: { xs: 4, sm: 5, md: 4, lg: 10 },
            }}
          >
            <Button
              variant="contained"
              component="a"
              href="/product"
              sx={{
                color: "white",
                background: "#3D628C",
                paddingX: { xs: 5, md: 6 },
                paddingY: { xs: 0, sm: 2 },
                borderRadius: "25px",
                fontSize: { xs: 15, md: 20 },
              }}
            >
              Discover
            </Button>
            <Button
              variant="contained"
              component="a"
              href="/contact"
              sx={{
                color: "black",
                background: "white",
                borderRadius: "25px",
                border: "0.5px solid #9E9E9E",
                fontSize: { xs: 10, md: 20 },
                paddingX: { xs: 6, md: 3 },
                paddingY: { xs: 1, sm: 2, md: 1 },
              }}
            >
              Get In Touch
            </Button>
          </Grid>
          <Grid item xs={12} marginTop={8}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: { sm: "flex", md: "none" },
                justifyContent: { xs: "center", md: "flex-end" },
                marginTop: { xs: 1, md: 0 },
                zIndex: 8,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "100%" },
                  maxWidth: { xs: 400, md: 730 },
                  height: "auto",
                }}
              >
                <Image
                  src="/assets/hero.svg"
                  alt="hero-image"
                  width={730}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <Card
                  sx={{
                    position: "absolute",
                    bottom: { xs: "0%", md: "0%" }, // Adjust position if necessary
                    right: { xs: "0%", md: "0%" },
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    width: { xs: "42%", sm: "42%", md: "42%", lg: "42%" }, // Adjust for responsiveness
                    height: { xs: "30%", sm: "30%", md: "30%", lg: "30%" }, // Height proportional to the image
                    padding: 2,
                    borderRadius: "25px",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: {
                        xs: ".9rem",
                        sm: "1rem",
                        md: "2rem",
                        lg: "1rem",
                      },
                      marginBottom: { xs: 1 },
                    }}
                  >
                    235
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: {
                        xs: ".8rem",
                        sm: ".8rem",
                        md: "1.5rem",
                        lg: "2rem",
                      },
                      marginBottom: { xs: 1 },
                    }}
                  >
                    Loyal Customer
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "0.5rem",
                        sm: "0.6rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                    }}
                  >
                    Lorem Ipsum Dolor Sit Amet Conse Ctetur. Posuere
                    Pellentesque Habitasse Nulla Dui Non. Nisi Nibh Massa Sed
                    Consequat.
                  </Typography>
                </Card>
              </Box>
            </Grid>

            <Typography
              variant="subtitle2"
              sx={{
                color: "#9E9E9E",
                fontSize: { xs: 12, md: 16 },
                marginTop: { xs: 3, sx: 2, md: 5, lg: 25 },
              }}
            >
              Medical Equipment / Automobile / Cafe / <br />
              Coffee / Import / Export /
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: { xs: "center", md: "flex-end" },
          marginTop: { xs: 5, md: 0 },
          zIndex: 8,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "100%" },
            maxWidth: { xs: 400, md: 730 },
            height: "auto",
          }}
        >
          <Image
            src="/assets/hero.svg"
            alt="hero-image"
            width={730}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
          <Card
            sx={{
              position: "absolute",
              bottom: { xs: "0%", md: "0%" }, // Adjust position if necessary
              right: { xs: "0%", md: "0%" },
              backgroundColor: "#ff4d4d",
              color: "white",
              width: { xs: "42%", sm: "42%", md: "42%", lg: "42%" }, // Adjust for responsiveness
              height: { xs: "30%", sm: "30%", md: "30%", lg: "30%" }, // Height proportional to the image
              padding: 2,
              borderRadius: "25px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: ".9rem", sm: "1rem", md: "1.7rem", lg: "2rem", xl: '2.5rem' },
                marginBottom: { xs: 1 },
              }}
            >
              235
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: ".6rem",
                  sm: ".8rem",
                  md: "1rem",
                  lg: "1.4rem",
                  xl: "1.8rem"
                },
                marginBottom: { xs: 1 },
              }}
            >
              Loyal Customer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.6rem",
                  md: "0.6rem",
                  lg: ".9rem",
                  xl: '1.1rem'
                },
              }}
            >
              Lorem Ipsum Dolor Sit Amet Conse Ctetur. Posuere Pellentesque
              Habitasse Nulla Dui Non. Nisi Nibh Massa Sed Consequat.
            </Typography>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
