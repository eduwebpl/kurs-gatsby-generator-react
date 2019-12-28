import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import slugify from 'slugify';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import PageInfo from '../components/PageInfo/PageInfo';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {nodes.map(({ title, featuredImage }) => (
          <ArticlePreview
            key={title}
            title={title}
            image={featuredImage.fluid}
            slug={slugify(title, { lower: true })}
          />
        ))}
      </ArticlesWrapper>
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
