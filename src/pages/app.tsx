import React from "react";
import { Router } from "@reach/router";

import DefaultClient from "../components/DefaultClient";
import ClientPage1 from "../components/Client1";

const App = () => {
  return (
    <Router basepath="/app/">
      <ClientPage1 path="/client-page1" />
      <DefaultClient path="/" />
    </Router>
  );
};

export default App;
