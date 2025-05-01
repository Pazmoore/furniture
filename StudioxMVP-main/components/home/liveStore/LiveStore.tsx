import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./liveStore.module.scss";

const LiveStore = () => {
  return (
    <section className={styles.liveStore}>
      <div className="contain">
        <div className={styles.livestore_container}>
          <div className={styles.livestore_content}>
            <h2 className={styles.livestore_header}>Find Live Store</h2>
            <p>Click the button below to find live store.</p>
            <button className={styles.btn}>Show more</button>
          </div>
          <div className={styles.threed_product}>
            <Image
              src="/images/home/livestore.png"
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

export default LiveStore;
