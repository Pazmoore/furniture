import Experience from "@/components/Experience/Experience";
import React from "react";
import Image from "next/image";
import styles from "@/components/styles/three_dStudio.module.scss";

const page = () => {
  return (
    <div>
      <div className={`contain ${styles.three_dstudio}`}>
        <h1 className={`section-title ${styles.title}`}>3D Design</h1>
        <div className={styles.three_dhero}>
          <div className={styles.three_dheroimg}>
            <Image
              src="/images/threeD_studio/image1.png"
              alt="three_d img"
              width={630}
              height={650}
            />
            <Image
              src="/images/threeD_studio/image2.png"
              alt="three_d img"
              width={300}
              height={650}
              className={styles.image2}
            />
            <Image
              src="/images/threeD_studio/image3.png"
              alt="three_d img"
              width={300}
              height={650}
              className={styles.image2}
            />
          </div>
          <h4>
            Explore Our Unique Home Design Experience: Humanoid Robots & Human
            Expertise Transform your home with our innovative blend of humanoid
            robots and real human craftsmanship. Follow these 3 simple steps to
            bring your dream space to life:
          </h4>
        </div>

        <div className={styles.three_d}>
          <div className={styles.three_dflex}>
            <div className={styles.three_dimg}>
              <Image
                src="/images/threeD_studio/image4.png"
                alt="three_d studio"
                width={630}
                height={650}
              />
              <h3 className={`section-title ${styles.title}`}>
                Submit Your Dimensions
              </h3>
              <p>
                Easily upload the measurements of your space through our
                user-friendly interface.
              </p>
            </div>
            <div className={styles.three_dimg}>
              <Image
                src="/images/threeD_studio/image5.png"
                alt="three_d studio"
                width={630}
                height={650}
              />
              <h3 className={`section-title ${styles.title}`}>
                Choose a Template
              </h3>
              <p>
                Browse our extensive library of templates and select the one
                that best matches your vision.
              </p>
            </div>
          </div>

          <div className={styles.three_dflex}>
            <div className={styles.three_dimg}>
              <Image
                src="/images/threeD_studio/image6.png"
                alt="three_d studio"
                width={630}
                height={400}
              />
              <h3 className={`section-title ${styles.title}`}>
                Scan your Room
              </h3>
              <p>
                Scan your room to with your phone camera and add products to
                complement the room setting
              </p>
            </div>
            <div className={styles.three_dimg}>
              <Image
                src="/images/threeD_studio/image7.png"
                alt="three_d studio"
                width={630}
                height={400}
              />
              <h3 className={`section-title ${styles.title}`}>
                See the Magic Unfold
              </h3>
              <p>
                Watch as our advanced technology and expert designers
                collaborate to create a stunning 3D design tailored just for
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Experience />
    </div>
  );
};

export default page;
