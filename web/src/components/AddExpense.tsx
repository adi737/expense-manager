import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/dist/client/router";
import { ExpensesDocument, ExpensesQuery, useAddExpenseMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import InputField from "./InputField";

interface AddExpenseProps {

}

const AddExpense: React.FC<AddExpenseProps> = ({ }) => {
  const [addExpense, { error, data }] = useAddExpenseMutation({
    update(cache, { data }) {
      const expData: ExpensesQuery | null = cache.readQuery({
        query: ExpensesDocument,
        variables: {
          limit: 20
        }
      });

      const expenses = expData?.expenses ?? [];

      cache.writeQuery({
        query: ExpensesDocument,
        variables: {
          limit: 20
        },
        data: {
          expenses: [...expenses, data?.addExpense?.expense]
        }
      })
    }
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <>
      <Button position='static' onClick={onOpen}>Add expense</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={{ category: "", product: '', price: 0 }}
            onSubmit={async (values, actions) => {
              const { data } = await addExpense({ variables: { options: values } });

              if (error?.message.includes('not authenticated')) {
                router.push('/login');
              } else if (data?.addExpense?.errors) {
                actions.setErrors(toErrorMap(data.addExpense.errors))
              } else {
                onClose();
                actions.setSubmitting(false)
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalHeader>Add expense</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <InputField
                    type='text'
                    name='category'
                    label='Category'
                    placeholder='Select category'
                    submitting={isSubmitting}
                    option='select'
                  />
                  <InputField
                    type='text'
                    name='product'
                    label='Product'
                    placeholder='product'
                    submitting={isSubmitting}
                  />
                  <InputField
                    type='number'
                    name='price'
                    label='Price'
                    placeholder='price'
                    submitting={isSubmitting}
                  />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} isLoading={isSubmitting} type="submit">
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddExpense;