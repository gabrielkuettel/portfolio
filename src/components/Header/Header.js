import React from "react";
import { rhythm, scale } from "../../utils/typography";
import { Link } from "gatsby";
import Bio from "../Bio/Bio";
import styles from "./header.module.css";
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const pathname = location.pathname;

  let header;

  // if (location.pathname === rootPath) {
  //    header = (
  //       <h1
  //          style={{
  //             ...scale(1.5),
  //             marginBottom: rhythm(1.5),
  //             marginTop: 0
  //          }}
  //       >
  //          <Link
  //             style={{
  //                boxShadow: `none`,
  //                textDecoration: `none`,
  //                color: `inherit`
  //             }}
  //             to={`/`}
  //          >
  //             {title}
  //          </Link>
  //       </h1>
  //    );
  // } else {
  //    header = (
  //       <h3
  //          style={{
  //             fontFamily: `Montserrat, sans-serif`,
  //             marginTop: 0
  //          }}
  //       >
  //          <Link
  //             style={{
  //                boxShadow: `none`,
  //                textDecoration: `none`,
  //                color: `inherit`
  //             }}
  //             to={`/`}
  //          >
  //             {title}
  //          </Link>
  //       </h3>
  //    );
  // }

  return (
    <header>
      <div style={{ height: `75px` }}>
        <div style={{ float: `left` }}>
          <Bio pathname={pathname} />
        </div>
        <div
          className={styles.social}
          style={{ float: `right`, marginTop: `20px` }}
        >
          <a
            target="_blank"
            href="https://twitter.com/GabrielKuettel"
            style={{ marginRight: `6px` }}
          >
            <FaTwitter />
          </a>{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gabrielkuettel/"
            style={{ marginRight: `6px` }}
          >
            <FaLinkedin />
          </a>{" "}
          <a
            target="_blank"
            href="https://github.com/gabrielkuettel"
            style={{ marginRight: `6px` }}
          >
            <FaGithub />
          </a>{" "}
          <a
            target="_blank"
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
