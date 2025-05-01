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
        <h1 className={`section-title ${styles.title}`}>
          20 Tech companies and partners endorsing studioX
        </h1>

        <div className={styles.image_slide}>
          <div className={styles.box}>
            <div className={styles.pics}>
              <div>
                <Image
                  width={120}
                  height={50}
                  src="/images/home/partner1.png"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  width={150}
                  height={100}
                  src="/images/home/partner2.png"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  width={130}
                  height={110}
                  src="/images/home/partner3.png"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  width={135}
                  height={135}
                  src="/images/home/partner4.png"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  width={125}
                  height={55}
                  src="/images/home/partner5.png"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  width={135}
                  height={70}
                  src="/images/home/partner6.png"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  width={80}
                  height={80}
                  src="/images/home/partner7.png"
                  alt="img"
                />
              </div>
              <div>
                <Image
                  width={120}
                  height={90}
                  src="/images/home/partner8.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
