import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";

type ResponseType = {
  allContentfulBlogPost: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        slug: string;
      };
    }>;
  };
};

const IndexPage: FC<PageProps<ResponseType>> = ({ data }) => {
  console.log(data);
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <h1>Hello World</h1>
      <br />
      <Typography variant="h3" component="h1">
        My Blogs
      </Typography>
      <ul>
        {posts.map(post => (
          <li key={post.node.id}>
            <Link to={`/blog-posts/${post.node.slug}/`}>
              <Typography variant="body1">{post.node.title}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query QuerySlugs {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

export default IndexPage;
