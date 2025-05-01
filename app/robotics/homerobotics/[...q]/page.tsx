"use client";
import SingleProduct from "@/components/products/productUtilities/singleProduct/SingleProduct";
import ProductCard from "@/components/utilities/product/ProductCard";
import { FurnitureInterface } from "@/interfaces/furnitures/Furniture";
import { roboticProductsData } from "@/windows/robotics/roboticsProducts";

import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { q: number } }) => {
  const [selectedProduct, setSelectedProduct] = useState<FurnitureInterface>();

  useEffect(() => {
    const selected = roboticProductsData.filter(
      (data) => data.id === Number(params.q)
    );
    setSelectedProduct(selected[0]);
  }, [params.q]);

  const filteredBeds = roboticProductsData.filter(
    (data) =>
      data.id !== selectedProduct?.id && data.subCategory === "Home Robotics"
  );

  return (
    <div>
      <SingleProduct
        selectedProduct={selectedProduct}
        rootSection={"Robotics"}
        rootSectionUrl={"/robotics"}
      />
      <div className="contain products">
        {filteredBeds.slice(0, 8).map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            basePath={"/robotics/homerobotics"}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
