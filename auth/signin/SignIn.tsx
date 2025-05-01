"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Login } from "@/interfaces/auth/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  emailPattern,
  passwordPattern,
  phoneNumberPattern,
} from "../../components/utilities/validate/validate";
import styles from "../signup/signup.module.scss";
import { authenticate, navigateAfterAuthObservable } from "../isAuth/Auth";

const SignIn = ({ signIn, signUp }: any) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [navigateAfterAuth, setNavigateAfterAuth] = useState("");
  const {
    formState: { errors },
    handleSubmit,
    register: login,
  } = useForm<Login>();

  const handleSignIn = (input: Login) => {
    authenticate(true);
    navigateAfterAuth && router.push(navigateAfterAuth);
    signIn();
  };

  useEffect(() => {
    const url = navigateAfterAuthObservable.subscribe((url) =>
      setNavigateAfterAuth(url)
    );
    return () => url.unsubscribe();
  }, []);

  return (
    <div className={`contain ${styles.sign_up}`}>
      <div className={styles.sign_up_container}>
        <div className={styles.sign_up_one}>
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
              Downloaded Our 3D Designs!
            </p>
          </div>
          <Image
            width={300}
            height={300}
            src="/images/signin/image-1.png"
            alt="contact-img"
            className={styles.sign_up_two_img}
          />
        </div>
        <div className={styles.sign_up_three}>
          <div className={styles.sign_up_three_details}>
            <h1>Sign in</h1>
            <p className={styles.info}>
              Enter your Details to sign in to account
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className={styles.input}>
              <label className={styles.label}>Email Address</label>
              <input
                className={styles.label_input}
                type="text"
                {...login("email", {
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
                {...login("phoneNumber", {
                  required: "Phone number required",
                  pattern: {
                    value: phoneNumberPattern,
                    message: "Phone number not valid",
                  },
                })}
              />
              <p className={`hide-error ${errors.phoneNumber && "show-error"}`}>
                {errors.phoneNumber ? errors.phoneNumber?.message : "required"}
              </p>
            </div>
            <div className={styles.input}>
              <label className={styles.label}>Password</label>
              <div className={styles.password}>
                <input
                  className={styles.label_input}
                  type={`${show ? "text" : "password"}`}
                  {...login("password", {
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

            <span className={styles.forget}>Forget Password</span>

            <button
              disabled={false}
              className={styles.formbutton}
              type="submit"
            >
              Continue
            </button>
          </form>

          <p className={styles.option}>Or sign in with</p>

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
            Don&#39;t have an account&#63;
            <span onClick={signUp} className={styles.span}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
