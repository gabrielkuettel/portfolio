import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = ({ pathname }) => {
	const {
		site: {
			siteMetadata: { email, welcomeMessage },
		},
	} = useStaticQuery(EMAIL_QUERY);

	return (
		<Typing>
			{pathname === `${__PATH_PREFIX__}/` ? (
				<>
					{welcomeMessage.map(phrase => {
						return (
							<div key={phrase}>
								{phrase}
								<Typing.Delay ms={1000} />
								<Typing.Backspace count={phrase.length} />
							</div>
						);
					})}
					How can I <a href={`mailto:${email}`}>help?</a>
				</>
			) : (
				<>{pathname}</>
			)}
		</Typing>
	);
};

const EMAIL_QUERY = graphql`
	query emailQuery {
		site {
			siteMetadata {
				email
				welcomeMessage
			}
		}
	}
`;

export default AnimatedTypingComponent;
