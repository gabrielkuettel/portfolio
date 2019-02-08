import React from 'react';

const Footer = props => (
   <footer>
      (c) {new Date().getFullYear()} by
      {` `}
      <a href="https://www.gatsbyjs.org">Gabriel Kuettel</a>
   </footer>
);

export default Footer;
