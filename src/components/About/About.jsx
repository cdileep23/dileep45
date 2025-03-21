import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>About <span className={styles.highlight}>Me</span></h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src={getImageUrl("about/aboutImage.png")}
              alt="Me sitting with a laptop"
              className={styles.aboutImage}
            />
            
          </div>
          <div className={styles.textContent}>
            <p className={styles.bio}>
              I'm a passionate developer focused on creating responsive, user-friendly applications. With a strong foundation in both frontend and backend technologies, I build complete solutions that deliver exceptional user experiences.
            </p>
            <div className={styles.aboutItems}>
              <div className={styles.aboutItem}>
                <div className={styles.iconWrapper}>
                  <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Frontend Developer</h3>
                  <p>
                    I create responsive, interactive and optimized web interfaces using modern technologies like React, Next.js, and CSS frameworks.
                  </p>
                </div>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.iconWrapper}>
                  <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Backend Developer</h3>
                  <p>
                    I build robust server-side applications, RESTful APIs, and database solutions using Node.js, Express, MongoDB, and SQL databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
