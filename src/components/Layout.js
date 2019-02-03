import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import styles from './layout.module.css';
import Bio from './Bio.js';

class Layout extends React.Component {
   render() {
      const { location, title, children } = this.props;
      const rootPath = `${__PATH_PREFIX__}/`;
      let header;

      if (location.pathname === rootPath) {
         header = (
            <h1
               style={{
                  ...scale(1.5),
                  marginBottom: rhythm(1.5),
                  marginTop: 0
               }}
            >
               <Link
                  style={{
                     boxShadow: `none`,
                     textDecoration: `none`,
                     color: `inherit`
                  }}
                  to={`/`}
               >
                  {title}
               </Link>
            </h1>
         );
      } else {
         header = (
            <h3
               style={{
                  fontFamily: `Montserrat, sans-serif`,
                  marginTop: 0
               }}
            >
               <Link
                  style={{
                     boxShadow: `none`,
                     textDecoration: `none`,
                     color: `inherit`
                  }}
                  to={`/`}
               >
                  {title}
               </Link>
            </h3>
         );
      }

      return (
         <div
            style={{
               marginLeft: `auto`,
               marginRight: `auto`,
               maxWidth: rhythm(40),
               padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
            }}
         >
            <div className={styles.gridWrapper}>
               <div className={styles.feature}>
                  <Bio />
               </div>

               <div className={styles.panel}>Project A</div>
               <div className={styles.panel}>Project B</div>
               <div className={styles.panel}>Project C</div>
               <div className={styles.panel}>Project D</div>
               <div className={styles.panel}>Project E</div>
               <div className={styles.panel}>Project F</div>
               <div className={styles.panel}>Project G</div>
               <div className={styles.panel}>Project H</div>

               {/* <main>{children}</main> */}

               <footer className={styles.footer}>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
               </footer>
            </div>
         </div>
      );
   }
}

export default Layout;
