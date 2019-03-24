import React from "react";
import styles from "./footer.module.css";

const Footer = props => (
  <footer className={styles.footer}>
    Designed and built by {` `}
    <a href="mailto:gabrielkuettel@gmail.com">Gabriel Kuettel</a> (c){" "}
    {new Date().getFullYear()}
  </footer>
);

export default Footer;
