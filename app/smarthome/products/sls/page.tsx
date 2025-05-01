"use client";
import AllProducts from "@/components/products/AllProducts/AllProducts";
import { smartHomeproductsdata } from "@/windows/smartHome/smarthomeProduct";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const filteredProducts = smartHomeproductsdata.filter(
    (product) => product.subCategory === "Smart Lighting System"
  );

  return (
    <div>
      <AllProducts
        productsData={filteredProducts}
        showLastBreadcrumb={false}
        rootBreadCrumb={"Smart Home"}
        lastBreadCrumb={"Smart Lighting System"}
        rootUrl="/smarthome"
        rootPath={"sls"}
      />
    </div>
  );
};

export default Page;
