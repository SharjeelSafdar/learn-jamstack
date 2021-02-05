import React, { FC } from "react";

import Layout from "../components/Layout";

interface DynamicPageProps {
  pageContext: {
    name: string;
  };
}

const DynamicPage: FC<DynamicPageProps> = ({ pageContext }) => {
  return (
    <Layout>
      <h2>{pageContext.name}</h2>
      <h2>My first dynamic page! :)</h2>
      <p>This page is dynamically created at build time.</p>
    </Layout>
  );
};

export default DynamicPage;
