import React, { FC, useState, useEffect } from "react";
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
  const [msg, setMsg] = useState("No Data :(");
  const posts = data.allContentfulBlogPost.edges;

  useEffect(() => {
    (async () => {
      fetch("/.netlify/functions/hello?name=Sharjeel")
        .then(_ => _.json())
        .then((_: { message: string }) => {
          setMsg(_.message);
        });
    })();
  }, []);

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
      <Typography variant="h4" component="h2">
        {msg}
      </Typography>
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
