import React from "react";
import Image from "next/image";
import styles from "@/components/styles/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={`contain ${styles.contact_us}`}>
        <h1>Contact Us</h1>
        <p>
          We&apos;d love to hear from you! Whether you have questions about our
          products, need support, or want to learn more about our services, our
          team at FuniMate is here to help.
        </p>
      </div>

      <div className={styles.get_in_touch}>
        <div className={`contain ${styles.get_in_touch_container}`}>
          <div className={styles.get_touch}>
            <h2>Get in Touch</h2>
            <p className={styles.info}>
              Phone: +234 707 7415 677 <br />
              Email: s@FuniMate.com
            </p>

            {/* use appropriate tags and don't overuse the break tag unless when necessary */}
            <p className={styles.info}>
              Visit Us <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quas!. <br />
              Address: Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <p>Business Hours: Monday - Sunday: 24 Hours At Work!</p>
          </div>

          <Image
            width={500}
            height={500}
            src="/images/contact/image-1.png"
            alt="contact-img"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.stay_connect}>
        <div className={`contain ${styles.stay_connect_container}`}>
          <Image
            width={580}
            height={400}
            src="/images/contact/image-2.png"
            alt="contact-img"
            className={styles.img}
          />
          <div className={styles.stay_connected}>
            <h2>Stay Connected</h2>
            <p className={styles.info}>
              Follow us on our social media platforms to stay updated <br /> on
              the latest trends, exclusive offers, and expert tips.{" "}
            </p>{" "}
            <p>
              Facebook: StudioX Facebook Page <br /> Instagram: StudioXbyd
              Instagram Profile <br />
              Twitter: FuniMate Twitter Handle <br />
              LinkedIn: FuniMate LinkedIn Page <br /> Youtube: FuniMate
            </p>
          </div>
        </div>
      </div>

      <div className={styles.send}>
        <div className="contain">
          <div className={styles.send_container}>
            <div className={styles.send_message}>
              <h2>Send Us a Message</h2>
              <p>
                Have a specific inquiry? Fill out the form below, and we&apos;ll
                get back to <span>you within minutes</span>
              </p>
            </div>
            <form className={styles.box}>
              <div className={styles.send_box}>
                <label htmlFor="username">Name</label>
                <input type="text" required />
              </div>
              <div className={styles.send_box}>
                <label htmlFor="username">Email Address</label>
                <input type=" Email" required />
              </div>
              <div className={styles.send_box}>
                <label htmlFor="username">Phone Number</label>
                <input type="text" required />
              </div>
              <div className={styles.send_box_one}>
                <label htmlFor="username">Message</label>
                <input className="{styles.box}" type="text" required />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
