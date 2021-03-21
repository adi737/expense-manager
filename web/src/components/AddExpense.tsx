import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/dist/client/router";
import React from "react";
import {
  ExpenseFieldFragmentDoc,
  ExpensesResponse,
  useAddExpenseMutation,
} from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import InputField from "./InputField";

const AddExpense: React.FC = () => {
  const [addExpense, { error }] = useAddExpenseMutation({
    update(cache, { data }) {
      if (!data?.addExpense?.errors) {
        cache.modify({
          fields: {
            expenses(existingExpensesRefs: ExpensesResponse) {
              const newExpenseRef = cache.writeFragment({
                data: data?.addExpense?.expense,
                fragment: ExpenseFieldFragmentDoc,
              });

              return {
                ...existingExpensesRefs,
                expenses: [
                  newExpenseRef,
                  ...(existingExpensesRefs.expenses ?? []),
                ],
              };
            },
          },
        });
      }
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <Box textAlign="center">
      <Button
        mt="3rem"
        mb="1rem"
        onClick={onOpen}
        position="static"
        _hover={{
          transform: "scale(1.1)",
        }}
        transition=".4s"
        variant="outline"
        bgColor={{ sm: "teal.400" }}
      >
        Add expense
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={{ category: "", product: "", price: 0 }}
            onSubmit={async (values, actions) => {
              const { data } = await addExpense({
                variables: { options: values },
              });
              if (error?.message.includes("not authenticated")) {
                router.push("/login");
              } else if (data?.addExpense?.errors) {
                actions.setErrors(toErrorMap(data.addExpense.errors));
              } else {
                onClose();
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalHeader>Add expense</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <InputField
                    type="text"
                    name="category"
                    label="Category"
                    placeholder="Select category"
                    submitting={isSubmitting}
                    option="select"
                  />
                  <InputField
                    type="text"
                    name="product"
                    label="Product"
                    placeholder="product"
                    submitting={isSubmitting}
                  />
                  <InputField
                    type="number"
                    name="price"
                    label="Price"
                    placeholder="price"
                    submitting={isSubmitting}
                  />
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddExpense;
