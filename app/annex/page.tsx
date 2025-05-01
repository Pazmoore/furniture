import React from "react";
import Image from "next/image";
import styles from "@/components/layout/footer/footer.module.scss";

const page = () => {
  return (
    <section className="contain">
      <div className={styles.pricing}>
        <h1>FuniMateAnnex </h1>

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis reiciendis qui tempora laboriosam amet blanditiis a odit veritatis sunt animi labore accusantium sapiente ratione, consequuntur tenetur mollitia deserunt ipsam voluptatibus!
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
