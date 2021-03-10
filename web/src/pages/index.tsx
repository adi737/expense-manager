import {
  Button,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import AddExpense from "../components/AddExpense";
import Login from "../components/Login";
import { Layout } from "../components/Layout";
import { useExpensesQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";
import React from "react";

const Index: React.FC = () => {
  const { data, loading, fetchMore } = useExpensesQuery({
    variables: { limit: 10 },
    notifyOnNetworkStatusChange: true,
  });

  if (!data && loading) {
    return null;
  }

  if (data?.expenses.auth?.includes("not authenticated")) {
    return <Login />;
  }

  return (
    <Layout>
      <AddExpense />
      {data?.expenses.expenses?.length ? (
        <Table variant="simple">
          <TableCaption>
            {data.expenses.isMore ? (
              <Button
                onClick={() => {
                  fetchMore({
                    variables: {
                      offset: data.expenses.expenses?.length,
                    },
                  });
                }}
                isLoading={loading}
              >
                Fetch more
              </Button>
            ) : null}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>DATE</Th>
              <Th>PRODUCT</Th>
              <Th>CATEGORY</Th>
              <Th isNumeric>PRICE</Th>
            </Tr>
          </Thead>
          {data.expenses.expenses.map((expense) => (
            <Tbody key={expense.id}>
              <Tr>
                <Td>{expense.createdAt.slice(0, 10)}</Td>
                <Td>{expense.product}</Td>
                <Td>{expense.category}</Td>
                <Td isNumeric>{expense.price}</Td>
              </Tr>
            </Tbody>
          ))}
          <Tfoot>
            <Tr>
              <Th>DATE</Th>
              <Th>PRODUCT</Th>
              <Th>CATEGORY</Th>
              <Th isNumeric>PRICE</Th>
            </Tr>
          </Tfoot>
        </Table>
      ) : null}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
