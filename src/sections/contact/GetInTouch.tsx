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
import { useRouter } from "next/navigation";

export default function GetInTouch() {
  const router = useRouter();

  const emailObject = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [compose, setCompose] = useState(emailObject);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Email validation function
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompose({ ...compose, [name]: value });
    setError("");
  };

  // Check if the form is valid
  const isFormValid = () => {
    return (
      compose.name.trim() !== "" &&
      compose.subject.trim() !== "" &&
      compose.message.trim() !== "" &&
      validateEmail(compose.email)
    );
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(compose.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Check if all required fields are filled
    if (
      !compose.name.trim() ||
      !compose.subject.trim() ||
      !compose.message.trim()
    ) {
      setError("All fields are required");
      return;
    }

    // Display a success message
    setSuccessMessage("Your message has been sent successfully!");
    setCompose(emailObject);

    // Redirect to success page after 2 seconds
    setTimeout(() => {
      router.push("/success");
    }, 2000);
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
            layout="responsive"
            quality={100}
            priority
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
              fontSize: { xs: "2rem", sm: "4rem", md: "5rem", lg: "6rem" },
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
              color: "#00000",
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

          <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
            background: "#F7F7F7",
            flexDirection: "column",
            alignContent: "flex-center",
            height: "750px",
            marginTop: {xs:0,sm:10},
            paddingLeft: "40px",
            paddingRight: "40px",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 30, md:40 },
              color: "#EE484A",
              fontFamily: "Helvetica",
              marginTop: 2,
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 20, md:30},
              color: "#616161",
              fontFamily: "Roboto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Rhoncus gravida consequat
            feugiat consectetur.{" "}
          </Typography>

          <form onSubmit={handleSubmit} style={{ marginTop: 40 }}>
            <Grid container spacing={3}>
              {" "}
              {/* Add spacing here */}
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  value={compose.name}
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
                  value={compose.email}
                  onChange={handleChange}
                  required
                  variant="standard"
                  error={
                    !validateEmail(compose.email) && compose.email.length > 0
                  }
                  helperText={
                    !validateEmail(compose.email) && compose.email.length > 0
                      ? "Invalid email address"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  name="subject"
                  fullWidth
                  value={compose.subject}
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
                  value={compose.message}
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
                  type="submit"
                  endIcon={<ArrowOutwardIcon />}
                  disabled={!isFormValid()}
                  sx={{
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: "20px",
                    background: "#EE484A",
                    color: "white",
                    marginTop: 3,
                  }}
                >
                  Send Message
                </Button>
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography color="error">{error}</Typography>
                </Grid>
              )}
              {successMessage && (
                <Grid item xs={12}>
                  <Typography color="success.main">{successMessage}</Typography>
                </Grid>
              )}
            </Grid>
          </form>
        </Grid>

          {/* Details Section */}
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: {xs:5,md:20},
                marginTop: 4,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Helvetica",
                    textWrap: "nowrap",
                    fontSize: {xs:20,sm:25}
                  }}
                >
                  Call Center
                </Typography>
                <Typography
                   variant="subtitle2"
                  sx={{ color: "#616161", fontFamily: "Helvetica Light" }}
                 
                >
                  +25190001100
                </Typography>
                <Typography
                   variant="subtitle2"
                  sx={{ color: "#616161", fontFamily: "Helvetica Light" }}
                >
                  +25190001100
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontFamily: "Helvetica",fontSize: {xs:20,sm:25} }}
                >
                  Our Location
                </Typography>
                <Typography
                   variant="subtitle2"
                  sx={{ color: "#616161", fontFamily: "Helvetica Light" }}
                
                >
                  Cologne District Court HRB 101987 Address: Subbelrather
                  Strasse 15a 50823 Cologne, Germany
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", gap: {xs:5,md:20}, marginTop: {xs:5,sm:10} }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontFamily: "Helvetica",fontSize: {xs:20,sm:25} }}
                >
                  Email
                </Typography>
                <Typography  variant="subtitle2"
                  sx={{ color: "#616161", fontFamily: "Helvetica Light" }}>Contact@Rise.com</Typography>
                <Typography  variant="subtitle2"
                  sx={{ color: "#616161", fontFamily: "Helvetica Light" }}>Hello@Rise.Com</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontFamily: "Helvetica",fontSize: {xs:20,sm:25}}}
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
            background: "#F7F7F7",
            flexDirection: "column",
            alignContent: "flex-center",
            height: "750px",
            marginTop: 10,
            paddingLeft: "40px",
            paddingRight: "40px",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 40 },
              color: "#EE484A",
              fontFamily: "Helvetica",
              marginTop: 2,
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 30 },
              color: "#616161",
              fontFamily: "Roboto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Rhoncus gravida consequat
            feugiat consectetur.{" "}
          </Typography>

          <form onSubmit={handleSubmit} style={{ marginTop: 40 }}>
            <Grid container spacing={3}>
              {" "}
              {/* Add spacing here */}
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  value={compose.name}
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
                  value={compose.email}
                  onChange={handleChange}
                  required
                  variant="standard"
                  error={
                    !validateEmail(compose.email) && compose.email.length > 0
                  }
                  helperText={
                    !validateEmail(compose.email) && compose.email.length > 0
                      ? "Invalid email address"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  name="subject"
                  fullWidth
                  value={compose.subject}
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
                  value={compose.message}
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
                  type="submit"
                  endIcon={<ArrowOutwardIcon />}
                  disabled={!isFormValid()}
                  sx={{
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: "20px",
                    background: "#EE484A",
                    color: "white",
                    marginTop: 3,
                  }}
                >
                  Send Message
                </Button>
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography color="error">{error}</Typography>
                </Grid>
              )}
              {successMessage && (
                <Grid item xs={12}>
                  <Typography color="success.main">{successMessage}</Typography>
                </Grid>
              )}
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
