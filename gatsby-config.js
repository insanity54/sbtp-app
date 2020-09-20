module.exports = {
  siteMetadata: {
    title: `Sakura Blossom Trading Post`,
    branding: `SBTP.XYZ`,
    description: `Online trading card shop which specializes in Precious Memories Japanese anime collectible cards`,
    author: `Chris Grimmett <chris@grimtech.net>`,
    apiURL: (process.env.NODE_ENV === 'production') ? 'https://sbtp.xyz' : 'http://localhost:1337'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        ref: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // I'm using @denisgoryaynov's fork in plugins/gatsby-source-strap because it supports contentTypes with multiple images.
    // once https://github.com/strapi/gatsby-source-strapi/pull/118/ is merged, I can switch back to official gatsby-source-strapi
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffcccc`,
        theme_color: `#ffcccc`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
       resolve: `gatsby-plugin-create-client-paths`,
       options: { prefixes: [`/user/*`, `/connect/*`] },
     },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
