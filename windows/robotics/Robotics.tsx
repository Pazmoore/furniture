import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/styles/buyNow.module.scss";

const Robotics = () => {
  return (
    <div className="contain">
      <div className={styles.buyNow}>
        <div className={styles.products}>
          <Image
            src="/images/robotics/hero3.jpg"
            alt="sofas"
            width={630}
            height={560}
          />
          <h3>Home Robotics</h3>
          <Link href="/robotics/homerobotics">
            <button className={styles.btn}>Buy Now</button>
          </Link>
        </div>
        <div className={styles.products}>
          <Image
            src="/images/robotics/hero4.jpg"
            alt="beds"
            width={630}
            height={560}
          />
          <h3>AI Driven Automation</h3>
          <Link href="/robotics/homerobotics">
            <button className={styles.btn}>Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Robotics;
