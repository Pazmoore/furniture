import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className="contain">
        <div className={styles.experience_container}>
          <div className={styles.experience_content}>
            <h2 className={styles.experience_header}>
              Explore Our 3D Home Design Experience
            </h2>
            <p>Plan your home office or a complete office.</p>
            <button className={styles.btn}>Show more</button>
          </div>

          <Image
            src="/images/beds/3dcontent.png"
            alt="featured"
            width={600}
            height={400}
            className={styles.threed_image1}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
