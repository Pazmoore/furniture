"use client";
import AllProducts from "@/components/products/AllProducts/AllProducts";
import { roboticProductsData } from "@/windows/robotics/roboticsProducts";
import React from "react";

const page = () => {
  const filteredProducts = roboticProductsData.filter(
    (product) => product.subCategory === "Home Robotics"
  );
  return (
    <div>
      {" "}
      <AllProducts
        productsData={filteredProducts}
        showLastBreadcrumb={false}
        rootBreadCrumb={"Robotics"}
        lastBreadCrumb={"Home Robotics"}
        rootUrl="/robotics"
        rootPath={"/robotics/homerobotics"}
      />
    </div>
  );
};

export default page;
