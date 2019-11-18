import React, { Component } from 'react';
import { rhythm } from '../utils/typography';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Layout extends Component {
	render() {
		const { title, children } = this.props;

		return (
			<div
				style={{
					marginLeft: `auto`,
					marginRight: `auto`,
					maxWidth: rhythm(30),
					padding: `${rhythm(1 / 2)} ${rhythm(1 / 2)}`,
				}}
			>
				<Header location={this.props.location} title={title} />

				<main>{children}</main>

				<Footer />
			</div>
		);
	}
}

export default Layout;
