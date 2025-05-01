import React from "react";
import Image from "next/image";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={`contain ${styles.hero}`}>
      <h1 className={`section-title ${styles.title}`}>
        Discover StudioX Collections
      </h1>
      <div className={styles.pics}>
        <Image
          src="/images/home/image-0.png"
          alt="hero"
          width={500}
          height={500}
          className={styles.pic1}
        />
        <div className={styles.pic}>
          <Image
            src="/images/home/image-1.png"
            alt="hero"
            width={500}
            height={250}
          />
          <Image
            src="/images/home/image-2.png"
            alt="hero"
            width={500}
            height={250}
          />
        </div>
      </div>
      <button className={styles.btn}>buy now</button>
    </section>
  );
};

export default Hero;
