"use client";
import SingleProduct from "@/components/products/productUtilities/singleProduct/SingleProduct";
import ProductCard from "@/components/utilities/product/ProductCard";
import { FurnitureInterface } from "@/interfaces/furnitures/Furniture";
import { livestoreProductsData } from "@/windows/livestore/livestoreproducts";
import React, { useEffect, useState } from "react";

const LiveStoreProducts = ({ params }: { params: { q: number } }) => {
  const [selectedBed, setSelectedBed] = useState<FurnitureInterface>();

  useEffect(() => {
    const selected = livestoreProductsData.filter(
      (data) => data.id === Number(params.q)
    );
    setSelectedBed(selected[0]);
  }, [params.q]);

  const filteredBeds = livestoreProductsData.filter(
    (data) => data.id !== selectedBed?.id
  );

  return (
    <div>
      <SingleProduct
        selectedProduct={selectedBed}
        rootSection={"LiveStore"}
        rootSectionUrl={"/livestore"}
      />
      <div className="contain products">
        {filteredBeds.slice(0, 8).map((item) => (
          <ProductCard key={item.id} item={item} basePath={"livestore"} />
        ))}
      </div>
    </div>
  );
};

export default LiveStoreProducts;
