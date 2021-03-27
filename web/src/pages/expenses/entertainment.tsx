import {
  Button,
  Table,
  TableCaption,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddExpense from "../../components/AddExpense";
import ExpenseDesktop from "../../components/ExpenseDesktop";
import ExpenseMobile from "../../components/ExpenseMobile";
import { Layout } from "../../components/Layout";
import Login from "../../components/Login";

import {
  Expense,
  useEntertainmentExpensesQuery,
} from "../../generated/graphql";
import { withApollo } from "../../utils/withApollo";

const Entertainment: React.FC = () => {
  const { data, loading, fetchMore } = useEntertainmentExpensesQuery({
    variables: { limit: 10 },
    notifyOnNetworkStatusChange: true,
  });

  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const setViewport = (e: MediaQueryListEvent) => {
    setIsDesktop(e.matches);
  };

  useEffect(() => {
    const mediaQuery = matchMedia("(min-width: 40rem)");

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", setViewport);

    return () => {
      mediaQuery.removeEventListener("change", setViewport);
    };
  }, []);

  if (!data) {
    return null;
  }

  if (data?.entertainmentExpenses.auth?.includes("not authenticated")) {
    return <Login />;
  }

  return (
    <Layout>
      {isDesktop ? (
        <>
          <AddExpense />
          <Table variant="simple" w="100%">
            <TableCaption>
              {data.entertainmentExpenses.isMore ? (
                <Button
                  onClick={() => {
                    fetchMore({
                      variables: {
                        offset: data.entertainmentExpenses.expenses?.length,
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
                <Th textAlign="center">DELETE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.entertainmentExpenses.expenses?.map((expense) => (
                <ExpenseDesktop key={expense.id} expense={expense as Expense} />
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>DATE</Th>
                <Th>PRODUCT</Th>
                <Th>CATEGORY</Th>
                <Th isNumeric>PRICE</Th>
                <Th textAlign="center">DELETE</Th>
              </Tr>
            </Tfoot>
          </Table>
        </>
      ) : (
        <>
          <AddExpense />
          <Table variant="simple" colorScheme="teal" w="100%">
            <TableCaption>
              {data.entertainmentExpenses.isMore ? (
                <Button
                  onClick={() => {
                    fetchMore({
                      variables: {
                        offset: data.entertainmentExpenses.expenses?.length,
                      },
                    });
                  }}
                  isLoading={loading}
                >
                  Fetch more
                </Button>
              ) : null}
            </TableCaption>
            <Tbody>
              {data.entertainmentExpenses.expenses?.map((expense, i) => (
                <ExpenseMobile
                  key={i}
                  expense={expense as Expense}
                  prevExpense={
                    (data.entertainmentExpenses.expenses as Expense[])[i - 1]
                  }
                />
              ))}
            </Tbody>
          </Table>
        </>
      )}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Entertainment);
