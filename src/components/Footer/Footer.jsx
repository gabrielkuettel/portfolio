import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
	const Container = styled.footer`
		margin-top: 1rem;
		font-size: 0.8rem;
		text-align: center;
	`;

	const {
		site: {
			siteMetadata: { author, email, siteRepo },
		},
	} = useStaticQuery(FOOTER_QUERY);

	return (
		<Container>
			Designed and built by {` `}
			<a href={`mailto:${email}`}>{author}</a> | Copyright &copy;{' '}
			{new Date().getFullYear()} |{' '}
			<a href={siteRepo} target="_blank" rel="noopener noreferrer">
				View Source
			</a>
		</Container>
	);
};

const FOOTER_QUERY = graphql`
	query footerQuery {
		site {
			siteMetadata {
				email
				author
				siteRepo
			}
		}
	}
`;

export default Footer;
