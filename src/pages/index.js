import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery/Gallery";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    console.log(siteTitle);
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[
            `gabriel kuettel`,
            `web development`,
            `fullstack`,
            `react`,
            `frontend`,
            `backend`,
            `motion design`
          ]}
        />
        <Gallery />
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
  }
`;
