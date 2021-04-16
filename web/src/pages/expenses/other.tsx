import { withApollo } from "../../utils/withApollo";
import { useOtherExpensesQuery } from "../../generated/graphql";
import { Spinner, Table, Tbody, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Expense } from "../../generated/graphql";
import AddExpense from "../../components/AddExpense";
import ExpenseDesktop from "../../components/ExpenseDesktop";
import ExpenseMobile from "../../components/ExpenseMobile";
import { Layout } from "../../components/Layout";
import Login from "../../components/Login";

const Index: React.FC = () => {
  const { data, loading, fetchMore } = useOtherExpensesQuery({
    variables: { limit: 20 },
    notifyOnNetworkStatusChange: true,
  });

  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const doOnce = useRef(true);

  const setViewport = (e: MediaQueryListEvent) => {
    setIsDesktop(e.matches);
  };

  const countSpace = useCallback(async () => {
    if (loaderRef.current) {
      const space =
        window.innerHeight - loaderRef.current.getBoundingClientRect().top;

      if (space >= -100 && !loading && doOnce.current) {
        doOnce.current = false;
        await fetchMore({
          variables: {
            limit: 15,
            offset: data?.otherExpenses.expenses?.length,
          },
        });
        doOnce.current = true;
      }
    }
  }, [data?.otherExpenses.expenses?.length, fetchMore, loading]);

  useEffect(() => {
    const mediaQuery = matchMedia("(min-width: 40rem)");

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", setViewport);

    return () => {
      mediaQuery.removeEventListener("change", setViewport);
    };
  }, []);

  useEffect(() => {
    if (loaderRef.current) {
      if (doOnce.current && !loading) {
        document.addEventListener("scroll", countSpace);
      }
    }
    return () => {
      document.removeEventListener("scroll", countSpace);
    };
  }, [countSpace, loading]);

  if (!data) {
    return null;
  }

  if (data?.otherExpenses.auth?.includes("not authenticated")) {
    return <Login />;
  }

  return (
    <Layout>
      <AddExpense />
      {isDesktop ? (
        <>
          <Table variant="simple" w="100%">
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
              {data.otherExpenses.expenses?.map((expense) => (
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
          <Table variant="simple" colorScheme="teal" w="100%">
            <Tbody>
              {data.otherExpenses.expenses?.map((expense, i) => (
                <ExpenseMobile
                  key={i}
                  expense={expense as Expense}
                  prevExpense={
                    (data.otherExpenses.expenses as Expense[])[i - 1]
                  }
                />
              ))}
            </Tbody>
          </Table>
        </>
      )}
      {data.otherExpenses.isMore ? (
        <Spinner
          d="block"
          mx="auto"
          mt="1rem"
          onClick={() => {
            fetchMore({
              variables: {
                limit: 15,
                offset: data.otherExpenses.expenses?.length,
              },
            });
          }}
          ref={loaderRef}
        />
      ) : null}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
