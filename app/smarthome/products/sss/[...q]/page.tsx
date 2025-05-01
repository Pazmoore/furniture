"use client";
import SingleProduct from "@/components/products/productUtilities/singleProduct/SingleProduct";
import ProductCard from "@/components/utilities/product/ProductCard";
import { FurnitureInterface } from "@/interfaces/furnitures/Furniture";
import { smartHomeproductsdata } from "@/windows/smartHome/smarthomeProduct";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { q: number } }) => {
  const [selectedProduct, setSelectedProduct] = useState<FurnitureInterface>();

  useEffect(() => {
    const selected = smartHomeproductsdata.filter(
      (data) => data.id === Number(params.q)
    );
    setSelectedProduct(selected[0]);
  }, [params.q]);

  const filteredBeds = smartHomeproductsdata.filter(
    (data) =>
      data.id !== selectedProduct?.id &&
      data.subCategory === "Smart Security System"
  );

  return (
    <div>
      <SingleProduct
        selectedProduct={selectedProduct}
        rootSection={"Smart Home"}
        rootSectionUrl={"/smarthome"}
      />
      <div className="contain products">
        {filteredBeds.slice(0, 8).map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            basePath={"/smarthome/products/sss"}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
