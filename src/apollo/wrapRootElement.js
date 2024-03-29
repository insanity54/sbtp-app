import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { StaticQuery, graphql } from "gatsby"
import client from './client'

export const wrapRootElement = ({ element }) => (
  <StaticQuery
    query={
      graphql`
          query {
            site {
              siteMetadata {
                apiURL
              }
            }
          }
        `
    }
    render={(data) => {
      const c = client(data);
      return <ApolloProvider client={c}>{element}</ApolloProvider>
    }}
  />
)
