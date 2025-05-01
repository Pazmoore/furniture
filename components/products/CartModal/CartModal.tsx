import React from "react";
import styles from "./cartModal.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartCard from "@/components/utilities/CartCard/CartCard";

const CartModal = ({ closeModal }: { closeModal: () => void }) => {
  const items = useSelector((state: any) => state.cart.items);

  return (
    <div className={`contain ${styles.CartModal}`}>
      <h2> My Cart </h2>

      {items.length === 0 ? (
        <>
          <h2>No Item has been added to cart</h2>
        </>
      ) : (
        <>
          <div className={styles.cartItemsContainer}>
            {items.map((product: any) => {
              return (
                <>
                  <CartCard product={product} />
                </>
              );
            })}
          </div>
          <div className={styles.amount}>
            <h3>Total Amount</h3>
            <span>$400</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.continue} onClick={closeModal}>
              <Link href={"/cart"}>Continue</Link>
            </button>

            <button className={styles.checkout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
