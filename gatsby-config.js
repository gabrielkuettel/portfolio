module.exports = {
   siteMetadata: {
      title: `Gabriel Küttel's portfolio`,
      author: `Gabriel Küttel`,
      description: `My portfolio where I showcase my most recent work.`,
      siteUrl: `https://gabrielkuettel.com/`,
      social: {
         twitter: `gabrielkuttel`,
      },
   },
   plugins: [
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
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: `UA-150824763-1`,
         },
      },
      `gatsby-plugin-feed`,
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
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      {
         resolve: `gatsby-plugin-typography`,
         options: {
            pathToConfigModule: `src/utils/typography`,
         },
      },
   ],
};
