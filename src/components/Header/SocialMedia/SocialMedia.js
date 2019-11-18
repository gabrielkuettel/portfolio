import React from 'react';
import { displayFaIcon } from '../../../utils/icons';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
	float: right;
	margin-top: 20px;

	@media only screen and (max-device-width: 480px) {
		display: none;
	}
`;

const Icon = styled.a`
	margin-right: 6px;
`;

const SocialMedia = props => {
	const {
		site: {
			siteMetadata: { social },
		},
	} = useStaticQuery(SOCIAL_MEDIA_QUERY);

	return (
		<Container>
			{social.map(({ type, url }) => {
				return (
					<Icon
						key={type}
						target="_blank"
						rel="noopener noreferrer"
						href={url}
					>
						{displayFaIcon(type)}
					</Icon>
				);
			})}
		</Container>
	);
};

const SOCIAL_MEDIA_QUERY = graphql`
	query socialMedia {
		site {
			siteMetadata {
				social {
					type
					url
				}
			}
		}
	}
`;

export default SocialMedia;
