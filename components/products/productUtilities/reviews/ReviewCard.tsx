import React, { useState } from "react";
import styles from "./reviews.module.scss";
import { reviews } from "./reviewData";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import ShowMoreText from "react-show-more-text";
import StarIcon from "@mui/icons-material/Star";

const ReviewCard = () => {
  const [show, setShow] = useState(false);
  const seeAll = () => setShow(!show);

  return (
    <section className={styles.reviewCard}>
      <p className={styles.title}>Reviews</p>
      <div className={styles.reviews}>
        {(show ? reviews : reviews.slice(0, 2)).map((review, i) => (
          <div key={i} className={styles.review}>
            <div className={styles.profileContainer}>
              <Avatar src={review.image} className="profile" />
              <div className={styles.review_details}>
                <span className="name">{review.name}</span>
                <span>{review.location}</span>
              </div>
            </div>
            <div className={styles.stars}>
              <Box>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <StarIcon fontSize="small" key={index} />
                ))}
              </Box>
              <span className="">{review.day}</span>
            </div>
            <ShowMoreText
              more="READ MORE+"
              less="READ LESS"
              expanded={false}
              truncatedEndingComponent={"... "}
            >
              <p className={styles.reviewText}>{review.review}</p>
            </ShowMoreText>
          </div>
        ))}
      </div>
      {reviews.length > 2 && (
        <div className={styles.buttonContainer}>
          <button
            onClick={seeAll}
            className="border-2 border-white py-3 px-12 rounded-md"
          >
            {show ? "Show less" : "View all reviews"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ReviewCard;
