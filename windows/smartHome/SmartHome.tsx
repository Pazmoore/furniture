import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./smart.module.scss";

const SmartHome = () => {
  return (
    <div className={`contain ${styles.smarthome}`}>
      <div className={styles.flex}>
        <div className={styles.products}>
          <Image
            src="/images/smarthomes/hero1.jpg"
            alt="sofas"
            width={630}
            height={560}
          />
          <h3>Smart Lighting System</h3>

          <button className={styles.btn}>
            <Link href={"/smarthome/products/sls"}>Buy Now</Link>
          </button>
        </div>
        <div className={styles.products}>
          <Image
            src="/images/smarthomes/hero2.jpg"
            alt="beds"
            width={630}
            height={560}
          />
          <h3>Smart Security system</h3>
          <Link href="/smarthome/products/sss">
            <button className={styles.btn}>Learn more</button>
          </Link>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.products}>
          <Image
            src="/images/smarthomes/hero3.jpg"
            alt="sofas"
            width={630}
            height={560}
          />
          <h3>Smart thermostats & Climate Control</h3>
          <Link href="/smarthome/products/stcc">
            <button className={styles.btn}>Buy Now</button>
          </Link>
        </div>
        <div className={styles.products}>
          <Image
            src="/images/smarthomes/hero4.jpg"
            alt="beds"
            width={630}
            height={560}
          />
          <h3>Voice Assistants & Hubs</h3>
          <Link href="/smarthome/products/vah">
            <button className={styles.btn}>Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmartHome;
