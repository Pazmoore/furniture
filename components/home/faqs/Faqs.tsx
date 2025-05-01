"use client";
import React from "react";
import Image from "next/image";
import styles from "./faqs.module.scss";
import { faqs } from "./faqsData";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Faqs = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false);
  const contact = () => {};

  return (
    <section className={styles.faqs}>
      <div className={`contain ${styles.faqs_container}`}>
        <div className={`section-title ${styles.content}`}>
          Frequently asked questions
        </div>
        <div className={styles.accordion}>
          {faqs.map((faq, i, array) => (
            <Accordion
              key={i}
              expanded={expanded === faq.id}
              disableGutters={true}
              onChange={handleChange(faq.id)}
              className={`${styles.accordionItem} ${
                array.length - 1 == i && "last-child"
              }`}
            >
              <AccordionSummary
                expandIcon={
                  <AddCircleOutlineOutlinedIcon className={styles.img} />
                }
              >
                <div className={styles.question}>{faq.question}</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.answer}>{faq.answer}</div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
