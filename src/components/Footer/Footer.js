import React from 'react';
import styles from './footer.module.css';

const Footer = props => (
   <footer className={styles.footer}>
      (c) {new Date().getFullYear()} by
      {` `}
      <a href="https://www.gatsbyjs.org">Gabriel Kuettel</a>
   </footer>
);

export default Footer;
