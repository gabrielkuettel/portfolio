import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import styles from './index.module.css';
import WebImage from '../components/Image/WebImage';
import Image from '../components/Image/Image';

class BlogIndex extends React.Component {
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
                  const slug = node.fields.slug.slice(1);
                  const title = node.frontmatter.title || node.fields.slug;
                  let image = 'placeholder.jpg';

                  if (node.frontmatter.img) {
                     image = node.frontmatter.img.relativePath;
                  }

                  console.log('image', image);

                  return (
                     <div
                        key={node.fields.slug}
                        className={
                           node.frontmatter.feature
                              ? styles.feature
                              : styles.panel
                        }
                     >
                        <Link to={node.fields.slug}>
                           {/* {title} */}
                           <Image src={image} />
                        </Link>
                     </div>
                     // <div key={node.fields.slug}>
                     //    <p>

                     //    </p>
                     //    <h3
                     //       style={{
                     //          marginBottom: rhythm(1 / 4)
                     //       }}
                     //    >
                     //       <Link
                     //          style={{ boxShadow: `none` }}
                     //          to={node.fields.slug}
                     //       >
                     //          {title}
                     //       </Link>
                     //    </h3>
                     //    <small>{node.frontmatter.date}</small>
                     //    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                     // </div>
                  );
               })}

               <div className={styles.footer} />
            </div>
         </Layout>
      );
   }
}

export default BlogIndex;

export const pageQuery = graphql`
   query {
      site {
         siteMetadata {
            title
         }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
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
