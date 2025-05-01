"use client";
import AllProducts from "@/components/products/AllProducts/AllProducts";
import { smartHomeproductsdata } from "@/windows/smartHome/smarthomeProduct";
import React from "react";

const page = () => {
  const filteredProducts = smartHomeproductsdata.filter(
    (product) => product.subCategory === "Smart thermostart & climate control"
  );

  return (
    <div>
      <AllProducts
        productsData={filteredProducts}
        showLastBreadcrumb={false}
        rootBreadCrumb={"Smart Home"}
        lastBreadCrumb={"Smart thermostart & climate control"}
        rootUrl="/smarthome"
        rootPath={"stcc"}
      />
    </div>
  );
};

export default page;
