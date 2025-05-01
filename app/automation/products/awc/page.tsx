"use client";
import AllProducts from "@/components/products/AllProducts/AllProducts";
import { automationProductsData } from "@/windows/automation/automationProducts";
import React from "react";

const page = () => {
  const filteredProducts = automationProductsData.filter(
    (product) => product.subCategory === "Automated Window Control"
  );

  return (
    <div>
      <AllProducts
        productsData={filteredProducts}
        showLastBreadcrumb={false}
        rootBreadCrumb={"Automation Setup Home"}
        lastBreadCrumb={"Automated Window Control"}
        rootUrl="/automation"
        rootPath={"awc"}
      />
    </div>
  );
};

export default page;
