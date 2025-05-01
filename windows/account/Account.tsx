"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./account.module.scss";
import { MdOutlineModeEdit, MdOutlinePersonOutline } from "react-icons/md";
import { TbShieldHalf } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineNotification } from "react-icons/ai";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "@/components/utilities/product/ProductCard";
import { RootType } from "@/redux/store";
import Ordering from "./Ordering";

type FieldKey = "fullName" | "phoneNumber" | "email" | "address"; // Define the type for the keys of the formData object

const Account = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<Record<FieldKey, string>>({
    fullName: "Yennefer Doe",
    phoneNumber: "08033056842",
    email: "yennefer.doe@example.com",
    address: "12 National Park, Victoria Island Lagos",
  });
  const [editableFields, setEditableFields] = useState<
    Record<FieldKey, boolean>
  >({
    fullName: false,
    phoneNumber: false,
    email: false,
    address: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleEdit = (field: FieldKey) => {
    setEditableFields({ ...editableFields, [field]: !editableFields[field] });
  };
  const fieldLabels: Record<FieldKey, string> = {
    fullName: "First Name",
    address: "Address",
    email: "Email Address",
    phoneNumber: "Phone Number",
  };

  const saveField = (field: FieldKey) => {
    setEditableFields({ ...editableFields, [field]: false });
  };

  // const items = useSelector((state: any) => state.favourite.items); // Get the items from the Redux store
  const likeItems = useSelector(
    (state: RootType) => state.favourite.items || []
  );

  return (
    <section className="contain">
      {page === 0 && (
        <div className={styles.account}>
          <h3>Account Settings</h3>

          <div className={styles.account_tabs}>
            <div className={styles.account_tab} onClick={() => setPage(1)}>
              <MdOutlinePersonOutline
                style={{ fontSize: "2rem", marginBottom: "1.25rem" }}
              />
              <h5>Profile</h5>
              <p>Manage your name, contact details, and profile picture.</p>
            </div>

            <div className={styles.account_tab} onClick={() => setPage(2)}>
              <TbShieldHalf
                style={{ fontSize: "2rem", marginBottom: "1.25rem" }}
              />
              <h5>Account Security</h5>
              <p>Update your password and secure your account.</p>
            </div>

            <div className={styles.account_tab} onClick={() => setPage(3)}>
              <FaHeart style={{ fontSize: "2rem", marginBottom: "1.25rem" }} />
              <h5>Favourite</h5>
              <p>Manage your name, contact details, and profile picture.</p>
            </div>

            <div className={styles.account_tab} onClick={() => setPage(4)}>
              <VscFeedback
                style={{ fontSize: "2rem", marginBottom: "1.25rem" }}
              />
              <h5>Send us Feedback</h5>
              <p>Any question you can always ask us</p>
            </div>

            <div className={styles.account_tab} onClick={() => setPage(5)}>
              <AiOutlineNotification
                style={{ fontSize: "2rem", marginBottom: "1.25rem" }}
              />
              <h5>Notifications</h5>
              <p>Choose which notifications you want to receive</p>
            </div>

            <div className={styles.account_tab} onClick={() => setPage(6)}>
              <Image
                src="/images/delivery.svg"
                alt="delivery"
                width={32}
                height={32}
                style={{ marginBottom: "1.25rem" }}
              />
              <h5>Order Management</h5>
              <p>Track order status, and initiate returns</p>
            </div>
          </div>
        </div>
      )}

      {page === 1 && (
        <div className={styles.account}>
          <h3>Personal Information</h3>

          <div className={styles.account_form}>
            <Avatar
              sx={{ width: 120, height: 120 }}
              style={{ marginBottom: "1.75rem" }}
            />
            <form action="">
              {Object.keys(formData).map((field) => {
                const key = field as FieldKey; // Explicit type assertion
                return (
                  <div key={key} className={styles.account_inputs}>
                    <label htmlFor={key}>{fieldLabels[key]}</label>
                    <div className={styles.account_input}>
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={formData[key]}
                        readOnly={!editableFields[key]}
                        onChange={handleInputChange}
                      />

                      <MdOutlineModeEdit
                        style={{
                          fontSize: "1.25rem",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleEdit(key)}
                      />
                    </div>
                  </div>
                );
              })}
              <button>Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {page === 2 && (
        <div className={styles.account}>
          <h3>Account Security</h3>

          <div className={styles.account_form}>
            <form action="">
              <div className={styles.account_inputs}>
                <label htmlFor="">Current Password</label>
                <div className={styles.account_input}>
                  <input type="text" />{" "}
                </div>
              </div>
              <div className={styles.account_inputs}>
                <label htmlFor="">New Password</label>
                <div className={styles.account_input}>
                  <input type="text" />{" "}
                </div>
              </div>
              <div className={styles.account_inputs}>
                <label htmlFor="">Confirm Password</label>
                <div className={styles.account_input}>
                  <input type="text" />{" "}
                </div>
              </div>

              <button>Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {page === 3 && (
        <div className={styles.account}>
          {!likeItems || likeItems?.length === 0 ? (
            <>
              <h2>You have not liked any product</h2>
            </>
          ) : (
            <div className={styles.products}>
              {likeItems.map((item) => {
                return (
                  <>
                    <ProductCard
                      item={{
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        product: item.product,
                        rating: item.rating,
                        quantity: item.quantity,
                      }}
                      basePath={""}
                    />
                  </>
                );
              })}
            </div>
          )}
        </div>
      )}

      {page === 4 && (
        <div className={styles.account}>
          <h3>Send us your Questions and Feedback</h3>
          <p>
            Use the form below to get in touch. Our office hours are Monday
            through Friday, 9 am to 5 pm, and we attempt to respond to support
            requests within 1 business day.
          </p>

          <div className={styles.account_form}>
            <form action="">
              <div className={styles.account_inputs}>
                <label htmlFor="">Full Name</label>
                <div className={styles.account_input}>
                  <input type="text" placeholder="Enter your full name" />{" "}
                </div>
              </div>

              <div className={styles.account_inputs}>
                <label htmlFor="">Email Address</label>
                <div className={styles.account_input}>
                  <input type="text" placeholder="Enter your email address" />{" "}
                </div>
              </div>

              <div className={styles.account_inputs}>
                <label htmlFor="">Message</label>
                <div className={styles.account_input}>
                  <textarea rows={5} cols={5} />{" "}
                </div>
              </div>

              <button>Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {page === 6 && <Ordering />}
    </section>
  );
};

export default Account;
