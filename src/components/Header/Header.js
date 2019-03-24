import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./header.module.css";
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Header = ({ location, phrases, title }) => {
  const pathname = location.pathname;

  let header;

  return (
    <header>
      <div style={{ height: `75px` }}>
        <div style={{ float: `left` }}>
          <Avatar pathname={pathname} phrases={phrases} />
        </div>
        <div
          className={styles.social}
          style={{ float: `right`, marginTop: `20px` }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/GabrielKuettel"
            style={{ marginRight: `6px` }}
          >
            <FaTwitter />
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/gabrielkuettel/"
            style={{ marginRight: `6px` }}
          >
            <FaLinkedin />
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/gabrielkuettel"
            style={{ marginRight: `6px` }}
          >
            <FaGithub />
          </a>{" "}
          <a
            href="mailto:gabrielkuettel@gmail.com"
            style={{ marginRight: `6px` }}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
