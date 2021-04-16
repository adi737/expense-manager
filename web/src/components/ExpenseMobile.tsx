import { Tr, Td } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Td px={2}>{expense.product}</Td>
        <Td px={2}>{whichIconMobile(expense.category)}</Td>
        <Td px={2} isNumeric>
          {expense.price}
        </Td>
        <Td px={2}>
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
    </Fragment>
  );
};

export default ExpenseMobile;
