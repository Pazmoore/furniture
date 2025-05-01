"use client";
import AllProducts from "@/components/products/AllProducts/AllProducts";
import { smartHomeproductsdata } from "@/windows/smartHome/smarthomeProduct";
import React from "react";

const page = () => {
  const filteredProducts = smartHomeproductsdata.filter(
    (product) => product.subCategory === "Voice Assistants and Hub"
  );

  return (
    <div>
      <AllProducts
        productsData={filteredProducts}
        showLastBreadcrumb={false}
        rootBreadCrumb={"Smart Home"}
        lastBreadCrumb={"Voice Assistants and Hub"}
        rootUrl="/smarthome"
        rootPath={"vah"}
      />
    </div>
  );
};

export default page;
