import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../../utils/typography';

function ProjectImage() {
   return (
      <StaticQuery
         query={imageQuery}
         render={data => {
            const { author, social } = data.site.siteMetadata;
            return (
               <Image
                  fixed={data.image.childImageSharp.fixed}
                  alt={author}
                  style={{
                     height: `100%`,
                     width: `100%`,
                     objectFit: `cover`,
                  }}
               />
            );
         }}
      />
   );
}

const imageQuery = graphql`
   query imageQuery {
      image: file(relativePath: { regex: "/me.jpg/" }) {
         childImageSharp {
            fixed(width: 1000, height: 1000) {
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

export default ProjectImage;
