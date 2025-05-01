"use client";
import React, { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import styles from "./imageSlider.module.scss";

const ImageSlider = ({ imageContent, isLogo }: any) => {
  const rowRef = useRef<any>(null);
  const [isMovedLeft, setIsMovedLeft] = useState(false);
  const [isMovedRight, setIsMovedRight] = useState(true);

  const handleScroll = (direction: any) => {
    setIsMovedLeft(true);
    setIsMovedRight(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
      let scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      if (scrollTo <= 0) {
        // Ensure we don't scroll beyond the left end
        scrollTo = 0;
        setIsMovedLeft(false);
        setIsMovedRight(true);
      }

      if (scrollTo >= scrollWidth - clientWidth) {
        // Ensure we don't scroll beyond the right end
        scrollTo = scrollWidth - clientWidth;
        setIsMovedLeft(true);
        setIsMovedRight(false);
      }
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.image_slide}>
      <div className={styles.box}>
        <div ref={rowRef} className={styles.pics}>
          {imageContent.map((content: any, i: number) => (
            <div key={i} className={isLogo ? styles.logo : styles.pic}>
              <Image width={500} height={400} src={content.image} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
