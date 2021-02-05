import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Typography } from "@material-ui/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/Layout";

type ResponseType = {
  allContentfulBlogPost: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        publishDate: string;
        content: {
          raw: string;
        };
      };
    }>;
  };
};

const Contentful: FC<PageProps<ResponseType>> = ({ data }) => {
  return (
    <Layout>
      <Typography variant="h3" component="h1">
        {data.allContentfulBlogPost.edges[2].node.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {data.allContentfulBlogPost.edges[2].node.publishDate}
      </Typography>
      <Typography variant="body1">
        {documentToReactComponents(
          JSON.parse(data.allContentfulBlogPost.edges[2].node.content.raw)
        )}
      </Typography>
    </Layout>
  );
};

export const myQuery = graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          publishDate
          content {
            raw
          }
        }
      }
    }
  }
`;

export default Contentful;
