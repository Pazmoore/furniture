"use client";
import React from "react";
import styles from "./layoutCart.module.scss";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import Link from "next/link";

const LayoutCart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  return (
    <div className={styles.layoutCart}>
      <div className={`contain ${styles.layoutCart_container}`}>
        <Link href={"/cart"} className={styles.flex}>
          <div className={styles.layoutCart_flex}>
            <BsCart2 style={{ fontSize: "1.75rem" }} />
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LayoutCart;
