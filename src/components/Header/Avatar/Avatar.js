import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Typist from '../Typist/Typist';

const Container = styled.div`
	display: flex;
`;

const TypistContainer = styled.div`
	margin-top: 0.8rem;
`;

const AvatarImg = styled(Image)`
	margin-right: 1rem;
	margin-bottom: 0;
	max-width: 60px;
	max-height: 60px;
	border-radius: 50%;
`;

const Avatar = ({ pathname, phrases }) => {
	const {
		site: {
			siteMetadata: { author },
		},
		avatarImage: {
			childImageSharp: { fixed: avatarImage },
		},
		avatarIcon: {
			childImageSharp: { fixed: avatarIcon },
		},
	} = useStaticQuery(AVATAR_QUERY);

	return (
		<Container>
			<Link to={pathname === '/' ? '/about-me' : '/'}>
				<AvatarImg
					fixed={pathname === '/' ? avatarImage : avatarIcon}
					alt={author}
					title={author}
				/>
			</Link>
			<TypistContainer>
				<Typist pathname={pathname} phrases={phrases} />
			</TypistContainer>
		</Container>
	);
};

const AVATAR_QUERY = graphql`
	query avatarQuery {
		avatarIcon: file(absolutePath: { regex: "/avatar-icon.png/" }) {
			childImageSharp {
				fixed(width: 100, height: 100) {
					...GatsbyImageSharpFixed
				}
			}
		}
		avatarImage: file(absolutePath: { regex: "/avatar-image.jpg/" }) {
			childImageSharp {
				fixed(width: 100, height: 100) {
					...GatsbyImageSharpFixed
				}
			}
		}
		site {
			siteMetadata {
				author
			}
		}
	}
`;

export default Avatar;
