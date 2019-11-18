import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Gallery from '../components/Gallery/Gallery';

class Index extends Component {
	render() {
		const { data, location } = this.props;
		const siteTitle = data.site.siteMetadata.title;
		return (
			<Layout location={location} title={siteTitle}>
				<SEO
					title={siteTitle}
					keywords={[
						`gabriel kuettel`,
						`gabriel kuttel`,
						`gabriel küttel`,
						`web development`,
						`fullstack`,
						`react`,
						`frontend`,
						`backend`,
						`motion design`,
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
