import Navigation from "../components/Navigation";
import { useUserQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface IndexProps {

}

const Index: React.FC<IndexProps> = ({ }) => {
  const { loading, data, error } = useUserQuery({ skip: isServer });

  let body = null;

  if (loading || error) {
    // return null;
  } else if (!data) {
    // return null;
  } else if (data.user === null) {
    body = (
      <p>not authenticated</p>
    )
  } else {
    body = (
      <p>{data.user?.email}</p>
    )
  }



  return <>
    <Navigation data={data} dataLoading={loading} />
    {body}
  </>

}

export default Index;