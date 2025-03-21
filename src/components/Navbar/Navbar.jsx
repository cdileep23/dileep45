import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoContainer}>
        <a className={styles.title} href="/">
          <span className={styles.logo}>D</span>
          <span className={styles.fullLogo}>ileep</span>
        </a>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" className={styles.menuLink}>About</a>
          </li>
          <li>
            <a href="#skills" className={styles.menuLink}>Skills</a>
          </li>
          <li>
            <a href="#projects" className={styles.menuLink}>Projects</a>
          </li>
          <li>
            <a href="#contact" className={styles.contactLink}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

