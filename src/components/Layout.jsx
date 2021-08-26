import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useStaticQuery, graphql } from "gatsby";
import { layout, header, heading } from "../styles/layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        info: siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={layout}>
      <title>{`${pageTitle} | ${title}`}</title>
      <header className={header}>{title}</header>
      <Navbar />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
