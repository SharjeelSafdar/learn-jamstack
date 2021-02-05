import React, { FC } from "react";
import { RouteComponentProps, Link } from "@reach/router";

import Layout from "./Layout";

const Client1: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <h2>This is client page 1.</h2>
      <br />
      <Link to="/app/">App Home</Link>
    </Layout>
  );
};

export default Client1;
