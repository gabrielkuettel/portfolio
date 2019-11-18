import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar/Avatar';
import SocialMedia from './SocialMedia/SocialMedia';

const Header = ({ location }) => {
	const Container = styled.header`
		height: 75px;
		display: flex;
		justify-content: space-between;
	`;

	const { pathname } = location;

	return (
		<Container>
			<Avatar pathname={pathname} />
			<SocialMedia />
		</Container>
	);
};

export default Header;
