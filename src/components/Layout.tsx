import React, { FC } from "react";
import Header from "../components/Header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: "3rem auto",
          maxWidth: 650,
          padding: `0 1rem`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
