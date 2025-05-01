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
            Our team is passionate, innovative, and dedicated to creating
            solutions that shape the future of the industry.
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
                  Your growth is our priority. With access to ongoing learning
                  opportunities, mentorship programs, and career advancement
                  path
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
                  Expect the best from us. Get a dedicated support team that
                  will handle all Diversity is at our core. We’re committed to
                  building a team that represents all.
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
                  We offer competitive salaries, health and wellness benefits,
                  flexible work arrangements, and a range of perks to support a
                  healthy work-life balance.
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
                  Included in our service, each customer gets in-house software
                  to access live financial dashboards.
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
