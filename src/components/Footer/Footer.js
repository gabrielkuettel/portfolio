import React from 'react';
import styled from 'styled-components';

const Footer = props => {
	const Container = styled.footer`
		margin-top: 1rem;
		font-size: 0.8rem;
		text-align: center;
	`;

	return (
		<Container>
			Designed and built by {` `}
			<a href="mailto:gkdesigndev@gmail.com">Gabriel Küttel</a> | Copyright
			&copy; {new Date().getFullYear()} |{' '}
			<a
				href="https://github.com/gabrielkuettel/portfolio"
				target="_blank"
				rel="noopener noreferrer"
			>
				View Source
			</a>
		</Container>
	);
};

export default Footer;
