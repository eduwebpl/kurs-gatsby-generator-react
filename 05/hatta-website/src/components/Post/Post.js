import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`;

const Post = () => {
  const data = useStaticQuery(query);

  return <p>{data.site.siteMetadata.title}</p>;
};

export default Post;
