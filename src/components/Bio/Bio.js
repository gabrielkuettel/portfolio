import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../../utils/typography';
import Typist from '../Typist/Typist';

const Bio = ({ pathname }) => {
   return (
      <StaticQuery
         query={bioQuery}
         render={data => {
            const { author, social } = data.site.siteMetadata;
            return (
               <div
                  style={{
                     display: `flex`
                  }}
               >
                  <Link to="/">
                     <Image
                        fixed={data.avatar.childImageSharp.fixed}
                        alt={author}
                        style={{
                           marginRight: rhythm(1 / 2),
                           marginBottom: 0,
                           maxWidth: 60,
                           maxHeight: 60,
                           borderRadius: `50%`
                        }}
                        imgStyle={{
                           objectFit: `cover`
                        }}
                     />
                  </Link>
                  <div
                     style={{
                        marginTop: `12px`
                     }}
                  >
                     <Typist pathname={pathname} />
                  </div>
               </div>
            );
         }}
      />
   );
};

const bioQuery = graphql`
   query BioQuery {
      avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
         childImageSharp {
            fixed(width: 100, height: 100) {
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
