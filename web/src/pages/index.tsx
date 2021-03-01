import { Box, Text } from "@chakra-ui/react";
import React from "react";

import AddExpense from "../components/AddExpense";
import Login from "../components/Login";
import { Layout } from "../components/Layout";
import { useExpensesQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";


const Index = () => {
  const { loading, data } = useExpensesQuery({ variables: { limit: 20 } });

  if (!data && loading) {
    return null
  }

  if (data?.expenses.auth?.includes('not authenticated')) {
    return <Login />
  }

  return (
    <Layout data={data} dataLoading={loading}>
      <AddExpense />
      {
        data?.expenses.expenses?.map(expense =>
          <Box key={expense.id}>
            <Text>{expense.category}</Text>
            <Text>{expense.product}</Text>
            <Text>{expense.price}</Text>
          </Box>
        )
      }
    </Layout>
  )
}

export default withApollo({ ssr: true })(Index);

