import React from "react";
import Image from "next/image";
import styles from "@/components/layout/footer/footer.module.scss";

const page = () => {
  return (
    <section className="contain">
      <div className={styles.pricing}>
        <h1>Wixxa Annex </h1>

        <Image
          src={"/images/footer/annex.jpg"}
          alt="pricing"
          width={1280}
          height={560}
          className={styles.pricing_img}
        />
        <div className={styles.pricing_info}>
          <h2>Virtual Learning Facility. Learn, Innovate, Transform</h2>
          <p>
            Join our virtual learning facility, offering specialized courses in
            design, technology, and sustainability. Perfect for architects,
            interior designers, and homeowners looking to elevate their
            expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
