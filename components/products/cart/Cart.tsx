"use client";
import React, { useEffect, useState } from "react";
import styles from "./cart.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineTruck } from "react-icons/hi";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  removefromcart,
  increaseQty,
  decreaseQty,
} from "@/redux/slicers/cartSlicer";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import ProductCard from "@/components/utilities/product/ProductCard";
import { useRouter } from "next/navigation";
import { authObservable, showAuth } from "@/auth/isAuth/Auth";
import { furnitureproductsdata } from "../furniture/furnitureProducts";

const Cart = () => {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removefromcart(id));
  };

  const handleIncrementQty = (id: number) => {
    dispatch(increaseQty(id));
    console.log("item quantity increased");
  };

  const handleDecrementQty = (id: number) => {
    dispatch(decreaseQty(id));
    console.log("item quantity decreased");
  };

  const totalPrice =
    items && Array.isArray(items)
      ? items.reduce(
          (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
          0
        )
      : 0;

  const DimensionsOptions = [
    { value: "1", label: "160 X 200cm" },
    { value: "2", label: "180 X 260cm" },
    { value: "3", label: "200 X 300cm" },
  ];

  const ColorOptions = [
    { value: "1", label: "White" },
    { value: "2", label: "Black" },
    { value: "3", label: "Pink" },
  ];

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const authSubscription = authObservable.subscribe((auth) => {
      setIsAuthenticated(auth);
    });

    return () => authSubscription.unsubscribe();
  }, []);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      showAuth("register");
      console.log("signed up");
    } else {
      navigate.push("/checkout");
    }
  };

  return (
    <div className={`contain ${styles.cart}`}>
      <div className={styles.cartContainer}>
        {items?.length === 0 ? (
          <h2>No Items have been added to Cart</h2>
        ) : (
          <div className={styles.cartItems}>
            {items?.map((item: any) => (
              <div key={item.id} className={styles.cartItem}>
                {item?.product && (
                  <Image
                    src={item?.product}
                    alt="product"
                    width={220}
                    height={315}
                  />
                )}
                <div className={styles.cartItem_info}>
                  <div className={styles.cartItem_name}>
                    <h3>{item?.name}</h3>
                    <p>${item?.price}</p>
                  </div>
                  <p>Dimension</p>
                  <CustomSelect
                    options={DimensionsOptions}
                    onSelect={handleSelect}
                    defaultLabel="Choose a dimension"
                  />
                  <p>Color</p>
                  <CustomSelect
                    options={ColorOptions}
                    onSelect={handleSelect}
                    defaultLabel="Choose a color"
                  />
                  <div className={styles.increase}>
                    <button className={styles.add}>
                      <RemoveIcon
                        fontSize={"medium"}
                        onClick={() => handleDecrementQty(item.id)}
                      />
                      {item?.quantity}
                      <AddIcon
                        fontSize={"medium"}
                        onClick={() => handleIncrementQty(item.id)}
                      />
                    </button>
                    <FavoriteBorderOutlinedIcon />
                    <FaRegTrashCan
                      style={{ fontSize: "1.25rem" }}
                      onClick={() => handleRemoveFromCart(item.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.total}>
          <h2>Amount</h2>
          <div className={styles.amount}>
            <h3>Price:</h3>
            <span>${totalPrice}</span>
          </div>
          <div className={styles.delivery}>
            <h3>Delivery:</h3>
            <span>$0</span>
          </div>
          <div className={styles.amount}>
            <h3>Sub Total:</h3>
            <span>${totalPrice}</span>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>

      <div className={styles.bedAndSofa}>
        <div className={styles.products}>
          {furnitureproductsdata.slice(0, 8).map((bed) => (
            <ProductCard key={bed.id} item={bed} basePath={"furniture"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
