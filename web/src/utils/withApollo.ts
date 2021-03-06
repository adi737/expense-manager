import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { ExpensesResponse } from "../generated/graphql";
import { createWithApollo } from "./createWithApollo";
import { isServer } from "./isServer";

const apolloClient = (ctx: NextPageContext | undefined) =>
  new ApolloClient({
    link: createHttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
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
            groceriesExpenses: {
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
            medicalExpenses: {
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
            houseExpenses: {
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
            transportExpenses: {
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
            taxesExpenses: {
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
            entertainmentExpenses: {
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
            installmentsExpenses: {
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
            personalExpenses: {
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
            educationExpenses: {
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
            giftsExpenses: {
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
            otherExpenses: {
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
