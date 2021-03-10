import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { ExpensesResponse } from "../generated/graphql";
import { createWithApollo } from "./createWithApollo";
import { isServer } from "./isServer";

const apolloClient = (ctx: NextPageContext | undefined) =>
  new ApolloClient({
    link: createHttpLink({
      uri: "http://localhost:4000/graphql",
      credentials: "include",
      headers: {
        cookie: isServer ? ctx?.req?.headers.cookie : undefined,
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            expenses: {
              keyArgs: false,
              merge(
                existing: ExpensesResponse | undefined,
                incoming: ExpensesResponse
              ): ExpensesResponse {
                return {
                  ...incoming,
                  expenses: [
                    ...(existing?.expenses ?? []),
                    ...(incoming.expenses ?? []),
                  ],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(apolloClient);
