import React, { FC } from "react";
import { RouteComponentProps, Link } from "@reach/router";

import Layout from "./Layout";

const DefaultClient: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <h2>This is client default client page.</h2>
      <br />
      <Link to="/app/client-page1/">Client Page 1</Link>
    </Layout>
  );
};

export default DefaultClient;
