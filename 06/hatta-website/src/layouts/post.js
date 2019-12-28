import React from 'react';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      featuredImage {
        fixed(width: 500) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      author
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fixed(width: 500) {
              ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`;

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <Image fixed={data.datoCmsArticle.featuredImage.fixed} />
      <div>
        {data.datoCmsArticle.articleContent.map(item => {
          const itemKey = Object.keys(item)[1];
          
          switch (itemKey) {
            case 'paragraphContent':
              return <p key={item.id}>{item[itemKey]}</p>;
            case 'headingContent':
              return <h2 key={item.id}>{item[itemKey]}</h2>;
            case 'imageData':
              return <Image key={item.id} fixed={item[itemKey].fixed} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default PostLayout;
