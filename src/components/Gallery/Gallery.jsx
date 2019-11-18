import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
	Container,
	Item,
	ImageContainer,
	ImageTitle,
	ImageSubtitle,
} from './styles';
import Image from '../Image/Image';

const Gallery = () => {
	const {
		allMarkdownRemark: { edges: galleryItems },
	} = useStaticQuery(GALLERY_QUERY);

	return (
		<Container>
			{galleryItems.map(({ node: galleryItem }) => {
				const {
					fields: { slug },
					frontmatter: { title, subtitle, feature },
				} = galleryItem;

				let { img: image } = galleryItem.frontmatter;

				image ? (image = image.relativePath) : (image = `placeholder.jpg`);

				return (
					<Item feature={feature} key={slug}>
						<ImageContainer>
							<Link to={slug}>
								<ImageTitle>{title}</ImageTitle>
								<Image src={image} />
								<ImageSubtitle>{subtitle}</ImageSubtitle>
							</Link>
						</ImageContainer>
					</Item>
				);
			})}
		</Container>
	);
};

const GALLERY_QUERY = graphql`
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

export default Gallery;
