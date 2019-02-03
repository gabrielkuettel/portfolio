import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import styles from './layout.module.css';
import Bio from './Bio/Bio.js';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Layout extends React.Component {
   render() {
      const { title, children } = this.props;

      return (
         <div
            style={{
               marginLeft: `auto`,
               marginRight: `auto`,
               maxWidth: rhythm(30),
               padding: `${rhythm(1 / 2)} ${rhythm(3 / 4)}`
            }}
         >
            <Header location={this.props.location} title={title} />

            <main>{children}</main>

            <Footer />
         </div>
      );
   }
}

export default Layout;
