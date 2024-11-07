import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import aboutMisson from "../../data/aboutMission";

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
            width: { xs: "80%", md: "40%" },
            fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Non donec erat fermentum donec
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#616161",
            fontSize: "1.25rem",
            width: { xs: "95%", md: "40%" },
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
      <Grid item xs={12} marginTop={4}>
        <Grid
          container
          sx={{
            display: "felx",
            alignContent: "center",
            justifyContent: "center",
            gap: 25,
          }}
        >
          {aboutMisson.map((item) => (
            <Grid item key={item.id}>
              <Grid
                container
                sx={{
                  width: "640px", // Expand width horizontally
                  height: "340px", // Keep the height fixed
                  backgroundColor: "white",
                  borderRadius: "20px",
                  borderLeft: "3px solid rgba(0,0,0,0.1)",
                  borderBottom: "3px solid rgba(0,0,0,0.1)",
                  position: "relative",
                  overflow: "hidden",
                  m: 4,
                  padding: 2,
                  transition: "width 0.3s ease",
                  elevation: 4, // Smooth transition for width change
                }}
                // Handle click to toggle expansion
              >
                {/* Cutout on the top right */}
                <Grid
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 0,
                    width: "150px", // Width of the cutout section
                    height: "23px", // Height of the cutout section
                    backgroundColor: "white",
                    borderBottomLeftRadius: "10px", // Rounded corner for the cutout section
                    borderLeft: "1px solid rgba(0,0,0,0.1)", // Border around the cutout
                    zIndex: 1, // Ensure cutout is on top
                  }}
                />

                {/* Top box next to the cutout */}
                <Grid
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: "150px", // Position it to the left of the cutout
                    width: "500px", // Match the width you want
                    height: "10px", // Height of the box
                    borderTop: "3px solid rgba(0,0,0,0.1)", // Top border only
                    backgroundColor: "white",
                    borderTopLeftRadius: "10px", // Rounded top left corner
                    borderTopRightRadius: "10px", // Rounded top right corner
                    zIndex: 1, // Keep zIndex lower than the image
                  }}
                />

                {/* Additional box under the cutout */}
                <Grid
                  sx={{
                    position: "absolute",
                    top: "30px", // Position it right below the cutout
                    right: 0,
                    width: "146px", // Match the width of the cutout
                    height: "306px", // Adjust the height as desired
                    borderTop: "1px solid rgba(0,0,0,0.1)", // Top border
                    borderRight: "3px solid rgba(0,0,0,0.1)", // Right border
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
                  <Grid item xs={12} >
                    {/* Icon on top of the text */}

                    <Image
                      src={item.icon} // Use the imported icon
                      alt="Icon"
                      width={60} // Set a width for the icon
                      height={24} // Set a height for the icon
                      style={{ marginRight: "8px", marginBottom: 4 }} // Add space between icon and text
                    />

                    <Typography variant="h5" color="textPrimary" marginTop={3}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      marginTop={3}
                      sx={{ width: "100%" }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
