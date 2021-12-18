import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Layout } from "../components/layout";
import { PostSnippet } from "../types";
import { FeaturePosts } from "../components/featurePosts";
import { RecentPosts } from "../components/recentPosts";
import { Pagination } from "../components/pagination";
import { SEO } from "../components/seo";


const Home: FunctionComponent<Home> = ({ data }) => {
  return (
    <>
      <SEO title="Home" image="/logo.png"/>
      <Layout>
        
      </Layout>
    </>
  );
};

export default Home;
