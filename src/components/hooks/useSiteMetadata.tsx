import { graphql, useStaticQuery } from "gatsby";

interface SiteMetadata {
  title: string;
  affiliateUrl: string;
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            affiliateUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
