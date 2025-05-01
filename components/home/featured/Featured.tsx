import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./featured.module.scss";

const Featured = () => {
  return (
    <section className={styles.featured}>
      <div className="contain">
        <div className={styles.pics}>
          <div className={styles.featured_product}>
            <Image
              src="/images/home/featured1.png"
              alt="featured"
              width={400}
              height={400}
            />
            <div className={styles.featured_info}>
              <h5>Bed</h5>
              <Link href={"/furniture"}>
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
          <div className={styles.youtube}>
            <Image
              src="/images/home/featured2.png"
              alt="featured"
              width={400}
              height={400}
            />
            <Image
              src="/images/home/yotube.png"
              alt="featured"
              width={100}
              height={100}
              className={styles.youtube_icon}
            />
          </div>
        </div>
        <div className={styles.pic2}>
          <div className={styles.featured_product}>
            <Image
              src="/images/home/featured3.png"
              alt="featured"
              width={500}
              height={250}
            />
            <div className={styles.featured_info}>
              <h5>Dinning</h5>
              <Link href={"/furniture"}>
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
          <div className={styles.featured_product}>
            <Image
              src="/images/home/featured4.png"
              alt="featured"
              width={500}
              height={250}
            />
            <div className={styles.featured_info}>
              <h5>Accent Chairs</h5>
              <Link href={"/furniture"}>
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
          <div className={styles.featured_product}>
            <Image
              src="/images/home/featured5.png"
              alt="featured"
              width={500}
              height={250}
            />
            <div className={styles.featured_info}>
              <h5>Coffee Table</h5>
              <Link href={"/furniture"}>
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
        </div>

        <button className={styles.btn}>
          Download Brochure{" "}
          <Image
            src="/images/home/brochure.png"
            alt="brochure"
            width={30}
            height={30}
          />
        </button>
      </div>
    </section>
  );
};

export default Featured;
