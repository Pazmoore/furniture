"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./productCard.module.scss";
import { Product } from "@/interfaces/product/Product";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { LuShoppingCart } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToFavourite } from "@/redux/slicers/favouriteSlicer";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ProductCardProps {
  item: Product;
  basePath: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, basePath }) => {
  const navigate = useRouter();
  const handleViewDetails = () => navigate.push(`${basePath}/${item.id}`);
  const [like, setLike] = useState(false);

  const dispatch = useDispatch();
  const handleAddToLike = () => {
    //To call addToCart reducer
    dispatch(addToFavourite(item));
    setLike(true);
  };

  return (
    <div className={styles.product_card} onClick={handleViewDetails}>
      <div className={styles.product_image}>
        <Image src={item.product} alt="product" width={300} height={300} />
        <span onClick={handleAddToLike}>
          {like ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </span>
      </div>
      <div className={styles.product_details}>
        <h5 className={styles.product_name}>
          {item.name}
          <span>
            <StarIcon fontSize="small" />({item.rating})
          </span>
        </h5>
        <p>${item.price}</p>
        <LuShoppingCart />
      </div>
    </div>
  );
};

export default ProductCard;
