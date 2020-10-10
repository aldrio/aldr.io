module.exports = {
  siteMetadata: {
    title: 'Brandon Aldrich',
    description: 'Brandon Aldrich.',
    baseUrl: 'aldr.io',
    githubUrl: 'https://github.com/aldrio/',
    sourceUrl: 'https://github.com/aldrio/aldr.io',
    pageTransitionMs: 150,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Brandon Aldrich',
        short_name: 'Brandon Aldrich',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#8C9D79',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        color: '#8C9D79',
        height: 3,
        includePaths: [],
        excludePaths: ['/'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'writeups',
        path: `${__dirname}/src/writeups`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 70,
              disableBgImageOnAlpha: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/components/Root/index.tsx`),
      },
    },
  ],
}
