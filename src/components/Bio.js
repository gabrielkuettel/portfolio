import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FaMountain } from 'react-icons/fa';
import { rhythm } from '../utils/typography';
import Typist from './Typist';
import { relative } from 'path';

function Bio() {
   return (
      <StaticQuery
         query={bioQuery}
         render={data => {
            const { author, social } = data.site.siteMetadata;
            return (
               <>
                  <div
                     style={{
                        display: `flex`,
                        marginBottom: rhythm(2.5)
                     }}
                  >
                     <Image
                        fixed={data.avatar.childImageSharp.fixed}
                        alt={author}
                        style={{
                           marginRight: rhythm(1 / 2),
                           marginBottom: 0,
                           minWidth: 50,
                           borderRadius: `100%`
                        }}
                        imgStyle={{
                           borderRadius: `50%`
                        }}
                     />
                     <p style={{
                        marginTop: `10px`
                     }}><Typist /></p>
                  </div>
                  {/* <p>
                     Portfolio for <strong>{author}</strong> who lives and works
                     in Boulder, Colorado. <FaMountain />
                     {` `}
                  </p> */}
               </>
            );
         }}
      />
   );
}

const bioQuery = graphql`
   query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
         childImageSharp {
            fixed(width: 50, height: 50) {
               ...GatsbyImageSharpFixed
            }
         }
      }
      site {
         siteMetadata {
            author
            social {
               twitter
            }
         }
      }
   }
`;

export default Bio;
