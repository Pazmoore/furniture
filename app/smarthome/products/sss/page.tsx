"use client";
import AllProducts from "@/components/products/AllProducts/AllProducts";
import { smartHomeproductsdata } from "@/windows/smartHome/smarthomeProduct";
import React from "react";

const page = () => {
  const filteredProducts = smartHomeproductsdata.filter(
    (product) => product.subCategory === "Smart Security System"
  );
  return (
    <div>
      <AllProducts
        productsData={filteredProducts}
        showLastBreadcrumb={false}
        rootBreadCrumb={"Smart Home"}
        lastBreadCrumb={"Smart Security System"}
        rootUrl="/smarthome"
        rootPath={"sss"}
      />
    </div>
  );
};

export default page;
