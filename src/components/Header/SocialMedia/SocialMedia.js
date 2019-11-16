import React from 'react';
import styles from './socialmedia.module.css';
import { displayIcon } from '../../../utils/icons';
import { graphql, useStaticQuery } from 'gatsby';

const SocialMedia = props => {
	const {
		site: {
			siteMetadata: { social },
		},
	} = useStaticQuery(SOCIAL_MEDIA_QUERY);

	return (
		<div
			className={styles.social}
			style={{ float: `right`, marginTop: `20px` }}
		>
			{social.map(({ type, url }) => {
				return (
					<a
						key={type}
						target="_blank"
						rel="noopener noreferrer"
						href={url}
						style={{ marginRight: `6px` }}
					>
						{displayIcon(type)}
					</a>
				);
			})}
		</div>
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
