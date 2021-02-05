import React, { FC } from "react";
import { PageProps } from "gatsby";
import { Typography } from "@material-ui/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/Layout";

type ContextType = {
  title: string;
  publishDate: string;
  content: string;
};

const BlogPost: FC<PageProps<object, ContextType>> = ({
  pageContext: blogPost,
}) => {
  return (
    <Layout>
      <Typography variant="h3" component="h1">
        {blogPost.title}
      </Typography>
      <Typography variant="subtitle1">{blogPost.publishDate}</Typography>
      <Typography variant="body1">
        {documentToReactComponents(JSON.parse(blogPost.content))}
      </Typography>
    </Layout>
  );
};

export default BlogPost;
