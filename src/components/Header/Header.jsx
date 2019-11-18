import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar/Avatar';
import SocialMedia from './SocialMedia/SocialMedia';
import HeaderShadow from './HeaderShadow/HeaderShadow';

const Header = ({ location }) => {
	const Wrapper = styled.div`
		margin: 0;
		height: 95px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: rgba(242, 242, 242, 0.9);
		z-index: 1000;
	`;

	const Container = styled.header`
		display: flex;
		justify-content: space-between;
		max-width: 960px;
		padding: 1rem;
		margin: 0 auto;
	`;

	const { pathname } = location;

	return (
		<>
			<Wrapper>
				<Container>
					<Avatar pathname={pathname} />
					<SocialMedia />
				</Container>
			</Wrapper>
			<HeaderShadow />
		</>
	);
};

export default Header;
