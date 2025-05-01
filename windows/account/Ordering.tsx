import React, { useState } from "react";
import styles from "./account.module.scss";
import MUIDataTable from "mui-datatables";
import { Chip, createTheme, ThemeProvider } from "@mui/material";
import { orderingdata } from "./orderingdata";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Ordering = () => {
  const [tab, setTab] = useState(0);

  const columns = [
    {
      name: "idNo",
      label: "ID",
    },
    {
      name: "productName",
      label: "Product Name",
    },
    {
      name: "date",
      label: "Order Date",
    },
    {
      name: "time",
      label: "Time",
    },
    {
      name: "amount",
      label: "Amount",
    },
    {
      name: "deliverydate",
      label: "Delivery Date",
    },
    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value: string) => {
          let textColor = "";
          let borderColor = "";
          switch (value) {
            case "pending":
              textColor = "#EA4335";
              borderColor = "#EF2525";
              break;

            case "delivered":
              textColor = "#6FB583";
              borderColor = "#6FB583";
              break;

            case "in progress":
              textColor = "#699BEC";
              borderColor = "#699BEC";
              break;
            default:
              textColor = "#EA4335";
              borderColor = "#EF2525";
          }
          return (
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.645rem" }}
            >
              <Chip
                label={value}
                style={{
                  color: textColor,
                  fontWeight: "bold",
                  border: `1px solid ${borderColor}`,
                  textTransform: "capitalize",
                  backgroundColor: "transparent",
                  borderRadius: "1.5rem",
                  width: "100%",
                  maxWidth: "100px",
                }}
              />
              <HiOutlineDotsVertical
                style={{ color: "#fff", fontSize: "1.25rem" }}
              />
            </span>
          );
        },
      },
    },
  ];

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: "'Aeonik Regular', 'Aeonik', sans-serif",
      },
      components: {
        MUIDataTableToolbar: {
          styleOverrides: {
            root: {
              backgroundColor: "#28262C",
              color: "#fff",
              padding: "1rem",
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            root: {
              backgroundColor: "#28262C",
              color: "#fff",
              padding: "0.5rem",
              border: "none",
            },
          },
        },
        MUIDataTableBodyCell: {
          styleOverrides: {
            root: {
              backgroundColor: "#28262C",
              color: "#fff",
              padding: "0.5rem",
              border: "none",
            },
          },
        },
        MuiTableRow: {
          styleOverrides: {
            root: {
              borderBottom: "2px double #fff",
            },
          },
        },
      },
    });

  return (
    <div className={styles.account}>
      <h3>Order Management</h3>
      <p className={styles.account_orderstabs}>
        <span
          onClick={() => setTab(0)}
          className={tab === 0 ? styles.active : styles.inactive}
        >
          Product Ordering
        </span>{" "}
        <span
          onClick={() => setTab(1)}
          className={tab === 1 ? styles.active : styles.inactive}
        >
          Returns & Installation
        </span>
      </p>

      {tab === 0 && (
        <div
          style={{
            borderRadius: "1.5rem",
            overflow: "hidden",
            height: "100%",
            maxHeight: "560px",
            overflowY: "auto",
          }}
        >
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Product Ordering"}
              data={orderingdata}
              columns={columns}
              options={{
                responsive: "standard",
                elevation: 0,
                print: false,
                viewColumns: false,
                download: false,
                search: false,
                pagination: false,
                selectableRows: "none" as const,
              }}
            />
          </ThemeProvider>
        </div>
      )}

      {tab === 1 && (
        <div className={styles.account_form}>
          <form action="">
            <div className={styles.account_inputs}>
              <label htmlFor="">Order ID</label>
              <div className={styles.account_input}>
                <input type="number" placeholder="Order ID" />{" "}
              </div>
            </div>

            <div className={styles.account_inputs}>
              <label htmlFor="">Product Name</label>
              <div className={styles.account_input}>
                <input type="text" placeholder="Product Name" />{" "}
              </div>
            </div>

            <div className={styles.account_inputs}>
              <label htmlFor="">Date</label>
              <div className={styles.account_input}>
                <input type="date" placeholder="Date" />{" "}
              </div>
            </div>

            <div className={styles.account_inputs}>
              <label htmlFor="">Reason For Return</label>
              <div className={styles.account_input}>
                <textarea rows={5} cols={5} />{" "}
              </div>
            </div>

            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Ordering;
