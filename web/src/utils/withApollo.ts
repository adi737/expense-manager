import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { createWithApollo } from "./createWithApollo";
import { isServer } from "./isServer";

const apolloClient = (ctx: NextPageContext | undefined) => new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    headers: {
      cookie:
        isServer ? ctx?.req?.headers.cookie : undefined
    }
  }),
  cache: new InMemoryCache()
});

export const withApollo = createWithApollo(apolloClient);