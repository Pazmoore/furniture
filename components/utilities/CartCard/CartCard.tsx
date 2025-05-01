import React, { useState } from "react";
import Image from "next/image";
import styles from "./cartCard.module.scss";
import { Product } from "@/interfaces/product/Product";
import StarIcon from "@mui/icons-material/Star";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlineTruck } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { removefromcart } from "@/redux/slicers/cartSlicer";
import { Alert, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CartCard = ({ product }: { product: Product }) => {
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    //To call addToCart reducer
    dispatch(removefromcart(product.id));
    setAlert(true);
  };

  return (
    <>
      <div className={styles.CartCard}>
        <div className={styles.cartCard_details}>
          <Image src={product.product} alt="product" width={210} height={245} />
          <div className={styles.CartCard__info}>
            <h3>{product.name}</h3>
            <h4>High bed frame, black-brown,140x200cm</h4>
            <h4>
              Color: <span>White</span>
            </h4>
            <h4>
              Dimension: <span>160 X 200cm</span>
            </h4>
            <div className={styles.cartCard_remove}>
              <span className={styles.stars}>
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />({product.rating})
              </span>
              <FaRegTrashCan
                style={{ fontSize: "1.25rem" }}
                onClick={handleRemoveFromCart}
              />
            </div>
          </div>
        </div>
        <p className={styles.cartCard_delivery}>
          <HiOutlineTruck style={{ fontSize: "1.25rem" }} />
          Estimated Delivery: June 5th - June 10th
        </p>
      </div>

      {alert && (
        <Stack
          sx={{ width: "100%" }}
          className={styles.alert}
          onClick={() => setAlert(false)}
        >
          <Alert
            iconMapping={{
              success: <CheckCircleOutlineIcon fontSize="inherit" />,
            }}
          >
            Item successfully removed from Cart
          </Alert>
        </Stack>
      )}
    </>
  );
};

export default CartCard;
