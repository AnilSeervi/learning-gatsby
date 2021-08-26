import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Created on: {data.mdx.frontmatter.date}</p>
      <p>{data.mdx.timeToRead} min read</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};
export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
      timeToRead
    }
  }
`;
export default BlogPost;
