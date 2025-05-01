import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
import { footerLinks, socialIcons } from "./footerdata";

const Footer = () => {
  return (
    <>
      <div className="contain">
        <div className={styles.footer}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Studio X Logo"
              width={150}
              height={100}
              className={styles.logo}
            />
          </Link>
          <nav className={styles.footerlinks}>
            {footerLinks.map((val, i) => (
              <Link href={val.link} key={i} className={styles.link}>
                {val.content}
              </Link>
            ))}
          </nav>
          <nav className={styles.footerlinks}>
            {socialIcons.map((val, i) => (
              <Link key={i} href={val.link} target="_blank">
                <Image
                  src={val.image}
                  alt="social"
                  width={20}
                  height={20}
                  className={styles.socials}
                />
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.footerbottom}>
          <Image
            src="/images/footer/apps.svg"
            alt="app"
            width={150}
            height={100}
            style={{ width: "10rem", height: "3rem" }}
          />
          <p>@StudioX 2024</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
