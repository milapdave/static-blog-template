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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-174154066-1", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "UA-174154066-1",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
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
