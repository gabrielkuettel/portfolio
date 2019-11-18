import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeaderShadow = () => {
	const Container = styled.div`
		height: 70px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 999;
		background: ${props =>
			props.scrollPosition ? `rgba(242, 242, 242, 0.95)` : `none`};
		box-shadow: ${props =>
			props.scrollPosition ? `0px 7px 30px rgba(0, 0, 0, 0.3)` : `none`};
	`;

	useEffect(() => {
		console.log('useEffect fired');
		window.addEventListener('scroll', handleScroll);
		// setScroll(true);
	}, []);

	const [scroll, setScroll] = useState(false);

	const handleScroll = event => {
		console.log(window.scrollY);
		if (window.scrollY > 1) setScroll(true);
		if (window.scrollY < 1) setScroll(false);
	};

	return (
		<>
			<Container scrollPosition={scroll} />
		</>
	);
};

export default HeaderShadow;
