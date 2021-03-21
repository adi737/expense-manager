import { Table, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";
import React from "react";
import { ExpensesQuery } from "../generated/graphql";

interface EntertainmentExpensesProps {
  data: ExpensesQuery;
}

const EntertainmentExpenses: React.FC<EntertainmentExpensesProps> = ({
  data,
}) => {
  return (
    <Table variant="simple" w="100%">
      <Thead>
        <Tr>
          <Th>DATE</Th>
          <Th>PRODUCT</Th>
          <Th>CATEGORY</Th>
          <Th isNumeric>PRICE</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.expenses.expenses?.map((expense) =>
          expense.category === "option1" ? (
            <Tr key={expense.id}>
              <Td>{expense.createdAt.slice(0, 10)}</Td>
              <Td>{expense.product}</Td>
              <Td>{expense.category}</Td>
              <Td isNumeric>{expense.price}</Td>
            </Tr>
          ) : null
        )}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>DATE</Th>
          <Th>PRODUCT</Th>
          <Th>CATEGORY</Th>
          <Th isNumeric>PRICE</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default EntertainmentExpenses;
