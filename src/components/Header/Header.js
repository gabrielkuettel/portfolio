import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './header.module.css';
import {
   FaBehance,
   FaLinkedin,
   FaEnvelope,
   FaGithub,
   FaVimeo,
   FaSoundcloud,
} from 'react-icons/fa';

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
                  href="https://www.linkedin.com/in/gabrielkuettel/"
                  style={{ marginRight: `6px` }}
               >
                  <FaLinkedin />
               </a>{' '}
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gabrielkuettel"
                  style={{ marginRight: `6px` }}
               >
                  <FaGithub />
               </a>{' '}
               <a
                  href="mailto:gkdesigndev@gmail.com"
                  style={{ marginRight: `10px` }}
               >
                  <FaEnvelope />
               </a>
               <a
                  href="https://www.behance.net/gabrielkuettel"
                  style={{ marginRight: `10px` }}
               >
                  <FaBehance />
               </a>
               <a
                  href="https://vimeo.com/gabrielkuettel"
                  style={{ marginRight: `6px` }}
               >
                  <FaVimeo />
               </a>
               <a
                  href="https://soundcloud.com/gabrielkuettel"
                  style={{ marginRight: `6px` }}
               >
                  <FaSoundcloud />
               </a>
            </div>
         </div>
      </header>
   );
};

export default Header;
