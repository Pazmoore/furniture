"use client";
import AllProducts from "@/components/products/AllProducts/AllProducts";
import { automationProductsData } from "@/windows/automation/automationProducts";
import React from "react";

const page = () => {
  const filteredProducts = automationProductsData.filter(
    (product) => product.subCategory === "Smart Appliance Control"
  );

  return (
    <div>
      <AllProducts
        productsData={filteredProducts}
        showLastBreadcrumb={false}
        rootBreadCrumb={"Automation Setup Home"}
        lastBreadCrumb={"Smart Appliance Control"}
        rootUrl="/automation"
        rootPath={"sac"}
      />
    </div>
  );
};

export default page;
