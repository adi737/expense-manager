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
};


export type QueryActivateAccountArgs = {
  id: Scalars['String'];
  token: Scalars['String'];
};


export type QueryExpensesArgs = {
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