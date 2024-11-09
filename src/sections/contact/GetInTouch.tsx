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

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              alignItems: "flex-end",
              height: "600px",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                maxWidth: "500px",
                background: "#F7F7F7",
                paddingTop: "80px",
                paddingBottom: "80px",
                paddingLeft: "40px",
                paddingRight: "40px",
                borderRadius: "20px",
              }}
            >
              <Grid container spacing={2}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  value={compose.name}
                  onChange={handleChange}
                  required
                  variant="standard"
                />
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
                <TextField
                  label="Subject"
                  name="subject"
                  fullWidth
                  value={compose.subject}
                  onChange={handleChange}
                  required
                  variant="standard"
                />
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
                    marginTop: 4,
                  }}
                >
                  Send Message
                </Button>
                {error && <Typography color="error">{error}</Typography>}
                {successMessage && (
                  <Typography color="success.main">{successMessage}</Typography>
                )}
              </Grid>
            </form>
          </Grid>

          {/* Details Section */}
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                marginTop: 4,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Call Center
                </Typography>
                <Typography variant="subtitle2">+25190001100</Typography>
                <Typography variant="subtitle2">+25190001100</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Our Location
                </Typography>
                <Typography variant="subtitle2">
                  Cologne District Court HRB 101987
                  <br /> Subbelrather Strasse 15a, 50823 Cologne, Germany
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", gap: 16 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Email
                </Typography>
                <Typography variant="subtitle2">Contact@Rise.com</Typography>
                <Typography variant="subtitle2">Hello@Rise.Com</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
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
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: "600px",
            
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              maxWidth: "500px",
              background: "#F7F7F7",
              paddingTop: "80px",
              paddingBottom: "80px",
              paddingLeft: "40px",
              paddingRight: "40px",
              borderRadius: "20px",
            }}
          >
            <Grid container spacing={2}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                value={compose.name}
                onChange={handleChange}
                required
                variant="standard"
              />
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
              <TextField
                label="Subject"
                name="subject"
                fullWidth
                value={compose.subject}
                onChange={handleChange}
                required
                variant="standard"
              />
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
                  marginTop: 4,
                }}
              >
                Send Message
              </Button>
              {error && <Typography color="error">{error}</Typography>}
              {successMessage && (
                <Typography color="success.main">{successMessage}</Typography>
              )}
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
