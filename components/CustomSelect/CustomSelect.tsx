"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./customSelect.module.scss";
import { IoIosArrowDown } from "react-icons/io";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  onSelect: (value: string) => void;
  defaultLabel?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  defaultLabel = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close
  const [selectedLabel, setSelectedLabel] = useState<string>(defaultLabel); // State to manage selected option
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown to manage clicks outside

  // Toggle the dropdown
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Handle option click
  const handleOptionClick = (option: Option) => {
    setSelectedLabel(option.label); // Set the selected label
    onSelect(option.value); // Call the onSelect callback with the option value
    setIsOpen(false); // Close the dropdown
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.custom_select} ref={dropdownRef}>
      {/* Display the selected option or default label */}
      <div className={styles.selected_option} onClick={toggleDropdown}>
        {selectedLabel} <IoIosArrowDown />
      </div>
      {isOpen && (
        <ul className={styles.options_list}>
          {options.map((option) => (
            <li
              key={option.value}
              className="option-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
