import React from 'react';
import { graphql } from 'gatsby';

const ArticlesPage = ({ data }) => (
  <>
    <h1>Articles</h1>
    {data.allMdx.nodes.map(item => (
      <>
        <h2>{item.frontmatter.title}</h2>
        <p>{item.frontmatter.author}</p>
        <p>{item.excerpt}</p>
      </>
    ))}
  </>
);

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export default ArticlesPage;
