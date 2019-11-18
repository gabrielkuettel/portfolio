import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = ({ data, location }) => {
   const siteTitle = data.site.siteMetadata.title;
   return (
      <Layout location={location} title={siteTitle}>
         <SEO title="404: Not Found" />
         <h1>Woops! Did you get lost?</h1>
         <p>
            There's nothing to be found at {location.pathname}.{` `}
            <Link to="/">Go home?</Link>
         </p>
      </Layout>
   );
};

export default NotFoundPage;

export const pageQuery = graphql`
   query {
      site {
         siteMetadata {
            title
         }
      }
   }
`;
