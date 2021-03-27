import { Tr, Td } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useDeleteExpenseMutation, Expense } from "../generated/graphql";
import { whichIconMobile } from "../utils/whichIconMobile";

interface ExpenseMobileProps {
  expense: Expense;
  prevExpense?: Expense;
}

const ExpenseMobile: React.FC<ExpenseMobileProps> = ({
  expense,
  prevExpense,
}) => {
  const [deleteExpense] = useDeleteExpenseMutation();

  return (
    <Fragment key={expense.id}>
      {expense.createdAt.slice(0, 10) ===
      prevExpense?.createdAt.slice(0, 10) ? null : (
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
        <Td p={2}>{whichIconMobile(expense.category)}</Td>
        <Td p={2} isNumeric>
          {expense.price}
        </Td>
        <Td
          p={2}
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
          cursor="pointer"
          textAlign="center"
          _hover={{ transform: "scale(1.1)" }}
        >
          &#128465;
        </Td>
      </Tr>
    </Fragment>
  );
};

export default ExpenseMobile;
