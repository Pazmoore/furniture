"use client";
import React, { useState } from "react";
import styles from "@/components/styles/policy.module.scss";
import { GoShield } from "react-icons/go";
import { LuCookie } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

const Page = () => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <section className="contain">
        {page === 0 && (
          <div className={styles.policy}>
            <h3>Privacy Policy</h3>

            <div className={styles.policy_tabs}>
              <div className={styles.policy_tab} onClick={() => setPage(1)}>
                <GoShield
                  style={{ fontSize: "2rem", marginBottom: "1.25rem" }}
                />
                <h5>Privacy Policy</h5>
                <p>Click to check FuniMate Privacy Policy</p>
              </div>

              <div className={styles.policy_tab} onClick={() => setPage(2)}>
                <LuCookie
                  style={{ fontSize: "2rem", marginBottom: "1.25rem" }}
                />
                <h5>Cookies</h5>
                <p>Click to check FuniMate Cookies</p>
              </div>

              <div className={styles.policy_tab} onClick={() => setPage(3)}>
                <CiUser style={{ fontSize: "2rem", marginBottom: "1.25rem" }} />
                <h5>Terms of use</h5>
                <p>Click to check FuniMate Terms of Use</p>
              </div>
            </div>
          </div>
        )}

        {page === 1 && (
          <div className={styles.policy_tab_one}>
            <div className={styles.heading}>
              <h1>Privacy Policy</h1>
              <p>Last Updated: June, 2024</p>
              <p className={styles.info}>
              FuniMate Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vero asperiores quaerat nulla quisquam explicabo iusto rem, architecto repellendus vitae!
              </p>
            </div>

            <div className={styles.information}>
              <p className={styles.head}>1. Information We Collect</p>
              <p className={styles.header}>1.1 Personal Information</p>
              <div className={styles.info}>
                <p>
                  We may collect the following personal information from you
                  when you use our Services:
                </p>
                <ol>
                  <li>
                    Contact Information: Name, email address, phone number, and
                    mailing address.
                  </li>
                  <li>
                    Account Information: Username, password, and profile
                    picture.
                  </li>
                  <li>
                    Payment Information: Credit card details, billing address,
                    and transaction history.
                  </li>
                  <li>
                    Identity Verification: Government-issued ID, date of birth,
                    and other verification information.
                  </li>
                </ol>
              </div>
            </div>

            <div className={styles.information_two}>
              <p className={styles.header}>1.2 Usage Information</p>
              <div className={styles.info}>
                <p>
                  We collect information about your interactions with our
                  Services, including:
                </p>
                <ol>
                  <li>
                    Device Information: IP address, browser type, operating
                    system, and device identifiers.
                  </li>
                  <li>
                    Log Information: Access times, pages viewed, and links
                    clicked.
                  </li>
                  <li>
                    Location Information: Geographic location based on IP
                    address or GPS data.
                  </li>
                </ol>
              </div>
            </div>

            <div className={styles.tracking}>
              <p className={styles.header}>
                1.3 Cookies and Tracking Technologies
              </p>
              <div className={styles.info}>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur, molestias quam ipsa quae maiores voluptatem veritatis? Id, laborum impedit.
                </p>
              </div>
            </div>

            <div className={styles.use}>
              <p className={styles.head}>2. How We Use Your Information</p>
              <div className={styles.info}>
                <p className={styles.header}>
                  We use the information we collect for the following purposes:
                </p>
                <ol>
                  <li>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, repellat.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores!
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolorum?
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, aliquam?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique..
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ex.
                  </li>
                </ol>
              </div>
            </div>

            <div className={styles.sharing}>
              <p className={styles.head}>3. Sharing Your Information</p>
              <div className={styles.info}>
                <p className={styles.header}>
                  We may share your information with the following parties:
                </p>
                <ol>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae doloremque ea suscipit labore dolorem aut, hic incidunt quos esse quam, saepe voluptas, consequatur ad..
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, tempora doloremque accusamus sint rem nobis?.
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, temporibus..
                  </li>
                </ol>
              </div>
            </div>

            <div className={styles.data}>
              <p className={styles.header}>4. Data Security</p>
              <div className={styles.info}>
                <p>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eaque ratione nemo corrupti, modi nam deserunt amet perspiciatis accusamus, doloribus suscipit recusandae vel beatae tempora magnam harum veniam nihil odio..
                </p>
              </div>
            </div>

            <div className={styles.sharing}>
              <p className={styles.head}>5. Your Rights and Choices</p>
              <p className={styles.header}>5.1 Access and Update</p>
              <div className={styles.info}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, assumenda molestias consequuntur possimus pariatur qui odio molestiae asperiores eum ad..
                </p>
              </div>
            </div>

            <div className={styles.sharing}>
              <p className={styles.header}>5.2 Data Deletion</p>
              <div className={styles.info}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusantium voluptas voluptatibus quis eligendi deleniti sunt facilis et eveniet unde?.
                </p>
              </div>
            </div>

            <div className={styles.sharing}>
              <p className={styles.header}>5.3 Opt-Out</p>
              <div className={styles.info}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio accusamus molestiae vero ratione perferendis quia consequatur. Ab, saepe quae..
                </p>
              </div>
            </div>

            <div className={styles.transfers}>
              <p className={styles.header}>6. International Data Transfers</p>
              <div className={styles.info}>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ullam error ex distinctio architecto. Doloribus deserunt sint pariatur dolorem cum..
                </p>
              </div>
            </div>

            <div className={styles.privacy}>
              <p className={styles.header}>7. Children&apos;s Privacy</p>
              <div className={styles.info}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eligendi, similique suscipit distinctio optio porro!.
                </p>
              </div>
            </div>

            <div className={styles.change}>
              <p className={styles.header}>8. Changes to This Privacy Policy</p>
              <div className={styles.info}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta hic consequuntur odio, laborum velit libero ipsum accusamus quod tenetur..
                </p>
              </div>
            </div>

            <div className={styles.contact}>
              <p className={styles.head}>9. Contact Us</p>
              <div className={styles.info}>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us at:
                </p>
                <ol>
                  <li>Email: privacy@FuniMate.com</li>
                  <li>Address: Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>Phone: +234 7064000854</li>
                </ol>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam recusandae, labore voluptatibus numquam voluptatum magni, aspernatur eligendi, totam possimus sed nihil libero! Itaque, debitis?.
                </p>
              </div>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className={styles.policy_tab_two}>
            <h3>Cookies Policy</h3>
            <p>Optimized Browsing, Personalized Experience</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste consequuntur sunt. Rem, quos beatae!.
            </p>

            <div></div>
          </div>
        )}

        {page === 3 && (
          <div className={styles.policy_tab_two}>
            <h3>Terms of Use</h3>
            <p>Clear, Fair, and Reliable</p>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum minus quo fugit cumque animi a nisi, perferendis aut blanditiis?.
            </p>

            <div></div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Page;
