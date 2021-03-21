import AddExpense from "../components/AddExpense";
import Login from "../components/Login";
import { Layout } from "../components/Layout";
import { useExpensesQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";
import React from "react";
import Expenses from "../components/Expenses";

const Index: React.FC = () => {
  const { data, loading, fetchMore } = useExpensesQuery({
    variables: { limit: 10 },
    notifyOnNetworkStatusChange: true,
  });

  if (!data && loading) {
    return null;
  }

  if (data?.expenses.auth?.includes("not authenticated")) {
    return <Login />;
  }

  return (
    <Layout>
      {data?.expenses.expenses?.length ? (
        <>
          <AddExpense />
          <Expenses
            fetchMore={fetchMore as (varialbes: unknown) => void}
            data={data}
            loading={loading}
          />
        </>
      ) : null}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
