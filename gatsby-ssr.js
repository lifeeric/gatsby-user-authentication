/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ApolloClient, ApolloProvider } from "@apollo/client"
import fetch from "isomorphic-fetch"
import { cache } from "./src/utils/cache"

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  fetch,
  cache,
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
