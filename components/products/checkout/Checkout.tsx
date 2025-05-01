"use client";
import React from "react";
import Image from "next/image";
import styles from "./checkout.module.scss";
import { HiOutlineTruck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Checkout = () => {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice =
    items && Array.isArray(items)
      ? items.reduce(
          (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
          0
        )
      : 0;

  return (
    <div className={`contain ${styles.checkout}`}>
      <h1 className={styles.checkout_head}>Checkout</h1>
      <div className={styles.checkout_container}>
        <div className={styles.checkout_container_one}>
          <div className={styles.checkout_address}>
            <h2 className={styles.checkout_heading}>Home Address</h2>
            <form className={styles.box}>
              <div className={styles.checkout_box}>
                <label htmlFor="username">Address</label>
                <input type="text" required />
              </div>
              <div className={styles.checkout_box}>
                <label htmlFor="username">City</label>
                <input type=" text" required />
              </div>
              <div className={styles.checkout_box}>
                <label htmlFor="username">Country</label>
                <input type="text" required />
              </div>
              <div className={styles.checkout_box}>
                <label htmlFor="username">Country Code</label>
                <input type="text" required />
              </div>
            </form>
          </div>
          <div className={styles.checkout_pay}>
            <h2>Select payment Method</h2>
            <div className={styles.pay}>
              <p>Card</p>
              <p>Paypal</p>
              <p>Bank Transfer</p>
              <p>Google Pay</p>
            </div>
            <form className={styles.pay_box}>
              <div className={styles.box} style={{width: "100%"}}>
                <label htmlFor="username">Card Number</label>
                <input type="text" required />
              </div>
              <div className={styles.check_out}>
                <div className={styles.box}>
                  <label htmlFor="username">Expiration</label>
                  <input type=" text" required />
                </div>
                <div className={styles.box}>
                  <label htmlFor="username">CVV</label>
                  <input type="text" required />
                </div>
              </div>
              <button>Confirm and Pay</button>
            </form>
          </div>
        </div>
        <div className={styles.checkout_container_two}>
          <div className={styles.checkout_heading_two}>
            <h2> {items.length} Products</h2>
            <h2 className={styles.edit}>
              <Link href={"/cart"}>Edit</Link>
            </h2>
          </div>
          <div className={styles.checkout_product}>
            <div className={styles.checkout_product_one}>
              {items.map((item: any) => (
                <div className={styles.product} key={item.id}>
                  <Image
                    width={200}
                    height={200}
                    src={item?.product}
                    alt="contact-img"
                    className={styles.img}
                  />
                  <div className={styles.product_info}>
                    <div className={styles.product_info_container}>
                      <h3 className={styles.product_head}>Black Wooden Bed</h3>
                      <h3 className={styles.product_head}>{item?.name}</h3>
                      <div className={styles.checkout_info}>
                        <p>Dimension</p>
                        <p>Color</p>
                      </div>
                      <div className={styles.checkout_info}>
                        <p>200cm</p>
                        <p>White</p>
                      </div>
                      <div className={styles.info}>
                        <HiOutlineTruck />
                        <p>Estimated Delivery&#58;</p>
                      </div>
                      <p>June 5th &ndash; June 10th </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div>
              <div className={styles.total}>
                <h4>Sub Total</h4>
                <p>${totalPrice}</p>
              </div>
              <div className={styles.total}>
                <h4>Delivery </h4>
                <p>$0</p>
              </div>
              <div className={styles.total}>
                <h4>Total</h4>
                <p>${totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
