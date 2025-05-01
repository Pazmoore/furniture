"use client";
import SingleProduct from "@/components/products/productUtilities/singleProduct/SingleProduct";
import ProductCard from "@/components/utilities/product/ProductCard";
import { FurnitureInterface } from "@/interfaces/furnitures/Furniture";
import { automationProductsData } from "@/windows/automation/automationProducts";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { q: number } }) => {
  const [selectedProduct, setSelectedProduct] = useState<FurnitureInterface>();

  useEffect(() => {
    const selected = automationProductsData.filter(
      (data) => data.id === Number(params.q)
    );
    setSelectedProduct(selected[0]);
  }, [params.q]);

  const filteredBeds = automationProductsData.filter(
    (data) =>
      data.id !== selectedProduct?.id &&
      data.subCategory === "Automated Window Control"
  );

  return (
    <div>
      <SingleProduct
        selectedProduct={selectedProduct}
        rootSection={"Automation Setup Home"}
        rootSectionUrl={"/automation"}
      />
      <div className="contain products">
        {filteredBeds.slice(0, 8).map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            basePath={"/automation/products/awc"}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
