"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./livestore.module.scss";
import { FaPlay } from "react-icons/fa6";
import { livestoreProductsData } from "./livestoreproducts";
import ProductCard from "@/components/utilities/product/ProductCard";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Livestore = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section>
      {currentPage === 0 && (
        <div className={styles.maps}>
          <Image
            src={"/images/livestore/maps.jpg"}
            alt="map"
            width={1000}
            height={1000}
            style={{ width: "100%" }}
          />
          <span onClick={() => setCurrentPage(1)}>
            <FaPlay />
          </span>
        </div>
      )}

      {currentPage === 1 && (
        <div className="contain">
          <div className={styles.livestore}>
            <div className={styles.livestore_image}>
              <Image
                src={"/images/livestore/image1.jpg"}
                alt="play"
                width={650}
                height={945}
                className={styles.livestore_img}
              />
            </div>
            <div className={styles.livestore_products_container}>
              <div className={styles.livestore_header}>
                <h4>Live Products</h4>
                <PiShoppingCartSimpleLight style={{ fontSize: "1.5rem" }} />
              </div>
              <div className={styles.livestore_products}>
                {livestoreProductsData.map((item) => {
                  return (
                    <ProductCard
                      key={item.id}
                      item={item}
                      basePath={"livestore"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Livestore;
