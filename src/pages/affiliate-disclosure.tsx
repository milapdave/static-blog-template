import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Layout } from "../components/layout";
import { PostSnippet } from "../types";
import { FeaturePosts } from "../components/featurePosts";
import { RecentPosts } from "../components/recentPosts";
import { Pagination } from "../components/pagination";
import { SEO } from "../components/seo";


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___publishedDate], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
      }
    }
  }
`

const Home: FunctionComponent<Home> = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
console.log(data,'posts')
  return (
    <>
      <SEO title="Home" image="/logo.png"/>
      <Layout>
        {/* <FeaturePosts featurePosts={featuredPostData} /> */}
        {/* <RecentPosts recentPosts={recentPostData} /> */}
        {/* <Pagination next="/page/2" /> */}
      </Layout>
    </>
  );
};

export default Home;
