import React from 'react';
import { rhythm, scale } from '../../utils/typography';
import { Link } from 'gatsby';
import Bio from '../Bio/Bio';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = ({ location, title }) => {
   const rootPath = `${__PATH_PREFIX__}/`;
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
         <div style={{ height: `8vh`, padding: `0 20px` }}>
            <div style={{ float: `left` }}>
               <Bio />
            </div>
            <div style={{ float: `right`, marginTop: `10px` }}>
               <a href="/">
                  <FaTwitter />
               </a>{' '}
               <a href="/">
                  <FaLinkedin />
               </a>{' '}
               <a href="/">
                  <FaEnvelope />
               </a>
            </div>
         </div>
      </header>
   );
};

export default Header;
