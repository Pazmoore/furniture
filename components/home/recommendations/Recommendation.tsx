"use server";
import React from "react";
import Image from "next/image";
import styles from "./recommendation.module.scss";
import ImageSlider from "@/components/utilities/imageSlider/ImageSlider";
import Link from "next/link";

const recommendationContent = [
  {
    id: 1,
    image: "/images/home/recommend1.png",
  },
  {
    id: 2,
    image: "/images/home/recommend2.png",
  },
  {
    id: 3,
    image: "/images/home/recommend3.png",
  },
  {
    id: 4,
    image: "/images/home/recommend3.png",
  },
];

const Recommendation = () => {
  return (
    <section className={`contain ${styles.recommendation}`}>
      <h2 className={`section-title ${styles.title}`}>Recommendations</h2>
      <div className={styles.recommendationText}>
        <p>
          Check out our most popular <br /> products loved by customers.
        </p>
        <button className={styles.btn}>Shop Now</button>
      </div>

      <ImageSlider imageContent={recommendationContent} />
    </section>
  );
};

export default Recommendation;
