import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { join } from "path";

// https://ogp.me/#types

type SEO = {
  affiliateUrl?: string;
  lang?: string;
  meta?: any;
  keywords?: any;
  title: string;
  type?: "website" | "article" | "blog";
  image?: string;
};

export const SEO: React.FunctionComponent<SEO> = ({
  affiliateUrl,
  lang = "en",
  meta,
  keywords,
  title,
  image,
  type = "website",
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            affiliateUrl
          }
        }
      }
    `
  );

  const imagePath = image ? join(siteMetadata.siteUrl, image) : undefined;

  const metaAffiliateUrl = affiliateUrl || siteMetadata.affiliateUrl;

  const metaFinal = [
    {
      name: `affiliateUrl`,
      content: metaAffiliateUrl,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:affiliateUrl`,
      content: metaAffiliateUrl,
    },
    {
      property: `og:type`,
      content: type,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:affiliateUrl`,
      content: metaAffiliateUrl,
    },
  ];

  if (keywords && keywords.length) {
    metaFinal.push({
      name: `keywords`,
      content: keywords.join(`, `),
    });
  }

  if (meta) {
    metaFinal.concat(meta);
  }

  if (imagePath) {
    metaFinal.push({
      property: `og:title`,
      content: imagePath,
    });
    metaFinal.push({
      name: `twitter:image`,
      content: imagePath,
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title} | ${siteMetadata.title}`}
      meta={metaFinal}
    />
  );
};
