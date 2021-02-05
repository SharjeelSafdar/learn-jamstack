import React, { FC } from "react";
import { Link } from "gatsby";

interface ListLinkProps {
  to: string;
}

export const ListLink: FC<ListLinkProps> = ({ to, children }) => (
  <li
    style={{
      display: "inline-block",
      marginRight: "1rem",
    }}
  >
    <Link
      to={to}
      style={{
        fontSize: "1.5rem",
        color: "white",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  </li>
);

const MyHeader: FC = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, display: "inline-block" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          My First Gatsby App
        </Link>
      </h1>
      <ul
        style={{
          listStyle: "none",
          float: "right",
          margin: "2px 0",
          padding: 0,
        }}
      >
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/app/">App</ListLink>
        <ListLink to="/app/client-page1/">Client1</ListLink>
        <ListLink to="/desc/">Desc</ListLink>
        <ListLink to="/my-dynamic-page/">Dynamic</ListLink>
        <ListLink to="/contentful/">Contentful</ListLink>
      </ul>
    </div>
  </header>
);

export default MyHeader;
