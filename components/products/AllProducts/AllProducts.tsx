import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./allProducts.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from "@/components/utilities/product/ProductCard";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { FaSliders } from "react-icons/fa6";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import CartModal from "../CartModal/CartModal";

const AllProducts = ({
  productsData,
  showLastBreadcrumb,
  rootBreadCrumb,
  lastBreadCrumb,
  rootUrl,
  rootPath,
}: {
  productsData: any[];
  showLastBreadcrumb: boolean;
  rootBreadCrumb: string;
  lastBreadCrumb: string;
  rootUrl: string;
  rootPath: string;
}) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<string>("Price");
  const [showModal, setShowModal] = useState(false);

  const priceList = ["$100", "$200", "$300", "$400"];

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePriceFilter = (price: string) => {
    setSelectedPrice(price); // Update selected price
    const priceValue = Number(price.replace("$", ""));
    const filtered = productsData.filter(
      (product) => Number(product.price) === priceValue
    );
    setFilteredProducts(filtered); // Update filtered products
    setDropdownOpen(false); // Close dropdown
  };

  const cartItems = useSelector((state: any) => state.cart.items);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section style={{ position: "relative" }}>
      <div className="contain">
        <div className={styles.header}>
          <div className={styles.page}>
            <Link href={"/"}>
              <span>Home</span>
            </Link>
            <IoIosArrowForward style={{ fontSize: "1rem" }} />
            <span>
              <Link href={rootUrl}>{rootBreadCrumb}</Link>
            </span>
            <IoIosArrowForward style={{ fontSize: "1rem" }} />

            <span> {lastBreadCrumb} </span>
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

        <div className={styles.filters} ref={dropdownRef}>
          <span
            className={styles.dropdown}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {selectedPrice} <RiArrowDownSLine />
          </span>
          {dropdownOpen && (
            <ul className={styles.dropdown_menu}>
              {priceList.map((price) => (
                <li
                  key={price}
                  className={styles.dropdown_item}
                  onClick={() => handlePriceFilter(price)}
                >
                  {price}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Render Filtered Products */}
        <div className={styles.bed_products}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item: any) => (
              <ProductCard key={item.id} item={item} basePath={rootPath} />
            ))
          ) : (
            <p>No products match the selected price.</p>
          )}
        </div>
      </div>

      {showModal && <CartModal closeModal={closeModal} />}
    </section>
  );
};

export default AllProducts;
