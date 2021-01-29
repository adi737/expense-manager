import Navigation from "../components/Navigation";
import { useUserQuery } from "../generated/graphql";

interface IndexProps {

}

const Index: React.FC<IndexProps> = ({ }) => {
  const { loading, data, error } = useUserQuery();

  return loading || error ?
    <div>loading...</div>
    :
    data?.user === null ?
      <>
        <Navigation />
        <p>not authenticated</p>
      </>
      :
      <>
        <Navigation />
        <p>{data?.user?.username}</p>
      </>
}

export default Index;