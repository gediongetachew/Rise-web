"use client";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import contactImg from "../../../public/assets/contact.svg";

export default function GetInTouch() {
  const Email = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [email, setEmail] = useState(Email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 2, md: 15 }}
      marginTop={{ xs: 7, sm: 0 }}
    >
      {/* Contact Image */}
      <Grid item xs={12}>
        <Box position="relative">
          <Image
            src={contactImg}
            alt="contact-image"
            style={{ width: "100%", height: "auto" }}
          />
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              position: "absolute",
              fontWeight: "bold",
              color: "white",
              bottom: { xs: 20, md: 60 },
              left: { xs: 20, md: 60 },
              fontSize: { xs: 30, sm: 50, md: 70, lg: 90 },
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Grid>

      {/* Contact Information and Form */}
      <Grid container spacing={5} padding={{ xs: 2, md: 5 }}>
        {/* Contact Info Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: { xs: 5, md: 0 },
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#EE484A", mb: 3 }}>
            Get In Touch /
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#3D628C",
              mb: 3,
              fontSize: { xs: "30px", md: "65px" },
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#616161", mb: 7 }}>
            Rhoncus gravida consequat feugiat consectetur. Adipiscing arcu sit
            auctor hac ornare tempus.
          </Typography>
          {/* first get in touch section */}
          <Grid container sx={{ display: { xs: "block", md: "none" } }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "end",
              }}
            >
              <form
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  background: "#F7F7F7",
                  padding: "20px 40px",
                  borderRadius: "20px",
                }}
              >
                <Grid container spacing={2}>
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowOutwardIcon />}
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

          {/* Details Section */}
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                marginTop: 4,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "bold",
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
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                  Cologne District Court HRB 101987 <br /> Address: Subbelrather
                  Strasse 15a 50823 Cologne, Germany
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", gap: 5 }}>
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
                    <LinkedInIcon sx={{ color: "#EE484A" }} />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon sx={{ color: "#EE484A" }} />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon sx={{ color: "#EE484A" }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Form Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "end",
          }}
        >
          <form
            style={{
              width: "100%",
              maxWidth: "500px",
              background: "#F7F7F7",
              padding: "20px 40px",
              borderRadius: "20px",
            }}
          >
            <Grid container spacing={2}>
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component='a'
                  href='/success'
                  endIcon={<ArrowOutwardIcon />}
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
