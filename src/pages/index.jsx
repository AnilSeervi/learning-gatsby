import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>Hello From Gatsby</h1>
      <StaticImage
        loading="lazy"
        src="../images/mac.jpg"
        alt="Image"
        placeholder="tracedSVG"
        aspectRatio={3 / 2}
      />
    </Layout>
  );
};

export default IndexPage;
