"use client";
import React, { useState } from "react";
import { Grid, Button, Pagination, Stack, Typography, Box } from "@mui/material";
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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", px: 4, pt: 4 }}>
      {/* Header and Filters */}
      <Grid item>
        <Typography variant="h4" color="primary" gutterBottom>
          PRODUCTS
        </Typography>
        <Typography variant="h6" gutterBottom>
          Popular Products
        </Typography>
      </Grid>

      <Grid item container spacing={2}>
        {productMenu.map((item) => (
          <Grid item key={item.id}>
            <Button
              onClick={() => handleMenuButton(item.type)}
              startIcon={item.icon}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 2,
                transition: "0.2s",
                backgroundColor: active === item.type ? "#3D628C" : "#F7F7F7",
                color: active === item.type ? "white" : "black",
              }}
            >
              {item.name}
            </Button>
          </Grid>
        ))}
      </Grid>

      
      <Box
        sx={{
          flexGrow: 1,
          mt: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "1000px", 
        }}
      >
      
        <Grid container spacing={3} sx={{ flexGrow: 1, flexBasis: 0 }}>
          {currentProducts.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <ProductCard
                image={item.img}
                title={item.name}
                description={item.description}
                link={`/${item.name}`}
                sx={{ height: "320px" }} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>

     
      <Box sx={{ py: 2, mt: "auto", display: "flex", justifyContent: "center" }}>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductList;
