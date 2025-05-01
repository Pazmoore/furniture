import React from "react";
import styles from "./houseProducts.module.scss";
import Search from "@/components/search/Search";
import ProductCard from "@/components/utilities/product/ProductCard";
import { householdproductsdata } from "./householdProducts";

const HouseProducts = () => {
  return (
    <div className={styles.household_products}>
      <h2 className="">House Product</h2>
      <div className={styles.search}>
        <div className="contain">
          <Search />
        </div>
      </div>
      <div className={`contain ${styles.house_products}`}>
        {householdproductsdata.map((item: any) => (
          <ProductCard key={item} item={item} basePath={"/"} />
        ))}
      </div>
    </div>
  );
};

export default HouseProducts;
