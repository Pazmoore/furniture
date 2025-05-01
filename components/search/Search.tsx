"use client";
import React, { useState } from "react";
import styles from "./search.module.scss";
import { searchData, category, dimension, sort, type } from "./searchData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

const Search = () => {
  const [openMenu, setOpenMenu] = useState(5);
  const [selectedData, setSelectedData] = useState(searchData);

  const handleClickAway = () => {
    setOpenMenu(5);
  };
  const handleOpenMenu = (menuIndex: number) =>
    menuIndex === openMenu ? setOpenMenu(5) : setOpenMenu(menuIndex);

  const handleChoice = (menuIndex: number, choice: any) => {
    setSelectedData((prevData) => {
      const updatedData = [...prevData];
      if (menuIndex === 0) {
        setOpenMenu(1);
        updatedData[menuIndex].beds = choice;
      } else {
        setOpenMenu(2);
        updatedData[menuIndex].sofas = choice;
      }
      return updatedData;
    });
  };

  return (
    <div className={styles.search}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={styles.cards}>
          <div className={styles.card}>
            {/* Select Category */}
            <div>
              <div onClick={() => handleOpenMenu(0)} className={styles.box}>
                <div className={styles.dropdown_card}>
                  {selectedData[0].beds ? (
                    <div className={styles.select}>
                      <p>{selectedData[0].beds}</p>
                      <span>
                        <KeyboardArrowDownIcon />
                      </span>
                    </div>
                  ) : (
                    <div className={styles.select}>
                      <p>Category</p>
                      <span>
                        <KeyboardArrowDownIcon />
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {openMenu === 0 && (
                <div className={styles.menu}>
                  {category.map((item, i) => (
                    <p
                      key={i}
                      onClick={() => handleChoice(0, item.viewValue)}
                      className="category-item"
                    >
                      {item.viewValue}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Select Type */}
            <div onClick={() => handleOpenMenu(1)} className={styles.box}>
              <div className={styles.dropdown_card}>
                {selectedData[1].sofas ? (
                  <div className={styles.select}>
                    <p>{selectedData[1].sofas}</p>
                    <span>
                      <KeyboardArrowDownIcon />
                    </span>
                  </div>
                ) : (
                  <div className={styles.select}>
                    <p>Type</p>
                    <span>
                      <KeyboardArrowDownIcon />
                    </span>
                  </div>
                )}
              </div>
              {openMenu === 1 && (
                <div className={styles.menu}>
                  {type.map((item, i) => (
                    <p
                      key={i}
                      onClick={() => handleChoice(0, item.viewValue)}
                      className="category-item"
                    >
                      {item.viewValue}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Select Dimension */}
            <div>
              <div onClick={() => handleOpenMenu(2)} className={styles.box}>
                <div className={styles.dropdown_card}>
                  <div className={styles.select}>
                    <p>{dimension[0].viewValue || "Dimension"}</p>
                    <span>
                      <KeyboardArrowDownIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div onClick={() => handleOpenMenu(2)} className={styles.box}>
                {openMenu === 2 && (
                  <div className="menu">
                    <div className="dimension">
                      {dimension.map((item, i) => (
                        <span
                          key={i}
                          onClick={() => handleChoice(2, item.viewValue)}
                          className="dimension-item"
                        >
                          {item.viewValue}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.select}>
            <p>Filter</p>
            <span>
              <TuneRoundedIcon />
            </span>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Search;
