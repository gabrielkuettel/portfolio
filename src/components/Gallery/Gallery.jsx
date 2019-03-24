import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styles from "./gallery.module.css";
import Image from "../Image/Image";

const Gallery = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            sort: { fields: [frontmatter___order], order: ASC }
          ) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  feature
                  subtitle
                  order
                  img {
                    id
                    relativePath
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className={styles.gridWrapper}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            let { slug } = node.fields,
              { title, subtitle, feature, img: image } = node.frontmatter;
            image ? (image = image.relativePath) : (image = `placeholder.jpg`);
            return (
              <div
                key={slug}
                className={feature ? styles.feature : styles.panel}
              >
                <div className={styles.imageContainer}>
                  <Link to={slug}>
                    <h4 className={styles.title}>{title}</h4>
                    <Image src={image} className={styles.image} />
                    <h5 className={styles.subtitle}>{subtitle}</h5>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    />
  );
};

export default Gallery;
