import React from "react";
import Image from "next/image";
import styles from "./partners.module.scss";
import ImageSlider from "@/components/utilities/imageSlider/ImageSlider";

const logos = [
  {
    id: 1,
    image: "/images/home/partner1.png",
  },
  {
    id: 2,
    image: "/images/home/partner2.png",
  },
  {
    id: 3,
    image: "/images/home/partner3.png",
  },
  {
    id: 4,
    image: "/images/home/partner4.png",
  },
  {
    id: 5,
    image: "/images/home/partner5.png",
  },
  {
    id: 6,
    image: "/images/home/partner6.png",
  },
  {
    id: 7,
    image: "/images/home/partner7.png",
  },
  {
    id: 8,
    image: "/images/home/partner8.png",
  },
];

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className="contain">
        <h1 className={`section-title ${styles.title}`}>20 Tech companies and partners endorsing studioX</h1>
        <div className={styles.logos}>
          <ImageSlider imageContent={logos} isLogo={true} />
          
        </div>
      </div>
    </section>
  );
};

export default Partners;
