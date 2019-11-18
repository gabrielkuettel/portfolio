import React from 'react';
import Avatar from './Avatar/Avatar';
import SocialMedia from './SocialMedia/SocialMedia';

const Header = ({ location, phrases, title }) => {
	const pathname = location.pathname;

	let header;

	return (
		<header>
			<div style={{ height: `75px` }}>
				<div style={{ float: `left` }}>
					<Avatar pathname={pathname} phrases={phrases} />
				</div>
				<SocialMedia style={{ float: `right` }} />
			</div>
		</header>
	);
};

export default Header;
