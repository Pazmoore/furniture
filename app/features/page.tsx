import React from "react";
import Image from "next/image";
import styles from "@/components/layout/footer/footer.module.scss";

const page = () => {
  return (
    <section className="contain">
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.feature_info}>
            <h1>3D Studio; Design Your Dream Space, Virtually</h1>
            <p>
              Create stunning interiors effortlessly with our state-of-the-art
              3D design generator. Upload your room dimensions, select
              templates, and visualize your home with drag-and-drop precision.
              Experience augmented reality (AR) to see designs come to life in
              your space.
            </p>
          </div>
          <div className={styles.feature_img}>
            <Image
              src={"/images/footer/feature1.jpg"}
              alt="feature1"
              width={660}
              height={560}
              style={{
                borderRadius: "0.375rem",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_img}>
            <Image
              src={"/images/footer/feature2.jpg"}
              alt="feature1"
              width={660}
              height={560}
              style={{
                borderRadius: "0.375rem",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className={styles.feature_info}>
            <h1>Furniture; Minimalist Comfort Meets Modern Aesthetics</h1>
            <p>
              Shop from a curated collection of ergonomic and high-quality
              furniture designed to suit every style. From modular sofas to
              custom-built beds, find pieces crafted for functionality and
              elegance, shipped directly from manufacturers.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_info}>
            <h1> Smart Home Tech Your Home, Smarter Than Ever</h1>
            <p>
              Discover cutting-edge gadgets that transform your living space.
              From intelligent lighting to voice-activated appliances, Wixxa
              simplifies home automation for seamless integration with modern
              living.
            </p>
          </div>
          <div className={styles.feature_img}>
            <Image
              src={"/images/footer/feature3.jpg"}
              alt="feature1"
              width={660}
              height={560}
              style={{
                borderRadius: "0.375rem",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_img}>
            <Image
              src={"/images/footer/feature4.jpg"}
              alt="feature1"
              width={660}
              height={560}
              style={{
                borderRadius: "0.375rem",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className={styles.feature_info}>
            <h1>Automation Setup Effortless Control, Infinite Possibilities</h1>
            <p>
              Optimize your home with personalized automation setups. Manage
              energy, security, and daily routines with customized solutions
              guided by our team of experts.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_info}>
            <h1>Robotics Future-Ready Living, Today</h1>
            <p>
              Embrace innovation with home robotics. From AI-powered cleaning
              assistants to robotic furniture, Wixxa redefines convenience and
              efficiency for the modern homeowner.
            </p>
          </div>
          <div className={styles.feature_img}>
            <Image
              src={"/images/footer/feature5.jpg"}
              alt="feature1"
              width={660}
              height={560}
              style={{
                borderRadius: "0.375rem",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
