import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  activateAccount: UserResponse;
  expenses: ExpensesResponse;
  groceriesExpenses: ExpensesResponse;
  medicalExpenses: ExpensesResponse;
  houseExpenses: ExpensesResponse;
  transportExpenses: ExpensesResponse;
  taxesExpenses: ExpensesResponse;
  entertainmentExpenses: ExpensesResponse;
  installmentsExpenses: ExpensesResponse;
  personalExpenses: ExpensesResponse;
  educationExpenses: ExpensesResponse;
  giftsExpenses: ExpensesResponse;
  otherExpenses: ExpensesResponse;
};


export type QueryActivateAccountArgs = {
  id: Scalars['String'];
  token: Scalars['String'];
};


export type QueryExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryGroceriesExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryMedicalExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryHouseExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryTransportExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryTaxesExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryEntertainmentExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryInstallmentsExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryPersonalExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryEducationExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryGiftsExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};


export type QueryOtherExpensesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
};


export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<Errors>>;
  user?: Maybe<User>;
};

export type Errors = {
  __typename?: 'Errors';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ExpensesResponse = {
  __typename?: 'ExpensesResponse';
  expenses?: Maybe<Array<Expense>>;
  isMore?: Maybe<Scalars['Boolean']>;
  auth?: Maybe<Scalars['String']>;
};

export type Expense = {
  __typename?: 'Expense';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  category: Scalars['String'];
  product: Scalars['String'];
  price: Scalars['Float'];
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  sendActivationLink: UserResponse;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: UserResponse;
  resetPassword: UserResponse;
  addExpense?: Maybe<ExpenseResponse>;
  deleteExpense: Scalars['Boolean'];
};


export type MutationSendActivationLinkArgs = {
  id: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: InputValues;
};


export type MutationLoginArgs = {
  options: InputValues;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  id: Scalars['String'];
  token: Scalars['String'];
  options: InputPasswordValues;
};


export type MutationAddExpenseArgs = {
  options: InputExpenseValues;
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['Int'];
};

export type InputValues = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type InputPasswordValues = {
  password: Scalars['String'];
  repassword: Scalars['String'];
};

export type ExpenseResponse = {
  __typename?: 'ExpenseResponse';
  expense?: Maybe<Expense>;
  errors?: Maybe<Array<Errors>>;
  auth?: Maybe<Scalars['String']>;
};

export type InputExpenseValues = {
  category: Scalars['String'];
  product: Scalars['String'];
  price: Scalars['Float'];
};

export type ErrorsFieldFragment = (
  { __typename?: 'Errors' }
  & Pick<Errors, 'field' | 'message'>
);

export type ExpenseFieldFragment = (
  { __typename?: 'Expense' }
  & Pick<Expense, 'id' | 'category' | 'product' | 'price' | 'createdAt'>
);

export type ExpenseResponseFieldFragment = (
  { __typename?: 'ExpenseResponse' }
  & Pick<ExpenseResponse, 'auth'>
  & { expense?: Maybe<(
    { __typename?: 'Expense' }
    & ExpenseFieldFragment
  )>, errors?: Maybe<Array<(
    { __typename?: 'Errors' }
    & ErrorsFieldFragment
  )>> }
);

export type ExpensesResponseFieldFragment = (
  { __typename?: 'ExpensesResponse' }
  & Pick<ExpensesResponse, 'isMore' | 'auth'>
  & { expenses?: Maybe<Array<(
    { __typename?: 'Expense' }
    & ExpenseFieldFragment
  )>> }
);

export type UserFieldFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email'>
);

export type UserResponseFieldFragment = (
  { __typename?: 'UserResponse' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFieldFragment
  )>, errors?: Maybe<Array<(
    { __typename?: 'Errors' }
    & ErrorsFieldFragment
  )>> }
);

export type AddExpenseMutationVariables = Exact<{
  options: InputExpenseValues;
}>;


export type AddExpenseMutation = (
  { __typename?: 'Mutation' }
  & { addExpense?: Maybe<(
    { __typename?: 'ExpenseResponse' }
    & ExpenseResponseFieldFragment
  )> }
);

export type DeleteExpenseMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteExpenseMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteExpense'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & { forgotPassword: (
    { __typename?: 'UserResponse' }
    & UserResponseFieldFragment
  ) }
);

export type LoginMutationVariables = Exact<{
  options: InputValues;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & UserResponseFieldFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: InputValues;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & UserResponseFieldFragment
  ) }
);

export type ResetPasswordMutationVariables = Exact<{
  options: InputPasswordValues;
  token: Scalars['String'];
  id: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: (
    { __typename?: 'UserResponse' }
    & UserResponseFieldFragment
  ) }
);

export type SendActivationLinkMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type SendActivationLinkMutation = (
  { __typename?: 'Mutation' }
  & { sendActivationLink: (
    { __typename?: 'UserResponse' }
    & UserResponseFieldFragment
  ) }
);

export type ActivateAccountQueryVariables = Exact<{
  id: Scalars['String'];
  token: Scalars['String'];
}>;


export type ActivateAccountQuery = (
  { __typename?: 'Query' }
  & { activateAccount: (
    { __typename?: 'UserResponse' }
    & UserResponseFieldFragment
  ) }
);

export type EducationExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type EducationExpensesQuery = (
  { __typename?: 'Query' }
  & { educationExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type EntertainmentExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type EntertainmentExpensesQuery = (
  { __typename?: 'Query' }
  & { entertainmentExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type ExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type ExpensesQuery = (
  { __typename?: 'Query' }
  & { expenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type GiftsExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type GiftsExpensesQuery = (
  { __typename?: 'Query' }
  & { giftsExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type GroceriesExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type GroceriesExpensesQuery = (
  { __typename?: 'Query' }
  & { groceriesExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type HouseExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type HouseExpensesQuery = (
  { __typename?: 'Query' }
  & { houseExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type InstallmentsExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type InstallmentsExpensesQuery = (
  { __typename?: 'Query' }
  & { installmentsExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type MedicalExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type MedicalExpensesQuery = (
  { __typename?: 'Query' }
  & { medicalExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type OtherExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type OtherExpensesQuery = (
  { __typename?: 'Query' }
  & { otherExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type PersonalExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type PersonalExpensesQuery = (
  { __typename?: 'Query' }
  & { personalExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type TaxesExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type TaxesExpensesQuery = (
  { __typename?: 'Query' }
  & { taxesExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type TransportExpensesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
}>;


export type TransportExpensesQuery = (
  { __typename?: 'Query' }
  & { transportExpenses: (
    { __typename?: 'ExpensesResponse' }
    & ExpensesResponseFieldFragment
  ) }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFieldFragment
  )> }
);

export const ExpenseFieldFragmentDoc = gql`
    fragment ExpenseField on Expense {
  id
  category
  product
  price
  createdAt
}
    `;
export const ErrorsFieldFragmentDoc = gql`
    fragment ErrorsField on Errors {
  field
  message
}
    `;
export const ExpenseResponseFieldFragmentDoc = gql`
    fragment ExpenseResponseField on ExpenseResponse {
  expense {
    ...ExpenseField
  }
  errors {
    ...ErrorsField
  }
  auth
}
    ${ExpenseFieldFragmentDoc}
${ErrorsFieldFragmentDoc}`;
export const ExpensesResponseFieldFragmentDoc = gql`
    fragment ExpensesResponseField on ExpensesResponse {
  expenses {
    ...ExpenseField
  }
  isMore
  auth
}
    ${ExpenseFieldFragmentDoc}`;
export const UserFieldFragmentDoc = gql`
    fragment UserField on User {
  id
  email
}
    `;
export const UserResponseFieldFragmentDoc = gql`
    fragment UserResponseField on UserResponse {
  user {
    ...UserField
  }
  errors {
    ...ErrorsField
  }
}
    ${UserFieldFragmentDoc}
${ErrorsFieldFragmentDoc}`;
export const AddExpenseDocument = gql`
    mutation AddExpense($options: InputExpenseValues!) {
  addExpense(options: $options) {
    ...ExpenseResponseField
  }
}
    ${ExpenseResponseFieldFragmentDoc}`;
export type AddExpenseMutationFn = Apollo.MutationFunction<AddExpenseMutation, AddExpenseMutationVariables>;

/**
 * __useAddExpenseMutation__
 *
 * To run a mutation, you first call `useAddExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addExpenseMutation, { data, loading, error }] = useAddExpenseMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useAddExpenseMutation(baseOptions?: Apollo.MutationHookOptions<AddExpenseMutation, AddExpenseMutationVariables>) {
        return Apollo.useMutation<AddExpenseMutation, AddExpenseMutationVariables>(AddExpenseDocument, baseOptions);
      }
export type AddExpenseMutationHookResult = ReturnType<typeof useAddExpenseMutation>;
export type AddExpenseMutationResult = Apollo.MutationResult<AddExpenseMutation>;
export type AddExpenseMutationOptions = Apollo.BaseMutationOptions<AddExpenseMutation, AddExpenseMutationVariables>;
export const DeleteExpenseDocument = gql`
    mutation DeleteExpense($id: Int!) {
  deleteExpense(id: $id)
}
    `;
export type DeleteExpenseMutationFn = Apollo.MutationFunction<DeleteExpenseMutation, DeleteExpenseMutationVariables>;

/**
 * __useDeleteExpenseMutation__
 *
 * To run a mutation, you first call `useDeleteExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExpenseMutation, { data, loading, error }] = useDeleteExpenseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExpenseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExpenseMutation, DeleteExpenseMutationVariables>) {
        return Apollo.useMutation<DeleteExpenseMutation, DeleteExpenseMutationVariables>(DeleteExpenseDocument, baseOptions);
      }
export type DeleteExpenseMutationHookResult = ReturnType<typeof useDeleteExpenseMutation>;
export type DeleteExpenseMutationResult = Apollo.MutationResult<DeleteExpenseMutation>;
export type DeleteExpenseMutationOptions = Apollo.BaseMutationOptions<DeleteExpenseMutation, DeleteExpenseMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ...UserResponseField
  }
}
    ${UserResponseFieldFragmentDoc}`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($options: InputValues!) {
  login(options: $options) {
    ...UserResponseField
  }
}
    ${UserResponseFieldFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: InputValues!) {
  register(options: $options) {
    ...UserResponseField
  }
}
    ${UserResponseFieldFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($options: InputPasswordValues!, $token: String!, $id: String!) {
  resetPassword(options: $options, id: $id, token: $token) {
    ...UserResponseField
  }
}
    ${UserResponseFieldFragmentDoc}`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      options: // value for 'options'
 *      token: // value for 'token'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SendActivationLinkDocument = gql`
    mutation SendActivationLink($id: String!) {
  sendActivationLink(id: $id) {
    ...UserResponseField
  }
}
    ${UserResponseFieldFragmentDoc}`;
export type SendActivationLinkMutationFn = Apollo.MutationFunction<SendActivationLinkMutation, SendActivationLinkMutationVariables>;

/**
 * __useSendActivationLinkMutation__
 *
 * To run a mutation, you first call `useSendActivationLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendActivationLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendActivationLinkMutation, { data, loading, error }] = useSendActivationLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSendActivationLinkMutation(baseOptions?: Apollo.MutationHookOptions<SendActivationLinkMutation, SendActivationLinkMutationVariables>) {
        return Apollo.useMutation<SendActivationLinkMutation, SendActivationLinkMutationVariables>(SendActivationLinkDocument, baseOptions);
      }
export type SendActivationLinkMutationHookResult = ReturnType<typeof useSendActivationLinkMutation>;
export type SendActivationLinkMutationResult = Apollo.MutationResult<SendActivationLinkMutation>;
export type SendActivationLinkMutationOptions = Apollo.BaseMutationOptions<SendActivationLinkMutation, SendActivationLinkMutationVariables>;
export const ActivateAccountDocument = gql`
    query activateAccount($id: String!, $token: String!) {
  activateAccount(id: $id, token: $token) {
    ...UserResponseField
  }
}
    ${UserResponseFieldFragmentDoc}`;

/**
 * __useActivateAccountQuery__
 *
 * To run a query within a React component, call `useActivateAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivateAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivateAccountQuery({
 *   variables: {
 *      id: // value for 'id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useActivateAccountQuery(baseOptions: Apollo.QueryHookOptions<ActivateAccountQuery, ActivateAccountQueryVariables>) {
        return Apollo.useQuery<ActivateAccountQuery, ActivateAccountQueryVariables>(ActivateAccountDocument, baseOptions);
      }
export function useActivateAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivateAccountQuery, ActivateAccountQueryVariables>) {
          return Apollo.useLazyQuery<ActivateAccountQuery, ActivateAccountQueryVariables>(ActivateAccountDocument, baseOptions);
        }
export type ActivateAccountQueryHookResult = ReturnType<typeof useActivateAccountQuery>;
export type ActivateAccountLazyQueryHookResult = ReturnType<typeof useActivateAccountLazyQuery>;
export type ActivateAccountQueryResult = Apollo.QueryResult<ActivateAccountQuery, ActivateAccountQueryVariables>;
export const EducationExpensesDocument = gql`
    query EducationExpenses($limit: Int!, $offset: Int) {
  educationExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useEducationExpensesQuery__
 *
 * To run a query within a React component, call `useEducationExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEducationExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEducationExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useEducationExpensesQuery(baseOptions: Apollo.QueryHookOptions<EducationExpensesQuery, EducationExpensesQueryVariables>) {
        return Apollo.useQuery<EducationExpensesQuery, EducationExpensesQueryVariables>(EducationExpensesDocument, baseOptions);
      }
export function useEducationExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EducationExpensesQuery, EducationExpensesQueryVariables>) {
          return Apollo.useLazyQuery<EducationExpensesQuery, EducationExpensesQueryVariables>(EducationExpensesDocument, baseOptions);
        }
export type EducationExpensesQueryHookResult = ReturnType<typeof useEducationExpensesQuery>;
export type EducationExpensesLazyQueryHookResult = ReturnType<typeof useEducationExpensesLazyQuery>;
export type EducationExpensesQueryResult = Apollo.QueryResult<EducationExpensesQuery, EducationExpensesQueryVariables>;
export const EntertainmentExpensesDocument = gql`
    query EntertainmentExpenses($limit: Int!, $offset: Int) {
  entertainmentExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useEntertainmentExpensesQuery__
 *
 * To run a query within a React component, call `useEntertainmentExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEntertainmentExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEntertainmentExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useEntertainmentExpensesQuery(baseOptions: Apollo.QueryHookOptions<EntertainmentExpensesQuery, EntertainmentExpensesQueryVariables>) {
        return Apollo.useQuery<EntertainmentExpensesQuery, EntertainmentExpensesQueryVariables>(EntertainmentExpensesDocument, baseOptions);
      }
export function useEntertainmentExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EntertainmentExpensesQuery, EntertainmentExpensesQueryVariables>) {
          return Apollo.useLazyQuery<EntertainmentExpensesQuery, EntertainmentExpensesQueryVariables>(EntertainmentExpensesDocument, baseOptions);
        }
export type EntertainmentExpensesQueryHookResult = ReturnType<typeof useEntertainmentExpensesQuery>;
export type EntertainmentExpensesLazyQueryHookResult = ReturnType<typeof useEntertainmentExpensesLazyQuery>;
export type EntertainmentExpensesQueryResult = Apollo.QueryResult<EntertainmentExpensesQuery, EntertainmentExpensesQueryVariables>;
export const ExpensesDocument = gql`
    query Expenses($limit: Int!, $offset: Int) {
  expenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useExpensesQuery__
 *
 * To run a query within a React component, call `useExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useExpensesQuery(baseOptions: Apollo.QueryHookOptions<ExpensesQuery, ExpensesQueryVariables>) {
        return Apollo.useQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, baseOptions);
      }
export function useExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExpensesQuery, ExpensesQueryVariables>) {
          return Apollo.useLazyQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, baseOptions);
        }
export type ExpensesQueryHookResult = ReturnType<typeof useExpensesQuery>;
export type ExpensesLazyQueryHookResult = ReturnType<typeof useExpensesLazyQuery>;
export type ExpensesQueryResult = Apollo.QueryResult<ExpensesQuery, ExpensesQueryVariables>;
export const GiftsExpensesDocument = gql`
    query GiftsExpenses($limit: Int!, $offset: Int) {
  giftsExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useGiftsExpensesQuery__
 *
 * To run a query within a React component, call `useGiftsExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGiftsExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGiftsExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGiftsExpensesQuery(baseOptions: Apollo.QueryHookOptions<GiftsExpensesQuery, GiftsExpensesQueryVariables>) {
        return Apollo.useQuery<GiftsExpensesQuery, GiftsExpensesQueryVariables>(GiftsExpensesDocument, baseOptions);
      }
export function useGiftsExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GiftsExpensesQuery, GiftsExpensesQueryVariables>) {
          return Apollo.useLazyQuery<GiftsExpensesQuery, GiftsExpensesQueryVariables>(GiftsExpensesDocument, baseOptions);
        }
export type GiftsExpensesQueryHookResult = ReturnType<typeof useGiftsExpensesQuery>;
export type GiftsExpensesLazyQueryHookResult = ReturnType<typeof useGiftsExpensesLazyQuery>;
export type GiftsExpensesQueryResult = Apollo.QueryResult<GiftsExpensesQuery, GiftsExpensesQueryVariables>;
export const GroceriesExpensesDocument = gql`
    query GroceriesExpenses($limit: Int!, $offset: Int) {
  groceriesExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useGroceriesExpensesQuery__
 *
 * To run a query within a React component, call `useGroceriesExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroceriesExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroceriesExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGroceriesExpensesQuery(baseOptions: Apollo.QueryHookOptions<GroceriesExpensesQuery, GroceriesExpensesQueryVariables>) {
        return Apollo.useQuery<GroceriesExpensesQuery, GroceriesExpensesQueryVariables>(GroceriesExpensesDocument, baseOptions);
      }
export function useGroceriesExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroceriesExpensesQuery, GroceriesExpensesQueryVariables>) {
          return Apollo.useLazyQuery<GroceriesExpensesQuery, GroceriesExpensesQueryVariables>(GroceriesExpensesDocument, baseOptions);
        }
export type GroceriesExpensesQueryHookResult = ReturnType<typeof useGroceriesExpensesQuery>;
export type GroceriesExpensesLazyQueryHookResult = ReturnType<typeof useGroceriesExpensesLazyQuery>;
export type GroceriesExpensesQueryResult = Apollo.QueryResult<GroceriesExpensesQuery, GroceriesExpensesQueryVariables>;
export const HouseExpensesDocument = gql`
    query HouseExpenses($limit: Int!, $offset: Int) {
  houseExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useHouseExpensesQuery__
 *
 * To run a query within a React component, call `useHouseExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHouseExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHouseExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useHouseExpensesQuery(baseOptions: Apollo.QueryHookOptions<HouseExpensesQuery, HouseExpensesQueryVariables>) {
        return Apollo.useQuery<HouseExpensesQuery, HouseExpensesQueryVariables>(HouseExpensesDocument, baseOptions);
      }
export function useHouseExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HouseExpensesQuery, HouseExpensesQueryVariables>) {
          return Apollo.useLazyQuery<HouseExpensesQuery, HouseExpensesQueryVariables>(HouseExpensesDocument, baseOptions);
        }
export type HouseExpensesQueryHookResult = ReturnType<typeof useHouseExpensesQuery>;
export type HouseExpensesLazyQueryHookResult = ReturnType<typeof useHouseExpensesLazyQuery>;
export type HouseExpensesQueryResult = Apollo.QueryResult<HouseExpensesQuery, HouseExpensesQueryVariables>;
export const InstallmentsExpensesDocument = gql`
    query InstallmentsExpenses($limit: Int!, $offset: Int) {
  installmentsExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useInstallmentsExpensesQuery__
 *
 * To run a query within a React component, call `useInstallmentsExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstallmentsExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstallmentsExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useInstallmentsExpensesQuery(baseOptions: Apollo.QueryHookOptions<InstallmentsExpensesQuery, InstallmentsExpensesQueryVariables>) {
        return Apollo.useQuery<InstallmentsExpensesQuery, InstallmentsExpensesQueryVariables>(InstallmentsExpensesDocument, baseOptions);
      }
export function useInstallmentsExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstallmentsExpensesQuery, InstallmentsExpensesQueryVariables>) {
          return Apollo.useLazyQuery<InstallmentsExpensesQuery, InstallmentsExpensesQueryVariables>(InstallmentsExpensesDocument, baseOptions);
        }
export type InstallmentsExpensesQueryHookResult = ReturnType<typeof useInstallmentsExpensesQuery>;
export type InstallmentsExpensesLazyQueryHookResult = ReturnType<typeof useInstallmentsExpensesLazyQuery>;
export type InstallmentsExpensesQueryResult = Apollo.QueryResult<InstallmentsExpensesQuery, InstallmentsExpensesQueryVariables>;
export const MedicalExpensesDocument = gql`
    query MedicalExpenses($limit: Int!, $offset: Int) {
  medicalExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useMedicalExpensesQuery__
 *
 * To run a query within a React component, call `useMedicalExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMedicalExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMedicalExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useMedicalExpensesQuery(baseOptions: Apollo.QueryHookOptions<MedicalExpensesQuery, MedicalExpensesQueryVariables>) {
        return Apollo.useQuery<MedicalExpensesQuery, MedicalExpensesQueryVariables>(MedicalExpensesDocument, baseOptions);
      }
export function useMedicalExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MedicalExpensesQuery, MedicalExpensesQueryVariables>) {
          return Apollo.useLazyQuery<MedicalExpensesQuery, MedicalExpensesQueryVariables>(MedicalExpensesDocument, baseOptions);
        }
export type MedicalExpensesQueryHookResult = ReturnType<typeof useMedicalExpensesQuery>;
export type MedicalExpensesLazyQueryHookResult = ReturnType<typeof useMedicalExpensesLazyQuery>;
export type MedicalExpensesQueryResult = Apollo.QueryResult<MedicalExpensesQuery, MedicalExpensesQueryVariables>;
export const OtherExpensesDocument = gql`
    query OtherExpenses($limit: Int!, $offset: Int) {
  otherExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useOtherExpensesQuery__
 *
 * To run a query within a React component, call `useOtherExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOtherExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOtherExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useOtherExpensesQuery(baseOptions: Apollo.QueryHookOptions<OtherExpensesQuery, OtherExpensesQueryVariables>) {
        return Apollo.useQuery<OtherExpensesQuery, OtherExpensesQueryVariables>(OtherExpensesDocument, baseOptions);
      }
export function useOtherExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OtherExpensesQuery, OtherExpensesQueryVariables>) {
          return Apollo.useLazyQuery<OtherExpensesQuery, OtherExpensesQueryVariables>(OtherExpensesDocument, baseOptions);
        }
export type OtherExpensesQueryHookResult = ReturnType<typeof useOtherExpensesQuery>;
export type OtherExpensesLazyQueryHookResult = ReturnType<typeof useOtherExpensesLazyQuery>;
export type OtherExpensesQueryResult = Apollo.QueryResult<OtherExpensesQuery, OtherExpensesQueryVariables>;
export const PersonalExpensesDocument = gql`
    query PersonalExpenses($limit: Int!, $offset: Int) {
  personalExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __usePersonalExpensesQuery__
 *
 * To run a query within a React component, call `usePersonalExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonalExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonalExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function usePersonalExpensesQuery(baseOptions: Apollo.QueryHookOptions<PersonalExpensesQuery, PersonalExpensesQueryVariables>) {
        return Apollo.useQuery<PersonalExpensesQuery, PersonalExpensesQueryVariables>(PersonalExpensesDocument, baseOptions);
      }
export function usePersonalExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonalExpensesQuery, PersonalExpensesQueryVariables>) {
          return Apollo.useLazyQuery<PersonalExpensesQuery, PersonalExpensesQueryVariables>(PersonalExpensesDocument, baseOptions);
        }
export type PersonalExpensesQueryHookResult = ReturnType<typeof usePersonalExpensesQuery>;
export type PersonalExpensesLazyQueryHookResult = ReturnType<typeof usePersonalExpensesLazyQuery>;
export type PersonalExpensesQueryResult = Apollo.QueryResult<PersonalExpensesQuery, PersonalExpensesQueryVariables>;
export const TaxesExpensesDocument = gql`
    query TaxesExpenses($limit: Int!, $offset: Int) {
  taxesExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useTaxesExpensesQuery__
 *
 * To run a query within a React component, call `useTaxesExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaxesExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaxesExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTaxesExpensesQuery(baseOptions: Apollo.QueryHookOptions<TaxesExpensesQuery, TaxesExpensesQueryVariables>) {
        return Apollo.useQuery<TaxesExpensesQuery, TaxesExpensesQueryVariables>(TaxesExpensesDocument, baseOptions);
      }
export function useTaxesExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaxesExpensesQuery, TaxesExpensesQueryVariables>) {
          return Apollo.useLazyQuery<TaxesExpensesQuery, TaxesExpensesQueryVariables>(TaxesExpensesDocument, baseOptions);
        }
export type TaxesExpensesQueryHookResult = ReturnType<typeof useTaxesExpensesQuery>;
export type TaxesExpensesLazyQueryHookResult = ReturnType<typeof useTaxesExpensesLazyQuery>;
export type TaxesExpensesQueryResult = Apollo.QueryResult<TaxesExpensesQuery, TaxesExpensesQueryVariables>;
export const TransportExpensesDocument = gql`
    query TransportExpenses($limit: Int!, $offset: Int) {
  transportExpenses(limit: $limit, offset: $offset) {
    ...ExpensesResponseField
  }
}
    ${ExpensesResponseFieldFragmentDoc}`;

/**
 * __useTransportExpensesQuery__
 *
 * To run a query within a React component, call `useTransportExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransportExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransportExpensesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransportExpensesQuery(baseOptions: Apollo.QueryHookOptions<TransportExpensesQuery, TransportExpensesQueryVariables>) {
        return Apollo.useQuery<TransportExpensesQuery, TransportExpensesQueryVariables>(TransportExpensesDocument, baseOptions);
      }
export function useTransportExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransportExpensesQuery, TransportExpensesQueryVariables>) {
          return Apollo.useLazyQuery<TransportExpensesQuery, TransportExpensesQueryVariables>(TransportExpensesDocument, baseOptions);
        }
export type TransportExpensesQueryHookResult = ReturnType<typeof useTransportExpensesQuery>;
export type TransportExpensesLazyQueryHookResult = ReturnType<typeof useTransportExpensesLazyQuery>;
export type TransportExpensesQueryResult = Apollo.QueryResult<TransportExpensesQuery, TransportExpensesQueryVariables>;
export const UserDocument = gql`
    query User {
  user {
    ...UserField
  }
}
    ${UserFieldFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;