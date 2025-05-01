import React from "react";
import Image from "next/image";
import styles from "./beds.module.scss";
import Link from "next/link";

const Beds = () => {
  return (
    <section className={styles.beds}>
      <div className="contain">
        <div className={styles.beds_content}>
          <h2 className={`section-title ${styles.title}`}>Bed And Sofa</h2>
          <p>Check out our most popular products loved by customers.</p>
          <button className={styles.btn}>Buy Now</button>
        </div>

        <div className={styles.pics}>
          <div className={styles.featured_product}>
            <Image
              src="/images/home/bed1.png"
              alt="beds_and_sofa"
              width={500}
              height={400}
            />
            <div className={styles.featured_info}>
              <h6>Sofa</h6>
              <Link href={"/"}>
                <Image
                  src="/images/home/arrow_link.png"
                  alt="beds_and_sofa"
                  width={50}
                  height={50}
                  className={styles.featured_link}
                />
              </Link>
            </div>
          </div>

          <div className={styles.featured_product}>
            <Image
              src="/images/home/bed2.png"
              alt="featured"
              width={500}
              height={400}
            />
            <div className={styles.featured_info}>
              <h6>Bed</h6>
              <Link href={"/"}>
                <Image
                  src="/images/home/arrow_link.png"
                  alt="featured"
                  width={50}
                  height={50}
                  className={styles.featured_link}
                />
              </Link>
            </div>
          </div>

          <div className={styles.beds_product}>
            <Image
              src="/images/home/bed3.png"
              alt="beds_and_sofa"
              width={500}
              height={400}
            />
            <div className={styles.beds_info}>
              <h6>Smart Home</h6>
              <button className={styles.btn}>Shop Now</button>
            </div>
          </div>

          <div className={styles.beds_product}>
            <Image
              src="/images/home/bed4.png"
              alt="beds_and_sofa"
              width={500}
              height={400}
            />
            <div className={styles.beds_info}>
              <h6>Automation Setup</h6>
              <button className={styles.btn}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beds;
