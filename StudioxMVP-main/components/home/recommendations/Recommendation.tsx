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

      <div className={styles.threed}>
        <div className={styles.threed_content}>
          <h2 className={`section-title ${styles.title2}`}>3D Design</h2>
          <p>
            Create Your Dream Home Here – Join 30 Million Who&apos;ve Downloaded
            Our 3D Designs!
          </p>
          <button className={styles.btn}>Learn more</button>
        </div>

        <Image
          src="/images/home/3d_1.png"
          alt="3d-images"
          width={500}
          height={300}
          className={styles.threed_image}
        />
        <div className={styles.threed_products}>
          <div className={styles.threed_product}>
            <Image
              src="/images/home/3d_2.png"
              alt="3d-image"
              width={500}
              height={250}
              className={styles.threed_image1}
            />

            <Link href={"/"}>
              <Image
                src="/images/home/arrow_link.png"
                alt="3d-image"
                width={50}
                height={50}
                className={styles.threed_link}
              />
            </Link>
          </div>
          <div className={styles.threed_product}>
            <Image
              src="/images/home/3d_3.png"
              alt="featured"
              width={500}
              height={250}
              className={styles.threed_image1}
            />

            <Link href={"/"}>
              <Image
                src="/images/home/arrow_link.png"
                alt="featured"
                width={50}
                height={50}
                className={styles.threed_link}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
