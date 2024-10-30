"use client";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowOutWardIcon from "@mui/icons-material/ArrowOutward";
import { useState } from "react";
export default function GetInTouch() {
  const Email = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [email, setEmail] = useState(Email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [email.name]: value });
  };
  return (
    <Grid container spacing={2} padding={15}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
      </Grid>

      <Grid container padding={5} spacing={5}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#EE484A", marginBottom: 3 }}
          >
            Get In Touch /
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#000000",
              marginBottom: 3,
              fontSize: "65px",
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#616161", marginBottom: 7 }}
          >
            Rhoncus gravida consequat feugiat consectetur. Adipiscing arcu sit
            auctor hac ornare tempus.
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{ display: "flex", flexDiection: "column", padding: 4 }}
          >
            <Grid item sx={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginBottom: 6.5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  Call Center
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#616161" }}>
                  +25190001100
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#616161" }}>
                  +25190001100
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginBottom: 7.5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Our Location
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#616161" }}>
                  Cologne District Court HRB 101987 Address: Subbelrather
                  Strasse 15a 50823 Cologne, Germany
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={{ display: "flex", gap: 18 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#616161" }}>
                  Contact@Rise.com
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#616161" }}>
                  Hello@Rise.Com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Social Media
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton>
                    {" "}
                    <LinkedInIcon sx={{ color: "#EE484A" }} />
                  </IconButton>
                  <IconButton>
                    {" "}
                    <TwitterIcon sx={{ color: "#EE484A" }} />
                  </IconButton>
                  <IconButton>
                    {" "}
                    <InstagramIcon sx={{ color: "#EE484A" }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            marginTop:5
          }}
        >
          <form
            style={{
              width: "100%",
              maxWidth: "500px",
              background: "#F7F7F7",
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 20,
              paddingBottom: 40,
              borderRadius: "20px",
            }}
          >
            <Grid container spacing={2} sx={{marginTop:2}}>
              <Box sx={{ paddingLeft: 1, paddingTop: 3 }}>
                <Typography variant="h5" sx={{ color: "#EE484A" }}>
                  Get In Touch
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#616161" }}>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus gravida
                  consequat feugiat consectetur.
                </Typography>
              </Box>

              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  value={email.name}
                  onChange={handleChange}
                  required
                  variant="standard"
                  multiline
                  rows={1}
                  sx={{
                    "& .MuiInput.root:before": {
                      borderBottom: "2px solid #616161",
                    },
                    "& .MuiInput.root:hover:before": {
                      borderBottom: "2px solid  #EE484A",
                    },
                    "& .MuiInput:after": { borderBottom: "2px solid #EE484A" },
                    "&:hover": { bgcolor: "#F7F7F7" },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  value={email.email}
                  onChange={handleChange}
                  required
                  variant="standard"
                  multiline
                  rows={1}
                  sx={{
                    "& .MuiInput.root:before": {
                      borderBottom: "2px solid #616161",
                    },
                    "& .MuiInput.root:hover:before": {
                      borderBottom: "2px solid  #EE484A",
                    },
                    "& .MuiInput:after": { borderBottom: "2px solid #EE484A" },
                    "&:hover": { bgcolor: "#F7F7F7" },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  name="subject"
                  fullWidth
                  value={email.subject}
                  onChange={handleChange}
                  required
                  variant="standard"
                  multiline
                  rows={1}
                  sx={{
                    "& .MuiInput.root:before": {
                      borderBottom: "2px solid #616161",
                    },
                    "& .MuiInput.root:hover:before": {
                      borderBottom: "2px solid  #EE484A",
                    },
                    "& .MuiInput:after": { borderBottom: "2px solid #EE484A" },
                    "&:hover": { bgcolor: "#F7F7F7" },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  fullWidth
                  value={email.message}
                  onChange={handleChange}
                  required
                  variant="standard"
                  multiline
                  rows={3}
                  sx={{
                    "& .MuiInput.root:before": {
                      borderBottom: "2px solid #616161",
                    },
                    "& .MuiInput.root:hover:before": {
                      borderBottom: "2px solid  #EE484A",
                    },
                    "& .MuiInput:after": { borderBottom: "2px solid #EE484A" },
                    "&:hover": { bgcolor: "#F7F7F7" },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  endIcon={<ArrowOutWardIcon />}
                  sx={{
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: "20px",
                    color: "white",
                    background: "#EE484A",
                    marginTop: 4,
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
