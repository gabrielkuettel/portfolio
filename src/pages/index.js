import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styles from "./index.module.css";
import Image from "../components/Image/Image";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <div className={styles.gridWrapper}>
          {posts.map(({ node }) => {
            let { slug } = node.fields,
              { title, subtitle, feature, img: image } = node.frontmatter;
            image ? (image = image.relativePath) : (image = "placeholder.jpg");

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
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
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
`;
