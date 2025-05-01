import React from "react";
import Image from "next/image";
import styles from "@/components/layout/footer/footer.module.scss";

const page = () => {
  return (
    <section className="contain">
      <div className={styles.pricing}>
        <h1>Product Pricing </h1>

        <Image
          src={"/images/footer/pricing.jpg"}
          alt="pricing"
          width={1280}
          height={560}
          className={styles.pricing_img}
        />
        <div className={styles.pricing_info}>
          <h2>Transparent Pricing for Every Budget</h2>
          <p>
            With options for outright purchase, financing plans, and custom
            packages, Wixxa ensures affordability without compromising quality.
            Get tailored quotes for projects directly through the platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
