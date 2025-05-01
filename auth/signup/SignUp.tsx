"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { useForm } from "react-hook-form";
import { Register } from "@/interfaces/auth/auth";
import {
  emailPattern,
  passwordPattern,
  phoneNumberPattern,
} from "../../components/utilities/validate/validate";
import styles from "./signup.module.scss";
import { authenticate, showAuth } from "../isAuth/Auth";

const SignUp = ({ signIn, signUp }: any) => {
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Register>();

  const handleSignUp = (input: Register) => {
    authenticate(true);
    localStorage.setItem("auth", JSON.stringify(input));
    // toast registered
    showAuth("none");
  };

  return (
    <div>
      <div className={`contain ${styles.sign_up}`}>
        <div className={styles.sign_up_container}>
          <div className={styles.sign_up_one}>
            <div>
              <Image
                width={300}
                height={300}
                src="/images/logo.png"
                alt="contact-img"
                className={styles.logo_img}
              />
              <div className={styles.signupOne_info}>
                <h1>Discover StudioX Collection</h1>
                <p className={styles.info}>
                  Create Your Dream Home Here &ndash; Join 30 Million Who&#39;ve
                  Downloaded Our 3D Designs&#33;
                </p>
              </div>
            </div>
            <div style={{ width: "100%", height: "100%" }}>
              <Image
                width={300}
                height={300}
                src="/images/signin/image-1.png"
                alt="contact-img"
                className={styles.sign_up_two_img}
              />
            </div>
          </div>
          <div className={styles.sign_up_three}>
            <div className={styles.sign_up_three_details}>
              <h1>Get started now</h1>
              <p>Enter your Details to create an account</p>
            </div>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className={styles.input}>
                <label className={styles.label}>Full Name</label>
                <input
                  className={styles.label_input}
                  type="text"
                  placeholder="Kenny"
                  {...register("name", { required: "Full name required" })}
                />
                <p className={`hide-error ${errors.name && "show-error"}`}>
                  {errors.name ? errors.name?.message : "required"}
                </p>
              </div>
              <div className={styles.input}>
                <label className={styles.label}>Email Address</label>
                <input
                  className={styles.label_input}
                  type="text"
                  {...register("email", {
                    required: "Email address required",
                    pattern: {
                      value: emailPattern,
                      message: "Email address invalid",
                    },
                  })}
                />
                <p className={`hide-error ${errors.email && "show-error"}`}>
                  {errors.email ? errors.email?.message : "required"}
                </p>
              </div>
              <div className={styles.input}>
                <label className={styles.label}>Phone Number</label>
                <input
                  className={styles.label_input}
                  type="text"
                  {...register("phoneNumber", {
                    required: "Phone number required",
                    pattern: {
                      value: phoneNumberPattern,
                      message: "Phone number not valid",
                    },
                  })}
                />
                <p
                  className={`hide-error ${errors.phoneNumber && "show-error"}`}
                >
                  {errors.phoneNumber
                    ? errors.phoneNumber?.message
                    : "required"}
                </p>
              </div>
              <div className={styles.input}>
                <label className={styles.label}>Password</label>
                <div className={styles.password}>
                  <input
                    className={styles.label_input}
                    type={`${show ? "text" : "password"}`}
                    {...register("password", {
                      required: "Password required",
                      pattern: {
                        value: passwordPattern,
                        message: "password not valid",
                      },
                    })}
                  />
                  <Image
                    className={styles.img}
                    src={`/images/auth/${show ? "eye-show" : "eye-hide"}.png`}
                    alt="img"
                    onClick={() => setShow(!show)}
                    width="25"
                    height="25"
                  />
                </div>
                <p className={`hide-error ${errors.password && "show-error"}`}>
                  {errors.password ? errors.password?.message : "required"}
                </p>
              </div>
              <div className={styles.checkbox}>
                <Checkbox
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  disableRipple
                  sx={{
                    width: "0rem",
                    height: "0rem",
                    color: "var(--desc)",
                    "&.Mui-checked": {
                      color: "var(--color)",
                    },
                  }}
                />
                <span>
                  By creating an account you agree to our{" "}
                  <Link href="/">privacy policy Terms of services</Link>
                </span>
              </div>
              <button className={styles.formbutton} type="submit">
                Continue
              </button>
            </form>

            <p className={styles.option}>Or sign up with</p>

            <div className={styles.options}>
              <button className={styles.button}>
                <Image
                  src="/images/socials/goggle.png"
                  alt="img"
                  width={50}
                  height={50}
                  className={styles.img}
                />
                <span className={styles.get}>Continue with Google</span>
              </button>
              <button className={styles.button}>
                <Image
                  src="/images/socials/apple.png"
                  alt="img"
                  width={50}
                  height={50}
                  className={styles.img}
                />
                <span className={styles.get}>Continue with Apple</span>
              </button>
            </div>
            <p className={styles.account}>
              Have an account?
              <span onClick={signIn} className={styles.span}>
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// when user clicks on  <CiSearch style={{ fontSize: "1.5rem" }} /> i want a search bar to appear where it was and user can begin to type immediately without having to focus there and when user stops typing for a while  <CiSearch style={{ fontSize: "1.5rem" }} /> appears
