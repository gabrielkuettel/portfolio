import React from 'react';
import styles from './footer.module.css';

const Footer = props => (
   <footer className={styles.footer}>
      Designed and built by {` `}
      <a href="mailto:gkdesigndev@gmail.com">Gabriel Küttel</a> | Copyright
      &copy; {new Date().getFullYear()} |{' '}
      <a
         href="https://github.com/gabrielkuettel/portfolio"
         target="_blank"
         rel="noopener noreferrer"
      >
         View Source
      </a>
   </footer>
);

export default Footer;
