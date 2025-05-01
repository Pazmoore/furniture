"use client";
import { furnitureproductsdata } from "@/components/products/furniture/furnitureProducts";
import SingleProduct from "@/components/products/productUtilities/singleProduct/SingleProduct";
import ProductCard from "@/components/utilities/product/ProductCard";
import { FurnitureInterface } from "@/interfaces/furnitures/Furniture";
import React, { useEffect, useState } from "react";

const FurnitureProducts = ({ params }: { params: { q: number } }) => {
  const [selectedBed, setSelectedBed] = useState<FurnitureInterface>();

  console.log({ params });

  useEffect(() => {
    const selected = furnitureproductsdata.filter(
      (data) => data.id === Number(params.q)
    );
    setSelectedBed(selected[0]);
  }, [params.q]);

  const filteredBeds = furnitureproductsdata.filter(
    (data) => data.id !== selectedBed?.id
  );

  return (
    <div>
      <SingleProduct
        selectedProduct={selectedBed}
        rootSection={"Furniture"}
        rootSectionUrl={"/furniture"}
      />
      <div className="contain products">
        {filteredBeds.slice(0, 8).map((item) => (
          <ProductCard key={item.id} item={item} basePath={"/furniture"} />
        ))}
      </div>
    </div>
  );
};

export default FurnitureProducts;
