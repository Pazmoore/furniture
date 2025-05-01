import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../smartHome/smart.module.scss";

const Automation = () => {
  return (
    <div className={`contain ${styles.smarthome}`}>
      <div className={styles.flex}>
        <div className={styles.products}>
          <Image
            src="/images/automation/hero1.jpg"
            alt="sofas"
            width={630}
            height={560}
          />
          <h3>Smart Appliance Control</h3>

          <button className={styles.btn}>
            <Link href={"/automation/products/sac"}>Buy Now</Link>
          </button>
        </div>
        <div className={styles.products}>
          <Image
            src="/images/automation/hero2.jpg"
            alt="beds"
            width={630}
            height={560}
          />
          <h3>Automated window Control</h3>
          <Link href="/automation/products/awc">
            <button className={styles.btn}>Buy Now</button>
          </Link>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.products}>
          <Image
            src="/images/automation/hero3.jpg"
            alt="sofas"
            width={630}
            height={560}
          />
          <h3>Home Automation Covering</h3>
          <Link href="/automation/products/hac">
            <button className={styles.btn}>Buy Now</button>
          </Link>
        </div>
        <div className={styles.products}>
          <Image
            src="/images/automation/hero4.jpg"
            alt="beds"
            width={630}
            height={560}
          />
          <h3>Energy Efficiency solution</h3>
          <Link href="/automation/products/hac">
            <button className={styles.btn}>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Automation;
