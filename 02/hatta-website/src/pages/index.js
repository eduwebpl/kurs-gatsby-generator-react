import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StyledDiv />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
