"use client";
import React, { useState } from "react";
import { furnitureproductsdata } from "./furnitureProducts";
import styles from "./furniture.module.scss";
import ProductCard from "@/components/utilities/product/ProductCard";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IoMenu } from "react-icons/io5";
import { FaSliders } from "react-icons/fa6";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import CartModal from "../CartModal/CartModal";

const Furniture = () => {
  const categories = [
    { name: "sofa", subcategories: [] },
    { name: "bed", subcategories: [] },
    { name: "table", subcategories: ["dinning table", "coffee table"] },
    { name: "storage", subcategories: [] },
    { name: "Outdoors furniture", subcategories: [] },
    { name: "Office furniture", subcategories: ["chair"] },
    { name: "Kids & Nursery", subcategories: [] },
    { name: "Customizable", subcategories: [] },
    { name: "Accent", subcategories: [] },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory("");
  };

  const filteredProducts = furnitureproductsdata.filter((product) => {
    if (selectedCategory && selectedSubCategory) {
      return (
        product.category === selectedCategory &&
        product.subCategory === selectedSubCategory
      );
    }
    if (selectedCategory) {
      return product.category === selectedCategory;
    }
    return true; // Return all products if no category is selected
  });

  const cartItems = useSelector((state: any) => state.cart.items);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className={`contain ${styles.furniture}`}>
        <div className={styles.header}>
          <div className={styles.home}>
            <span>Home</span>
            <IoIosArrowForward style={{ fontSize: "1rem" }} />
            <span>Furniture</span>
          </div>
          <span className={styles.home}>
            <FavoriteBorderOutlinedIcon />
            <div className={styles.cart} onClick={toggleModal}>
              <PiShoppingCartSimpleLight style={{ fontSize: "1.5rem" }} />
              <span>{cartItems.length}</span>
            </div>
            {/* <PiShoppingCartSimpleLight style={{ fontSize: "1.5rem" }} /> */}
            <button>
              Filter <FaSliders />
            </button>
          </span>
        </div>

        <div className={styles.categories_filters}>
          {categories.map((category) => (
            <div key={category.name} className={styles.selectedCategory}>
              <span
                onClick={() => {
                  handleCategoryChange(category.name);
                  setDropdown((prev) =>
                    selectedCategory === category.name ? !prev : true
                  );
                }}
                className={
                  selectedCategory === category.name
                    ? styles.active
                    : styles.inactive
                }
              >
                {selectedCategory === category.name && selectedSubCategory
                  ? selectedSubCategory
                  : category.name}{" "}
                <RiArrowDownSLine />
              </span>

              {/* Render subcategory dropdown if the category has subcategories */}
              {selectedCategory === category.name &&
                category.subcategories.length > 0 &&
                dropdown && (
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      margin: "8px 0",
                      position: "fixed",
                      backgroundColor: "#000",
                      border: "1px solid #fff",
                      borderRadius: "0.24rem",
                      zIndex: 1,
                    }}
                  >
                    <li
                      style={{
                        padding: "8px 4px",
                        borderBottom: "1px solid #fff",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedSubCategory("");
                        setDropdown(false);
                      }}
                    >
                      All {category.name}s
                    </li>

                    {category.subcategories.map((subcategory) => (
                      <li
                        key={subcategory}
                        style={{
                          padding: "8px 4px",
                          borderBottom: "1px solid #fff",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setSelectedSubCategory(subcategory);
                          setDropdown(false);
                        }}
                      >
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}
        </div>

        <div className={styles.bed_products}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} basePath={"furniture"} />
            ))
          ) : (
            <p>No products match the selected filter.</p>
          )}
        </div>
      </section>

      {showModal && <CartModal closeModal={closeModal} />}
    </>
  );
};

export default Furniture;
