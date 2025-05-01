"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./hero.module.scss";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className={`contain ${styles.hero}`}>
      <h1 className={`section-title ${styles.title}`}>
        Discover FuniMate Collections
      </h1>
      <div className={styles.pics}>
        <Image
          src="/images/home/image-0.png"
          alt="hero"
          width={500}
          height={500}
          className={styles.pic1}
        />
        <div className={styles.pic}>
          <Image
            src="/images/home/hero2.png"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </div>
      <button className={styles.btn}>
        <Link href={"/buynow"}>Buy Now</Link>
      </button>

      {/* Modal for SignUp or SignIn
      <SignUpModal isOpen={isSignUpOpen} onClose={closeSignUp}>
        {isSignIn ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
      </SignUpModal> */}
    </section>
  );
};

export default Hero;
