import React from "react";
import Experience from "@/components/Experience/Experience";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/styles/buyNow.module.scss";

const page = () => {
  return (
    <>
      <div className="contain">
        <div className={styles.buyNow}>
          <div className={styles.products}>
            <Image
              src="/images/sofas/sofa.png"
              alt="sofas"
              width={630}
              height={560}
            />
            <h3>Sofas</h3>
            <Link href="/furniture">
              <button className={styles.btn}>Buy Now</button>
            </Link>
          </div>
          <div className={styles.products}>
            <Image
              src="/images/beds/bed.png"
              alt="beds"
              width={630}
              height={560}
            />
            <h3>Beds</h3>
            <Link href="/furniture">
              <button className={styles.btn}>Buy Now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.buyNowhite}>
        <div className="contain">
          <div className={styles.buyNow}>
            <div className={styles.products}>
              <Image
                src="/images/home/bed3.png"
                alt="sofas"
                width={630}
                height={560}
              />
              <h3>Smart Home</h3>
              <Link href="/furniture">
                <button className={styles.btn}>Buy Now</button>
              </Link>
            </div>
            <div className={styles.products}>
              <Image
                src="/images/home/bed4.png"
                alt="beds"
                width={630}
                height={560}
              />
              <h3>Atomation Setup</h3>
              <Link href="/furniture">
                <button className={styles.btn}>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="contain">
        <div className={styles.buyNow}>
          <div className={styles.products}>
            <Image
              src="/images/sofas/sofa.png"
              alt="sofas"
              width={630}
              height={560}
            />
            <h3>Sofas</h3>
            <Link href="/furniture">
              <button className={styles.btn}>Buy Now</button>
            </Link>
          </div>
          <div className={styles.products}>
            <Image
              src="/images/beds/bed.png"
              alt="beds"
              width={630}
              height={560}
            />
            <h3>Beds</h3>
            <Link href="/furniture">
              <button className={styles.btn}>Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
      <Experience />
    </>
  );
};

export default page;
