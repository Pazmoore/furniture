"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MainNavbar.module.scss";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { Avatar } from "@mui/material";
import { authObservable, showAuth } from "@/auth/isAuth/Auth";

const MainNavbar = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const cartItems = useSelector((state: any) => state.cart.items);

  const toggleModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowModal((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setShowModal(false);
      showAuth("register");
    }
  };

  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  // Focus on the search input when it appears
  useEffect(() => {
    if (showSearchBar && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchBar]);

  // Handle clicks outside of modal, countries dropdown, and search bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close profile modal
      if (modalRef.current && !modalRef.current.contains(target)) {
        setShowModal(false);
      }

      // Close countries dropdown
      if (countriesRef.current && !countriesRef.current.contains(target)) {
        setShowCountries(false);
      }

      // Close search bar
      if (searchInputRef.current && !searchInputRef.current.contains(target)) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const countries = ["Nigeria", "Algeria", "Angola", "Benin", "Botswana"];

  return (
    <>
      <section
        className="contain"
        style={{ padding: "20px 0", position: "relative" }}
      >
        <nav className={styles.nav}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={150}
              height={100}
              alt="logo"
              className={styles.logo}
            />
          </Link>
          <div>
            <div className={styles.navbar}>
              <ul className={styles.nav_links}>
                <li>
                  <Link href={"/furniture"}>Furniture</Link>
                </li>
                <li>
                  <Link href={"/smarthome"}>Smart Home</Link>
                </li>
                <li>
                  <Link href={"/robotics"}>Robotics</Link>
                </li>
              </ul>
              <div className={styles.search}>
                {showSearchBar ? (
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search..."
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "1.25rem",
                      border: "1px solid #ccc",
                      outline: "none",
                    }}
                  />
                ) : (
                  <CiSearch
                    onClick={toggleSearchBar}
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                  />
                )}
                <span></span>
                <p onClick={() => setShowCountries(!showCountries)}>
                  Live Store
                </p>

                {showCountries && (
                  <div className={styles.countries_modal} ref={countriesRef}>
                    <div className={styles.countries_dropdown}>
                      <ul>
                        {countries.map((item, index) => {
                          return (
                            <li
                              key={index}
                              onClick={() => setShowCountries(false)}
                            >
                              <Link href={"/livestore"}>{item}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <span className={styles.shopping}>
            <button>Get Started</button>
            <div className={styles.profile} onClick={toggleModal}>
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            </div>
            <div className={styles.menu} onClick={toggleSidebar}>
              <IoMenu className={styles.menuIcon} />
            </div>
          </span>
        </nav>

        {showModal && (
          <div className={styles.profile_modal} ref={modalRef}>
            <div className={styles.profile_dropdown}>
              <Image
                src="/images/logo.png"
                width={100}
                height={50}
                alt="logo"
              />
              <ul>
                <li className={styles.show}>
                  <Link href={"/livestore"} onClick={() => setShowModal(false)}>
                    Livestore
                  </Link>
                </li>
                <li>
                  {showSearchBar ? (
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="Search..."
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "1.25rem",
                        border: "1px solid #ccc",
                        outline: "none",
                      }}
                    />
                  ) : (
                    <span>Search</span>
                  )}
                </li>
                <li onClick={handleCheckout}>Sign In</li>
                <li>Sign Up</li>
                <li>
                  <Link
                    href={"/cart"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    Cart <span>{cartItems.length}</span>
                  </Link>
                </li>
                <li onClick={() => setShowModal(false)}>Language</li>
                <li>
                  <Link href={"/account"} onClick={() => setShowModal(false)}>
                    Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>

      <div className={`${styles.sidebar} ${sidebar ? styles.showSidebar : ""}`}>
        <div className={styles.closeBtn} onClick={closeSidebar}>
          <FaXmark />
        </div>
        <ul>
          <li>
            <Link href={"/furniture"} onClick={(e) => closeSidebar()}>
              Furniture
            </Link>
          </li>
          <li>
            <Link href={"/smarthome"} onClick={(e) => closeSidebar()}>
              Smart Home
            </Link>
          </li>
          <li>
            <Link href={"/robotics"} onClick={(e) => closeSidebar()}>
              Robotics
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainNavbar;
