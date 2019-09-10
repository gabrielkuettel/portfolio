import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import styles from "./blog-post.module.css";

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <div
          style={{
            background: `white`,
            padding: `${rhythm(1)} ${rhythm(1)}`
          }}
        >
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1)
            }}
          >
            {post.frontmatter.subtitle} | {post.frontmatter.tools} |{" "}
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <div
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              padding: 0,
              marginTop: `15px`
            }}
          >
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <button className={styles.btn}>
                  ⇐ {previous.frontmatter.title}
                </button>
              </Link>
            )}
            {next && (
              <Link to={next.fields.slug} rel="next">
                <button className={styles.btn}>
                  {next.frontmatter.title} ⇒
                </button>
              </Link>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tools
        subtitle
        date(formatString: "YYYY")
      }
    }
  }
`;
