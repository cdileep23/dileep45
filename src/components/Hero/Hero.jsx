import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>Hi, I'm</span> 
          <span className={styles.name}>Dileep</span>
        </h1>
        <p className={styles.description}>
          I'm a <span className={styles.highlight}>Full-stack developer</span> with expertise in the MERN stack, web development, and data-driven applications.
        </p>
        <div className={styles.buttonGroup}>
          <a href="mailto:cdileepkumar22@gmail.com" className={styles.contactBtn}>
            Contact Me <span className={styles.icon}>✉️</span>
          </a>
          <a href="#projects" className={styles.projectsBtn}>
            View Projects <span className={styles.icon}>👨‍💻</span>
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl("hero/profile.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.badge}>MERN Stack</div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.arrowContainer}>
          <span className={styles.arrow}></span>
        </div>
      </div>
    </section>
  );
};

