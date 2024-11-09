import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import aboutMisson from "../../data/aboutMission";

export default function TestimonialCard() {
  return (
    <Grid
      container
      sx={{
        mx: { xs: 2, md: 12 },
        pr: { xs: 2, md: 15 },
        width: "100%",
        mb: { xs: 10, md: 15 },
      }}
    >
      <Grid item xs={12} sx={{ mb: 2, mt: { xs: 19, sm: 25, md: 40 } }}>
        <Typography
          variant="h5"
          sx={{
            color: "#EE484A",
            fontSize: { xs: 15, sm: 20, md: 25, lg: 25 },
          }}
        >
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
          gap: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#3D628C",
            fontWeight: { xs: "20%", sm: "70%" },
            width: { xs: "99%" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Non donec erat fermentum donec
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#616161",

            width: { xs: "99%" },
            fontSize: { xs: ".8rem", sm: "1.3rem", md: "1.5rem", lg: "1.5rem" },
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

      <Grid item xs={12} sx={{ marginTop: { xs: 10, sx: 0, md: 10 } }}>
        <Grid
          container
          spacing={2}
          sx={{
            gap: "55px",
            display: "flex",
            flexWrap: "wrap",

            whiteSpace: "nowrap",
            alignItems: "flex-end",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {aboutMisson.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={5.8}
              key={index}
              sx={{
                height: { xs: "260px", sm: "360px", md: "360px" },
                width: { xs: "100%", sm: "360px", md: "360px" },
                flexShrink: 0,
                backgroundColor: "white",
                borderRadius: "20px",
                borderLeft: "1px solid rgba(0,0,0,0.1)",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                position: "relative",
                overflow: "hidden",
                transition: "width 0.3s ease",
              }}
            >
              {/* Cutout on the top right */}
              <Grid
                xs={12}
                sm={6}
                md={6}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "150px",
                  height: "32px",
                  borderBottomLeftRadius: "10px",
                  borderLeft: "1px solid rgba(0,0,0,0.1)",
                  zIndex: 1,
                }}
              />

              <Grid
                sx={{
                  position: "absolute",
                  top: "30px", // Position it right below the cutout
                  right: 0,
                  width: "146px", // Match the width of the cutout
                  height: "90%", // Adjust the height as desired
                  borderTop: "1px solid rgba(0,0,0,0.1)", // Top border
                  borderRight: "1px solid rgba(0,0,0,0.1)", // Right border
                  backgroundColor: "white",
                  borderTopRightRadius: "10px", // Only top right corner rounded
                  zIndex: 1, // Keep zIndex lower than the image
                }}
              />

              {/* Top box next to the cutout */}
              <Grid
                sx={{
                  position: "absolute",
                  top: 0,
                  right: "150px",
                  height: "32px",
                  width: "calc(100% - 150px)",
                  backgroundColor: "white",
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  zIndex: 2,
                }}
              />

              <Grid
                sx={{
                  position: "absolute",
                  top: "30px", // Position it right below the cutout
                  right: 0,
                  width: "146px", // Match the width of the cutout
                  height: "1px", // Adjust the height as desired
                  borderTop: "1px solid rgba(0,0,0,0.1)", // Top border
                  borderRight: "1px solid rgba(0,0,0,0.1)", // Right border
                  backgroundColor: "white",
                  borderTopRightRadius: "10px", // Only top right corner rounded
                  zIndex: 1, // Keep zIndex lower than the image
                }}
              />

              {/* Card Content */}
              <Grid
                container
                item
                xs={12}
                p={3}
                sx={{
                  position: "relative",
                  zIndex: 2,
                  marginTop: 0,
                }}
              >
                <Grid item xs={12}>
                  {/* Icon on top of the text */}
                  <Box
                    sx={{
                      width: { xs: "40px", sm: "50px", md: "60px" },
                      height: { xs: "30px", sm: "50px", md: "60px" },
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.icon} // Use the imported icon
                      alt="Icon"
                      width={60} // Set a width for the icon
                      height={24} // Set a height for the icon
                      style={{ marginRight: "8px", marginBottom: 4 }} // Add space between icon and text
                    />
                  </Box>

                  <Typography variant="h5" color="textPrimary" sx={{marginTop: {xs:4}}}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    marginTop={3}
                    sx={{
                      width: "100%",
                      marginTop: 3,
                      whiteSpace: "wrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontSize: { xs: 10, sm: 15, md: 20 },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
