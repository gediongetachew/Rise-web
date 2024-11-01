'use client'
import { useState } from "react";
import Image from "next/image";
import { Grid, Typography, Button, Box, Card } from "@mui/material";
import medicalImg from "../../../public/assets/medical.png";
import automobile from "../../../public/assets/automobile.png";
import automobile2 from "../../../public/assets/automobile2.png";

export default function AboutUs() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cardStyle = (isExpanded: boolean) => ({
    width: isExpanded ? "100%" : "90%",
    height: "100%",
    borderRadius: "15px 15px 15px 60px", // Custom shape similar to the folder-tab
    transition: "width 0.5s ease",
    overflow: "hidden",
    cursor: "pointer",
  });

  return (
    <Grid container spacing={2} px={5} py={2} mb={5} height="500px">
      <Grid item xs={12}>
        <Typography variant="h6" color="error">
          ABOUT US
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          Lorem Ipsum Dolor Sit Amet <br /> Consec Tetur Attempor Eu <br />{" "}
          Fermentu Commodo
        </Typography>
      </Grid>

      <Grid item xs={4} container direction="column" alignItems="flex-end">
        <Typography color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet consectetur. Rhoncus <br /> gravida
          consequat feugiat consectetur. Adipiscing <br /> arcu sit auctor hac
          ornare tempus. Quis praesent.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 1,
            py: 1,
            px: 4,
            borderRadius: 5,
            borderColor: "grey.400",
            "&:hover": { backgroundColor: "grey.200" },
          }}
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={20}
              height={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17l9-9M7 7h9v9"
              />
            </svg>
          }
        >
          About Us
        </Button>
      </Grid>

      <Grid container item xs={12} spacing={2} height="65%">
        <Grid item xs={6}>
          <Card
            onClick={() => toggleExpand(0)}
            sx={cardStyle(expandedCard === 0)}
          >
            <Image
              src={medicalImg}
              alt="medical image"
              layout="fill"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              p={2}
              bgcolor="rgba(255, 255, 255, 0.7)"
              width="100%"
            >
              <Grid container justifyContent="space-between">
                <Grid item textAlign="center">
                  <Typography variant="h6" fontWeight="bold">
                    +71%
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    top 5 medical import
                  </Typography>
                </Grid>
                <Grid item textAlign="center">
                  <Typography variant="h6" fontWeight="bold">
                    +1.5K
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Happy Customer
                  </Typography>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Typography variant="h6" fontWeight="bold">
                  Medical Equipments
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur. Ornare leo eget aliquam
                  a ut. Enim cras commodo tortor faucibus venenatis vitae egestas
                  et nisi. Id nisl sed
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card
            onClick={() => toggleExpand(1)}
            sx={cardStyle(expandedCard === 1)}
          >
            <Image
              src={automobile}
              alt="automobile"
              layout="fill"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              p={2}
              bgcolor="rgba(255, 255, 255, 0.7)"
              width="100%"
            >
              <Typography variant="h6" fontWeight="bold">
                Automobile
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet consectetur. Ornare leo eget aliquam a
                ut. Enim cras commodo tortor viverra praesent sagittis turpis
                euismod.
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card
            onClick={() => toggleExpand(2)}
            sx={cardStyle(expandedCard === 2)}
          >
            <Image
              src={automobile2}
              alt="automobile"
              layout="fill"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              p={2}
              bgcolor="rgba(255, 255, 255, 0.7)"
              width="100%"
            >
              <Typography variant="h6" fontWeight="bold">
                Automobile
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet consectetur. Ornare leo eget aliquam a
                ut. Enim cras commodo tortor viverra praesent sagittis turpis
                euismod.
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
