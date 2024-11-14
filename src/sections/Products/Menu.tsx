"use client";
import React, { useState } from "react";
import {
  Grid,
  Button,
  Pagination,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import ProductCard from "../../components/poduct/ProductCard";
import productRecord from "@/data/productRecord";
import productMenu from "../../data/productMenu";

const ITEMS_PER_PAGE = 6;

const ProductList: React.FC = () => {
  const [active, setActive] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProducts = productRecord?.filter(
    (item) => active === "all" || item.type === active
  );

  const totalPages = Math.ceil(filteredProducts?.length / ITEMS_PER_PAGE);

  const currentProducts = filteredProducts?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleMenuButton = (type: string) => {
    setActive(type);
    setCurrentPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  if (!filteredProducts || filteredProducts.length === 0) {
    return <Typography>No products found.</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        paddingX: { xs: 2, sm: 4, md: 10 },
        mt: 10,
      }}
    >
      {/* Header and Filters */}
      <Grid item>
        <Typography
          variant="h6"
          color="red"
          gutterBottom
          sx={{ fontSize: { xs: 15, sm: 20, md: 25, lg: 25 } }}
        >
          PRODUCTS
        </Typography>
        <Typography
          variant="h3"
          color="#3D628C"
          gutterBottom
          fontWeight={"bold"}
          fontSize={{ xs: 25, md:30, lg:35 }}
        >
          Popular Products
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          marginTop: 4,

          marginRight: { xs: 0, sm: 120 },

          borderRadius: "25px",
          background: "#F7F7F7",
        }}
      >
        {productMenu.map((item) => (
          <Box
            key={item.id}
            borderRadius={20}
            sx={{
              background: "#F7F7F7",
              paddingY: { xs: 2, sm: 3, md: 4, lg: 3 },
              paddingX: { xs: 1, sm: 2, md: 2 },
            }}
          >
            <Button
              onClick={() => handleMenuButton(item.type)}
              startIcon={item.icon}
              sx={{
                px: { xs: 2, sm: 6 },
                py: 1,
                minWidth: { xs: 20 },
                fontSize: {
                  xs: ".6rem",
                  sm: ".9rem",
                  md: "1rem",
                  lg: "1rem",
                },
                borderRadius: 2,
                transition: "0.2s",
                backgroundColor: active === item.type ? "#3D628C" : "#F7F7F7",
                color: active === item.type ? "white" : "black",
              }}
            >
              {item.name}
            </Button>
          </Box>
        ))}
      </Grid>

      <Box
        sx={{
          flexGrow: 1,
          mt: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: { xs: "none", sm: "1000px" },
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ flexGrow: 1, flexBasis: 0, paddingX: { xs: 4 } }}
        >
          {currentProducts.map((item) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              key={item.id}
              sx={{ background: "#FBFBFB" }}
            >
              <ProductCard
                image={item.img}
                title={item.name}
                description={item.description}
                link={`/${item.name}`}
                sx={{ height: { xs: "200px", sm: "300px" } }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{ py: 10, mt: "auto", display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            sx={{
              // Style for all pagination items (numbers)
              "& .MuiPaginationItem-root": {
                backgroundColor: "lightgray",
                borderRadius: "20px",
                padding: "25px 20px", // Adjust border radius here
                "&:hover": {
                  backgroundColor: "darkgray",
                },
                "&.Mui-selected": {
                  backgroundColor: "#3D628C",
                  color: "white",
                },
              },
              // Style for the arrow buttons (previous/next)
              "& .MuiPaginationItem-previousNext": {
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
              },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductList;
