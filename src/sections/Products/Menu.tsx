"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/poduct/ProductCard";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import productRecord from "@/data/productRecord";
import productMenu from "../../data/productMenu";

const ITEMS_PER_PAGE = 6;

const ProductList = () => {
  const [active, setActive] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  console.log("ProductMenu:", productMenu);
  console.log("Record:", productRecord);

  const filteredProducts = productRecord?.filter(
    (item) => active === "all" || item.type === active
  );

  const totalPages = Math.ceil(filteredProducts?.length / ITEMS_PER_PAGE);

  const currentProducts = filteredProducts?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleMenuButton = (type) => {
    setActive(type);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    console.log("Page Change:", value);
    setCurrentPage(value);
  };

  if (!filteredProducts || filteredProducts.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="container mx-auto flex flex-col h-[1050px]">
      <h1 className="text-2xl mb-4 text-[#EE484A]">PRODUCTS</h1>
      <h2 className="text-xl mb-4">Popular Products</h2>

      <div className="container flex space-x-3 mb-5">
        {productMenu.map((item) => (
          <div key={item.id} className="relative w-auto h-full">
            <Image
              className="absolute -top-3 left-1"
              src={item.icon}
              alt="menu-icon"
              width={30}
              height={30}
            />
            <button
              onClick={() => handleMenuButton(item.type)}
              className={`px-4 py-2 rounded-lg transition duration-200 ${
                active === item.type
                  ? "bg-[#3D628C] text-white"
                  : "bg-[#F7F7F7] text-black"
              }`}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>

     
      <div className="flex-grow container flex flex-wrap gap-6 h-[400px] overflow-hidden">
        <Grid container spacing={4}>
          {currentProducts.map((item) => (
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={item.id}>
              <ProductCard
                image={item.img}
                title={item.name}
                description={item.description}
                link={`/${item.name}`}
                sx={{}}
              />
            </Grid>
          ))}
        </Grid>
      </div>

     
      <Stack
        spacing={2}
        sx={{ alignItems: "center", marginTop: "auto" }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default ProductList;
