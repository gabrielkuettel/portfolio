module.exports = {
	siteMetadata: {
		title: `Gabriel Kuettel's portfolio`,
		author: `Gabriel Kuettel`,
		email: `gabrielkuettel@gmail.com`,
		description: `My portfolio where I showcase my most recent work.`,
		siteUrl: `https://gabrielkuettel.com/`,
		siteRepo: `https://github.com/gabrielkuettel/portfolio`,
		welcomeMessage: [
			`Hi!`,
			`I'm Gabriel...`,
			`I'm a frontend developer...`,
			`And graphic designer...`,
			`Welcome to my portfolio!`,
		],
		social: [
			{
				type: `email`,
				url: `mailto:gabrielkuettel@gmail.com`,
			},
			{
				type: `twitter`,
				url: `https://twitter.com/GabrielKuettel`,
			},
			{
				type: `github`,
				url: `https://github.com/gabrielkuettel`,
			},
			{
				type: `linkedin`,
				url: `https://www.linkedin.com/in/gabrielkuettel`,
			},
			{
				type: `behance`,
				url: `https://www.behance.net/gabrielkuettel`,
			},
			{
				type: `soundcloud`,
				url: `https://soundcloud.com/gabrielkuettel`,
			},
			{
				type: `vimeo`,
				url: `https://vimeo.com/gabrielkuettel`,
			},
		],
	},
	plugins: [
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-150824763-1`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gabriel Küttel Portfolio`,
				short_name: `GK Portfolio`,
				start_url: `/`,
				background_color: `#f2f2f2`,
				theme_color: `#f92300`,
				display: `standalone`,
				icon: `content/assets/avatar-icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
};
