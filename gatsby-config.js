const path = require('path')
const tailwind = require('tailwindcss')

module.exports = {
  siteMetadata: {
    baseTitle: 'Henlo.',
    separator: '|',
    siteUrl: `localhost:8000`,
    title: 'Gatsby Starter',
    image: '',
    themeColor: '#fff',
    keyword: 'gatsby-starter, blazing fast static site',
    description: 'Blazing fast static site with Henlo',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwind,
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://semplicityinc.us11.list-manage.com/subscribe/post?u=4b615028e455dada63fba0204&amp;id=b54c018684', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '',
          anonymize: true,
        },
        facebookPixel: {
          pixelId: '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
