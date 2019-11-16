import React from 'react';
import {
	FaBehance,
	FaTwitter,
	FaLinkedin,
	FaEnvelope,
	FaGithub,
	FaVimeo,
	FaSoundcloud,
} from 'react-icons/fa';

export const displayFaIcon = type => {
	switch (type) {
		case 'email':
			return <FaEnvelope />;
		case 'twitter':
			return <FaTwitter />;
		case 'github':
			return <FaGithub />;
		case 'linkedin':
			return <FaLinkedin />;
		case 'behance':
			return <FaBehance />;
		case 'soundcloud':
			return <FaSoundcloud />;
		case 'vimeo':
			return <FaVimeo />;
		default:
			return type;
	}
};
