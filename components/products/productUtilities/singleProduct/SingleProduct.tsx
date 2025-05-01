import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./singleProduct.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReviewCard from "../reviews/ReviewCard";
import ProductCard from "@/components/utilities/product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "@/redux/slicers/cartSlicer";
import { Alert, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  addToFavourite,
  removefromFavourite,
} from "@/redux/slicers/favouriteSlicer";
import { RootType } from "@/redux/store";

const SingleProduct = ({
  selectedProduct,
  rootSection,
  rootSectionUrl,
}: {
  selectedProduct: any;
  rootSection: string;
  rootSectionUrl: string;
}) => {
  const productInCart = useSelector((state: any) =>
    state.cart.items.find((item: any) => item.id === selectedProduct?.id)
  );

  console.log(productInCart);

  const [selectedColor, setSelectedColor] = useState<string>("White");
  const [openIndex, setOpenIndex] = useState(null);
  const [alert, setAlert] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showdesc, setShowDesc] = useState(true);
  const [showLike, setShowLike] = useState(false);

  const handleSelectWhite = () => setSelectedColor("White");
  const handleSelectBlack = () => setSelectedColor("Black");

  const handleToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    //To call addToCart reducer
    dispatch(addToCart(selectedProduct));
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const handleIncrementQty = () => {
    //To call addToCart reducer
    if (productInCart) {
      dispatch(increaseQty(selectedProduct.id));
      console.log("increase");
      setAlert(true);
    }
  };

  const handleDecrementQty = () => {
    //To call addToCart reducer
    if (productInCart && (productInCart?.quantity ?? 0) > 1) {
      dispatch(decreaseQty(selectedProduct.id));
      console.log("decrease");
      setAlert(true);
    }
  };
  console.log("selectedProduct", selectedProduct?.quantity);

  const DimensionsOptions = [
    { value: "1", label: "160 X 200cm" },
    { value: "2", label: "180 X 260cm" },
    { value: "3", label: "200 X 300cm" },
  ];

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  const likeItems = useSelector((state: any) => state.favourite.items);

  // Check if the product is already in favorites
  const isFavorite =
    selectedProduct &&
    likeItems.some((item: any) => item.id === selectedProduct.id);

  console.log(isFavorite);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removefromFavourite(selectedProduct.id));
    } else {
      dispatch(addToFavourite(selectedProduct.id));
    }
  };

  useEffect(() => {
    if (
      selectedProduct?.category === "bed" ||
      selectedProduct?.category === "sofa"
    ) {
      setShowText(true);
      setShowDesc(false);
    } else {
      setShowText(false);
      setShowDesc(true);
    }
  }, [selectedProduct?.category]);

  return (
    <>
      <div className={`contain ${styles.singleProduct}`}>
        <div className={styles.page}>
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <IoIosArrowForward style={{ fontSize: "1rem" }} />
          <Link href={rootSectionUrl}>
            <span> {rootSection} </span>
          </Link>

          <IoIosArrowForward style={{ fontSize: "1rem" }} />

          <span>
            {selectedProduct?.subCategory === "Null"
              ? selectedProduct?.subCategory
              : selectedProduct?.category}
          </span>
          <IoIosArrowForward style={{ fontSize: "1rem" }} />
          <span>Description</span>
        </div>

        <div className={styles.bedProduct_header}>
          <Image
            src={selectedProduct?.product}
            alt="bed"
            width={630}
            height={600}
          />
          <div className={styles.bedProduct_header_info}>
            <h1>{selectedProduct?.name}</h1>
            {showText && <h2>High bed frame, black-brown,140x200cm</h2>}
            <p className={styles.bedProduct_price}>
              {" "}
              ${selectedProduct?.price}
            </p>
            <span className={styles.stars}>
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />({selectedProduct?.rating})
            </span>

            <p className={styles.bedProduct_delivery}>
              <Image src="/images/truck.svg" alt="2" width={20} height={20} />
              Estimated Delivery: June 5th - June 10th
            </p>
            <div className={styles.bedProduct_colors}>
              <p className={styles.color}>color</p>
              <p className="">
                {selectedColor === "White" ? "White" : "Black"}
              </p>
              <div className={styles.bedProduct_color}>
                <span className="" onClick={handleSelectWhite}></span>
                <span
                  className={
                    selectedColor != "White" ? styles.black : styles.textBlack
                  }
                  onClick={handleSelectBlack}
                ></span>
              </div>
            </div>
            <div className={styles.bedProduct_size}>
              <p>Size</p>
              <CustomSelect
                options={DimensionsOptions}
                onSelect={handleSelect}
                defaultLabel="Choose a dimension"
              />
            </div>
            {showdesc && (
              <p className={styles.bedProduct_desc}>
                This bed includes storage space - and it doesn&apos;t take up a
                single square centimeter of floor space. The bed can stand
                freely in the room or with the headboard against the wall.
              </p>
            )}

            <div className={styles.add}>
              <p>Add</p>
              <span className={styles.ctrl_btns}>
                <span style={{ cursor: "pointer" }}>
                  <RemoveIcon
                    fontSize={"medium"}
                    onClick={handleDecrementQty}
                  />
                </span>

                <span>{productInCart?.quantity || 0}</span>
                <span style={{ cursor: "pointer" }}>
                  <AddIcon fontSize={"medium"} onClick={handleIncrementQty} />
                </span>
              </span>
            </div>

            <div className={styles.bedProduct_cart}>
              <button className={styles.add_cart} onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button
                className={styles.fav_btn}
                onClick={handleFavoriteToggle}
                aria-pressed={isFavorite}
              >
                {isFavorite ? (
                  <FavoriteIcon style={{ fontSize: "2rem", color: "red" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon style={{ fontSize: "2rem" }} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bedProduct_details}>
          <div
            className={styles.details_header}
            onClick={() => handleToggle(0)}
          >
            <div className={styles.details_title}>
              <p className="">Product information</p>
              {openIndex === 0 ? (
                <RemoveIcon
                  fontSize="medium"
                  style={{ transition: "all 0.3s ease-in-out" }}
                />
              ) : (
                <AddIcon
                  fontSize="medium"
                  style={{ transition: "all 0.3s ease-in-out" }}
                />
              )}
            </div>
            {openIndex === 0 && (
              <div className={styles.details_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </div>
            )}
          </div>
          <div
            className={styles.details_header}
            onClick={() => handleToggle(1)}
          >
            <div className={styles.details_title}>
              <p className="">Dimension</p>
              {openIndex === 1 ? (
                <RemoveIcon
                  fontSize="medium"
                  style={{ transition: "all 0.3s ease-in-out" }}
                />
              ) : (
                <AddIcon
                  fontSize="medium"
                  style={{ transition: "all 0.3s ease-in-out" }}
                />
              )}
            </div>
            {openIndex === 1 && (
              <div className={styles.details_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            )}
          </div>
        </div>

        <ReviewCard />
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
            Item has been successfully added to Cart
          </Alert>
        </Stack>
      )}
    </>
  );
};

export default SingleProduct;
