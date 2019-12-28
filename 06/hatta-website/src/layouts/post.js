import React from 'react';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

// export const query = graphql`
//   query querySingleArticle($slug: String!) {
//     mdx(frontmatter: {slug: {eq: $slug}}) {
//       frontmatter {
//         title
//         slug
//         author
//         featuredImage {
//           childImageSharp {
//             fixed(width: 500) {
//               ...GatsbyImageSharpFixed_tracedSVG
//             }
//           }
//         }
//       }
//       body
//     }
//   }
// `;

const PostLayout = ({ data }) => {
  return (
    <div>
      {/* <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.author}</p>
      <Image fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
    </div>
  );
};

export default PostLayout;
