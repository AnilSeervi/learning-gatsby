import React from "react";
import Layout from "../../components/Layout";
import { graphql, useStaticQuery, Link } from "gatsby";

const Blog = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  `);

  return (
    <Layout pageTitle="My Blog Posts">
      {allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export default Blog;
