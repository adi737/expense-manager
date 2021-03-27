import { Tr, Td } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Expense, useDeleteExpenseMutation } from "../generated/graphql";
import { whichIconDesktop } from "../utils/whichIconDesktop";

interface ExpenseDesktopProps {
  expense: Expense;
}

const ExpenseDesktop: React.FC<ExpenseDesktopProps> = ({ expense }) => {
  const [deleteExpense] = useDeleteExpenseMutation();

  return (
    <Tr key={expense.id}>
      <Td>{expense.createdAt.slice(0, 10)}</Td>
      <Td>{expense.product}</Td>
      <Td>{whichIconDesktop(expense.category)}</Td>
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
  );
};

export default ExpenseDesktop;
