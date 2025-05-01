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
                <p>Click to check StudioX Privacy Policy</p>
              </div>

              <div className={styles.policy_tab} onClick={() => setPage(2)}>
                <LuCookie
                  style={{ fontSize: "2rem", marginBottom: "1.25rem" }}
                />
                <h5>Cookies</h5>
                <p>Click to check StudioX Cookies</p>
              </div>

              <div className={styles.policy_tab} onClick={() => setPage(3)}>
                <CiUser style={{ fontSize: "2rem", marginBottom: "1.25rem" }} />
                <h5>Terms of use</h5>
                <p>Click to check StudioX Terms of Use</p>
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
                StudioX (`&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                respects your privacy and is committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our platform, website, mobile application, and related
                services (collectively, the &quot;Services&quot;). By accessing
                or using our Services, you agree to the terms of this Privacy
                Policy.
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
                  We use cookies, web beacons, and similar technologies to
                  collect information about your use of our Services and to
                  improve your experience. You can control cookies through your
                  browser settings.
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
                    Providing Services: To facilitate bookings, process
                    payments, and provide customer support.
                  </li>
                  <li>
                    Personalization: To tailor our Services to your preferences
                    and enhance your experience.
                  </li>
                  <li>
                    Communication: To send you updates, promotional materials,
                    and other information related to our Services.
                  </li>
                  <li>
                    Security: To detect and prevent fraud, unauthorized access,
                    and other security issues.
                  </li>
                  <li>
                    Analytics: To analyze usage patterns and improve our
                    Services.
                  </li>
                  <li>
                    Legal Compliance: To comply with applicable laws,
                    regulations, and legal processes.
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
                    Service Providers: Third-party vendors who help us provide
                    and improve our Services, such as payment processors,
                    analytics providers, and marketing partners.
                  </li>
                  <li>
                    Business Partners: Partners who offer services or products
                    that complement our own, with your consent.
                  </li>
                  <li>
                    Legal Authorities: Government agencies or regulators when
                    required by law or to protect our rights and interests.
                  </li>
                </ol>
              </div>
            </div>

            <div className={styles.data}>
              <p className={styles.header}>4. Data Security</p>
              <div className={styles.info}>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  disclosure, alteration, and destruction. However, no security
                  system is impenetrable, and we cannot guarantee the absolute
                  security of your information.
                </p>
              </div>
            </div>

            <div className={styles.sharing}>
              <p className={styles.head}>5. Your Rights and Choices</p>
              <p className={styles.header}>5.1 Access and Update</p>
              <div className={styles.info}>
                <p>
                  You have the right to access and update your personal
                  information by logging into your account or contacting us
                  directly.
                </p>
              </div>
            </div>

            <div className={styles.sharing}>
              <p className={styles.header}>5.2 Data Deletion</p>
              <div className={styles.info}>
                <p>
                  You may request the deletion of your account and personal
                  information by contacting us. We will comply with your
                  request, subject to any legal obligations to retain certain
                  information.
                </p>
              </div>
            </div>

            <div className={styles.sharing}>
              <p className={styles.header}>5.3 Opt-Out</p>
              <div className={styles.info}>
                <p>
                  You may opt out of receiving promotional emails from us by
                  following the unsubscribe instructions in those emails. You
                  may also manage your communication preferences through your
                  account.
                </p>
              </div>
            </div>

            <div className={styles.transfers}>
              <p className={styles.header}>6. International Data Transfers</p>
              <div className={styles.info}>
                <p>
                  Your information may be transferred to and processed in
                  countries outside of your own, where privacy laws may be less
                  stringent. By using our Services, you consent to such
                  transfers and processing.
                </p>
              </div>
            </div>

            <div className={styles.privacy}>
              <p className={styles.header}>7. Children&apos;s Privacy</p>
              <div className={styles.info}>
                <p>
                  Our Services are not intended for children under the age of
                  18. We do not knowingly collect personal information from
                  children under 18. If we become aware that we have
                  inadvertently collected such information, we will delete it as
                  soon as possible.
                </p>
              </div>
            </div>

            <div className={styles.change}>
              <p className={styles.header}>8. Changes to This Privacy Policy</p>
              <div className={styles.info}>
                <p>
                  We may update this Privacy Policy from time to time, We will
                  notify you of any significant changes by posting the new
                  Privacy Policy on our website and updating the &quot;Last
                  Updated&quot; date. Your continued use of the Services after
                  any changes indicates your acceptance of the updated Privacy
                  Policy.
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
                  <li>Email: privacy@lamburghinie.com</li>
                  <li>Address: Alred Rewane Road, Ikoyi, Lagos, Nigeria</li>
                  <li>Phone: +234 7064000854</li>
                </ol>
                <p>
                  By using our Services, you acknowledge that you have read and
                  understood this Privacy Policy and agree to the collection,
                  use, and disclosure of your information as described herein.
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
              Our cookies enhance your browsing experience by tailoring
              recommendations and streamlining functionality. Manage preferences
              anytime in your account settings.
            </p>

            <div></div>
          </div>
        )}

        {page === 3 && (
          <div className={styles.policy_tab_two}>
            <h3>Terms of Use</h3>
            <p>Clear, Fair, and Reliable</p>
            <p>
              By using Wixxa, you agree to our terms designed to ensure a
              seamless, ethical, and enjoyable experience. We’re committed to
              protecting your rights and offering exceptional service.
            </p>

            <div></div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Page;
