import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
{
  site {
    siteMetadata {
      description
    }
  }
}
`;

const Post = () => {
  const data = useStaticQuery(query);

  return <p>{data.site.siteMetadata.description}</p>;
};

export default Post;
