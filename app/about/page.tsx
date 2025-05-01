import React from "react";
import Image from "next/image";
import styles from "@/components/styles/about.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={`contain ${styles.welcome_container}`}>
        <div className={styles.welcome_info}>
          <h1>Welcome to StudioX</h1>
          <p className={styles.welcome_info_p}>
            Welcome to StudioX, where innovation meets inspiration in the realm
            of home improvement. We are a dynamic team of visionaries,
            designers, engineers, and creators dedicated to revolutionizing the
            way you experience and enhance your living spaces.
          </p>
        </div>
        <Image
          width={1280}
          height={560}
          src="/images/about/image-1.png"
          alt="about-img"
          className={styles.welcome_img}
        />
      </div>

      <div className={`contain ${styles.who}`}>
        <div className={styles.who_container}>
          <Image
            width={630}
            height={450}
            src="/images/about/image-2.png"
            alt="about-img"
            className={styles.who_img}
          />
          <div className={styles.who_container_info}>
            <h2>Who We Are</h2>
            <p>
              StudioX is a pioneering force in the home improvement industry,
              leveraging cutting-edge technology to transform homes into havens
              of style, comfort, and sustainability. Our journey began as a
              seed-stage startup fueled by a passion for design and a commitment
              to environmental stewardship. Today, we stand as a beacon of
              innovation, proudly recognized by the World Bank for our
              exceptional contributions to environmental safety.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.about_two}>
        <div className={`contain ${styles.about_two_container}`}>
          <div className={styles.vision}>
            <h1>Our Vision</h1>
            <p className={styles.p}>
              At StudioX, we believe that every home should be a sanctuary that
              reflects the unique essence of its inhabitants. Our mission is to
              empower individuals and families to create their dream homes
              through a blend of advanced technology, sustainable practices, and
              human ingenuity.
            </p>
          </div>

          <div className={styles.vision_info}>
            <div className={styles.vision_info_container}>
              <div className={styles.vision_info_one}>
                <h3>Commitment to Sustainability</h3>
                <p className={styles.p}>
                  StudioX is deeply committed to the United Nations Sustainable
                  Development Goals (SDGs). Our STDX Zero Emission Program is a
                  testament to our dedication to reducing our carbon footprint
                  and promoting eco-friendly practices. From sourcing
                  sustainable materials to implementing energy-efficient
                  technologies, we strive to make a positive impact on the
                  environment.
                </p>
              </div>

              <div className={styles.vision_info_one}>
                <h3>Pioneering Technology</h3>
                <p className={styles.p}>
                  Our state-of-the-art 3D Design Studio allows customers to
                  visualize and customize their spaces with unparalleled
                  precision. From minimalist furniture pieces that marry form
                  and function to smart home gadgets that simplify everyday
                  tasks, our products are designed to elevate your living
                  experience.
                </p>
              </div>
            </div>

            <Image
              width={1270}
              height={450}
              src="/images/about/image-3.png"
              alt="about-img"
              style={{ marginBottom: "3.5rem", width: "100%", height: "100%" }}
            />

            <div className={styles.vision_info_container}>
              <div className={styles.vision_info_one}>
                <h3>Training School</h3>
                <p className={styles.p}>
                  We are not just a company; we are a learning hub. Our Training
                  School is a cradle for budding designers, technologists, and
                  innovators. Through comprehensive virtual and field training
                  programs, we equip the next generation of talent with the
                  skills and knowledge needed to lead in the home improvement
                  industry.
                </p>
              </div>
              <div className={styles.vision_info_one}>
                <h3>Recognition and Awards</h3>
                <p className={styles.p}>
                  Our unwavering commitment to environmental safety and
                  innovation has earned us prestigious accolades, including the
                  World Bank Award for Environmental Safety. This recognition
                  underscores our efforts to create a safer, greener world for
                  future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`contain ${styles.team}`}>
        <div className={styles.team_container}>
          <div className={styles.team_container_info}>
            <h2>Our Team</h2>
            <p>
              Whether you are a homeowner looking to transform your space, a
              designer seeking inspiration, or an aspiring innovator ready to
              learn, StudioX welcomes you. Join us on our journey to create
              homes that are not just places to live but spaces to love
            </p>
          </div>
          <Image
            width={630}
            height={430}
            src="/images/about/image-4.png"
            alt="about-img"
            style={{ width: "100%", height: "100%", maxWidth: "630px" }}
          />
        </div>
      </div>

      <div className={`contain ${styles.join}`}>
        <div className={styles.join_container}>
          <h3 className="section-title">Join Us</h3>
          <p className={styles.join_container_p}>
            Whether you are a homeowner looking to transform your space, a
            designer seeking inspiration, or an aspiring innovator ready to
            learn, StudioX welcomes you. Join us on our journey to create homes
            that are not just places to live but spaces to love
          </p>
          <button className={styles.join_button}>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
