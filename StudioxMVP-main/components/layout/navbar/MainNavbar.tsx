"use client";
import React from "react";
import Image from "next/image";
import styles from "./MainNavbar.module.scss";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { RiSearchLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

export const Navbar1: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.nav_links}>
        <li>3D Studio</li>
        <li>Furniture</li>
        <li>Smart Home</li>
        <li>Automation Setup</li>
        <li>Partners</li>
      </ul>
      <div className={styles.search}>
        <RiSearchLine />
        <p>Store</p>
      </div>
    </div>
  );
};

export const Navbar2: React.FC = () => {
  return <div className={styles.navbar}>
          <ul className={styles.nav_links}>
            <li>Sofas</li>
            <li>Beds</li>
            
          </ul>
          <div className={styles.search}>
            <input type="search"/>
            <RiSearchLine />
            
          </div>
        </div>
};

const MainNavbar = () => {
  const pathname = usePathname();

  let MiddleComponent;
  if (pathname === "/beds") {
    MiddleComponent = Navbar2;
  } else {
    MiddleComponent = Navbar1;
  }

  return (
    <section className="contain" style={{ padding: "20px 0" }}>
      <nav className={styles.nav}>
        <Image
          src="/images/logo.png"
          width={150}
          height={100}
          alt="logo"
          className={styles.logo}
        />
        <div>
          <MiddleComponent />
        </div>

        <span className={styles.shopping}>
          <PiShoppingCartSimpleLight style={{ fontSize: "1.5rem" }} />
          <FavoriteBorderOutlinedIcon />
        </span>
      </nav>
    </section>
  );
};

export default MainNavbar;
