"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./blog.module.scss";

const blogContent = [
  {
    id: 1,
    image: "/images/home/post1.png",
    title: "Setup your Home",
    author: "Josh James",
  },
  {
    id: 2,
    image: "/images/home/post2.png",
    title: "How Automation Work",
    author: "muyideen Andrew",
  },
  {
    id: 3,
    image: "/images/home/post3.png",
    title: "Setup your Home",
    author: "Josh James",
  },
];

const Blog = () => {
  const rowRef = useRef<any>(null);
  const [isMovedLeft, setIsMovedLeft] = useState(false);
  const [isMovedRight, setIsMovedRight] = useState(true);

  const handleScroll = (direction: any) => {
    setIsMovedLeft(true);
    setIsMovedRight(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
      let scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      if (scrollTo <= 0) {
        // Ensure we don't scroll beyond the left end
        scrollTo = 0;
        setIsMovedLeft(false);
        setIsMovedRight(true);
      }

      if (scrollTo >= scrollWidth - clientWidth) {
        // Ensure we don't scroll beyond the right end
        scrollTo = scrollWidth - clientWidth;
        setIsMovedLeft(true);
        setIsMovedRight(false);
      }
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className={`contain ${styles.blog}`}>
      <div className={styles.blog_text}>
        <h2>Blog Post</h2>
        <p>
          Creating a cozy living room is all about combining comfort with style.
          Here are five tips to help you transform your living space into a warm
          and inviting haven
        </p>
        <button className={styles.btn}>Learn more</button>
      </div>
      <div className={styles.image_slide}>
        <div className={styles.box}>
          <div ref={rowRef} className={styles.pics}>
            {blogContent.map((content: any, i: number) => (
              <div key={i} className={styles.pic}>
                <Image width={500} height={400} src={content.image} alt="img" />
                <div className={styles.content}>
                  <h3>{content.title}</h3>
                  <small>By {content.author}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
