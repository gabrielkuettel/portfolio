import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const renderImage = file => {
  return (
    <Img
      fluid={file.node.childImageSharp.fluid}
      style={{
        height: `100%`,
        width: `100%`,
        objectFit: `cover`
      }}
    />
  );
};

const Image = ({ src }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(images.edges.find(image => image.node.relativePath === src))
      }
    />
  );
};

export default Image;
