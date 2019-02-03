import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../../utils/typography';
import Typist from '../Typist/Typist';

function Bio() {
   return (
      <StaticQuery
         query={bioQuery}
         render={data => {
            const { author, social } = data.site.siteMetadata;
            return (
               <div
                  style={{
                     display: `flex`,
                  }}
               >
                  <Image
                     fixed={data.avatar.childImageSharp.fixed}
                     alt={author}
                     style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        minWidth: 60,
                        borderRadius: `100%`
                     }}
                     imgStyle={{
                        borderRadius: `50%`
                     }}
                  />
                  <div
                     style={{
                        marginTop: `12px`
                     }}
                  >
                     <Typist />
                  </div>

               </div>
            );
         }}
      />
   );
}

const bioQuery = graphql`
   query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
         childImageSharp {
            fixed(width: 60, height: 60) {
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
