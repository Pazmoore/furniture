import React from "react";
import Image from "next/image";
import styles from "@/components/styles/career.module.scss";

const page = () => {
  return (
    <section className="contain">
      <div className={styles.join_container}>
        <div className={styles.join}>
          <h1 className="section-title">
            Join us in in driving change and making a meaningful impact
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem repellendus odit esse voluptatum itaque ut unde beatae iure tempora.
          </p>
        </div>

        <div className={styles.work}>
          <h2 className="section-title">Why Work With Us?</h2>

          <div className={styles.workbox}>
            <div className={styles.work_container}>
              <Image
                width={50}
                height={50}
                src="./images/career/zap.svg"
                alt="join-img"
                className={styles.join_img}
              />

              <div className={styles.info}>
                <h3>Career Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis suscipit, ullam omnis dignissimos commodi natus autem vitae, rerum corrupti sapiente praesentium possimus, perspiciatis adipisci.
                </p>
              </div>
            </div>
            <div className={styles.work_container}>
              <Image
                width={50}
                height={50}
                src="./images/career/bar.svg"
                alt="join-img"
                className={styles.join_img}
              />

              <div className={styles.info}>
                <h3>Inclusive Culture</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dicta eaque magnam asperiores blanditiis adipisci labore tempora alias nostrum atque.
                </p>
              </div>
            </div>
            <div className={styles.work_container}>
              <Image
                width={50}
                height={50}
                src="./images/career/smile.svg"
                alt="join-img"
                className={styles.join_img}
              />

              <div className={styles.info}>
                <h3>Comprehensive Benefits</h3>
                <p className={styles.info}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores earum ab maxime ipsum tempore natus, libero atque vero voluptate fugiat quidem debitis labore architecto.
                </p>
              </div>
            </div>
            <div className={styles.work_container}>
              <Image
                width={50}
                height={50}
                src="./images/career/mail.svg"
                alt="join-img"
                className={styles.join_img}
              />

              <div className={styles.info}>
                <h3>Innovative Environment</h3>
                <p className={styles.p}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis voluptas possimus, ipsum iste consectetur. Molestias inventore iure fugiat sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.input}>
          <Image
            width={30}
            height={30}
            src="./images/career/job.svg"
            alt="join-img"
            className={styles.join_img}
          />
          <input type="text" placeholder="Search Job title" />
        </div>

        <div className={styles.job}>
          <div className={styles.job_one}>
            <div>
              <h4>Product Designer</h4>
              <p>We are looking for a mid level designer to our team</p>
            </div>
            <p>Lagos Nigeria</p>
            <p>Part time, Remote</p>
          </div>
          <div className={styles.job_two}>
            <div>
              <h4>Product Designer</h4>
              <p>We are looking for a mid level designer to our team</p>
            </div>
            <p>Lagos Nigeria</p>
            <p>Part time, Remote</p>
          </div>
          <div className={styles.job_three}>
            <div>
              <h4>Product Designer</h4>
              <p>We are looking for a mid level designer to our team</p>
            </div>
            <p>Lagos Nigeria</p>
            <p>Part time, Remote</p>
          </div>
          <div className={styles.job_four}>
            <div>
              <h4>Product Designer</h4>
              <p>We are looking for a mid level designer to our team</p>
            </div>
            <p>Lagos Nigeria</p>
            <p>Part time, Remote</p>
          </div>
          <div className={styles.job_five}>
            <div>
              <h4>Product Designer</h4>
              <p>We are looking for a mid level designer to our team</p>
            </div>
            <p>Lagos Nigeria</p>
            <p>Part time, Remote</p>
          </div>
          <div className={styles.job_six}>
            <div>
              <h4>Product Designer</h4>
              <p>We are looking for a mid level designer to our team</p>
            </div>
            <p>Lagos Nigeria</p>
            <p>Part time, Remote</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
