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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";
import {
  Expense,
  ExpensesQuery,
  useDeleteExpenseMutation,
} from "../generated/graphql";
import { whichIcon } from "../utils/whichIcon";

interface ExpensesProps {
  fetchMore: (variables: unknown) => void;
  data: ExpensesQuery;
  loading: boolean;
}

const Expenses: React.FC<ExpensesProps> = ({ fetchMore, data, loading }) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [deleteExpense] = useDeleteExpenseMutation();

  const setViewport = (e: MediaQueryListEvent) => {
    setIsDesktop(e.matches);
  };

  useEffect(() => {
    const mediaQuery = matchMedia("(min-width: 40rem)");

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", (e) => setViewport(e));
  }, []);

  return isDesktop ? (
    <Table variant="simple" w="100%">
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
          <Th textAlign="center">DELETE</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.expenses.expenses?.map((expense) => (
          <Tr key={expense.id}>
            <Td>{expense.createdAt.slice(0, 10)}</Td>
            <Td>{expense.product}</Td>
            <Td>
              {whichIcon(expense.category)} {expense.category}
            </Td>
            <Td isNumeric>{expense.price}</Td>
            <Td textAlign="center" _hover={{ transform: "scale(1.1)" }}>
              <FontAwesomeIcon
                icon="trash-alt"
                cursor="pointer"
                onClick={() => {
                  const confirmed = confirm(
                    "Are you sure you want to delete this item?"
                  );

                  if (confirmed) {
                    deleteExpense({
                      variables: { id: expense.id },
                      update(cache) {
                        cache.evict({ id: "Expense:" + expense.id });
                      },
                    });
                  }
                }}
              />
            </Td>
          </Tr>
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
  ) : (
    <Table variant="simple" colorScheme="teal" w="100%">
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
      <Tbody>
        {data.expenses.expenses?.map((expense, i) => (
          <Fragment key={expense.id}>
            {expense.createdAt.slice(0, 10) ===
            (data.expenses.expenses as Expense[])[i - 1]?.createdAt.slice(
              0,
              10
            ) ? null : (
              <Tr>
                <Td
                  bgColor="teal.200"
                  fontWeight="medium"
                  p={2}
                  colSpan={4}
                  textAlign="center"
                >
                  {expense.createdAt.slice(0, 10)}
                </Td>
              </Tr>
            )}

            <Tr>
              <Td p={2}>{expense.product}</Td>
              <Td p={2}>{whichIcon(expense.category)}</Td>
              <Td p={2} isNumeric>
                {expense.price}
              </Td>
              <Td
                p={2}
                onClick={() =>
                  deleteExpense({
                    variables: { id: expense.id },
                    update(cache) {
                      cache.evict({ id: "Expense:" + expense.id });
                    },
                  })
                }
                cursor="pointer"
                textAlign="center"
                _hover={{ transform: "scale(1.1)" }}
              >
                &#128465;
              </Td>
            </Tr>
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export default Expenses;
