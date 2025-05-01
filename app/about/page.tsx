import React from "react";
import Image from "next/image";
import styles from "@/components/styles/about.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={`contain ${styles.welcome_container}`}>
        <div className={styles.welcome_info}>
          <h1>Welcome to FuniMate</h1>
          <p className={styles.welcome_info_p}>
            Welcome to FuniMate, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Facere fugiat nisi vel nihil corporis eaque vero commodi quibusdam corrupti natus soluta reiciendis, 
            possimus maxime iusto omnis? Commodi explicabo reprehenderit iure.
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
              FuniMate Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ullam debitis eaque voluptatem eius, ad beatae commodi nostrum illo, 
              distinctio reprehenderit inventore perferendis eum reiciendis porro ipsam magni, nulla quis officia?
            </p>
          </div>
        </div>
      </div>

      <div className={styles.about_two}>
        <div className={`contain ${styles.about_two_container}`}>
          <div className={styles.vision}>
            <h1>Our Vision</h1>
            <p className={styles.p}>
              At FuniMate, Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Excepturi voluptatem doloribus alias quam, velit officiis? Explicabo ratione expedita magnam amet, 
              cupiditate libero suscipit pariatur velit!
            </p>
          </div>

          <div className={styles.vision_info}>
            <div className={styles.vision_info_container}>
              <div className={styles.vision_info_one}>
                <h3>Commitment to Sustainability</h3>
                <p className={styles.p}>
                  FuniMate Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Ab error perspiciatis nisi, illum aliquid ipsum dolorem, 
                  libero sed fuga nesciunt corporis impedit sunt nam quas?
                </p>
              </div>

              <div className={styles.vision_info_one}>
                <h3>Pioneering Technology</h3>
                <p className={styles.p}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odit, sapiente repellat totam 
                  saepe est suscipit mollitia praesentium ex dignissimos, asperiores iste, 
                  aliquam deleniti modi excepturi voluptates dolores. 
                  Iste, harum.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Rem veritatis a voluptates corporis ipsam. 
                  Eum earum iusto temporibus et, iste voluptate, rerum id sit, 
                  doloremque officia nobis dicta impedit ad!
                </p>
              </div>
              <div className={styles.vision_info_one}>
                <h3>Recognition and Awards</h3>
                <p className={styles.p}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis quibusdam expedita? 
                  Pariatur ab voluptatibus fuga quae molestiae eaque perferendis dignissimos? 
                  Eum consequatur minus, dolorum corrupti vel fugiat sit rem.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid praesentium eveniet placeat nesciunt aut modi eos illo labore aliquam dolorem explicabo corporis, dolorum beatae commodi consequuntur iusto odit. Quae, ullam.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis laborum provident perferendis sunt eius impedit facere tenetur numquam inventore repellat placeat, distinctio earum quaerat qui eum quidem nihil voluptate assumenda.
          </p>
          <button className={styles.join_button}>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
