const siteName = "Liimart India";
const siteShortName = "Liimart India";
const siteUrl = "https://geek.sg/";
const siteAffiliateUrl = "Liimart India template";
const siteKeyword = "";
const siteLogo = "logo.png";
const siteLogoFolder = `static/${siteLogo}`;

module.exports = {
  siteMetadata: {
    title: siteName,
    siteUrl,
    affiliateUrl: siteAffiliateUrl,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-46194652-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "contents",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteName,
        short_name: siteShortName,
        affiliateUrl: siteAffiliateUrl,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        lang: "en",
        start_url: "/",
        include_favicon: true,
        icon: siteLogoFolder, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName,
        defaultSiteImage: siteLogo,
        siteUrl,
        keywords: siteKeyword,
        globalSchema: `{
            "@type": "WebSite",
            "@id": "${siteUrl}",
            "url": "${siteUrl}",
            "name": "${siteName}",
            "publisher": {
              "@id": "${siteUrl}"
            },
            "image": {
              "@type": "ImageObject",
              "@id": "${siteUrl}${siteLogo}",
              "url": "${siteUrl}${siteLogo}",
              "caption": siteName
            }
          }`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
        noTrailingSlash: true,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
    },
    {
      resolve: `gatsby-plugin-slug`,
    },
  ],
};
