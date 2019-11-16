module.exports = {
	siteMetadata: {
		title: `Gabriel Kuettel's portfolio`,
		author: `Gabriel Kuettel`,
		description: `My portfolio where I showcase my most recent work.`,
		siteUrl: `https://gabrielkuettel.com/`,
		social: {
			email: `gabrielkuettel@gmail.com`,
			twitter: `https://twitter.com/GabrielKuettel`,
			github: `https://github.com/gabrielkuettel`,
			linkedin: `https://www.linkedin.com/in/gabrielkuettel`,
			behance: `https://www.behance.net/gabrielkuettel`,
			soundcloud: `https://soundcloud.com/gabrielkuettel`,
			vimeo: `https://vimeo.com/gabrielkuettel`,
		},
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
				icon: `content/assets/avatar.png`,
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
