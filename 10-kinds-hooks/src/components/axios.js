import { useAxios } from "../hooks/useAxios";

const Axios = () => {
  const { loading, data, refetch } = useAxios({ url: "https://api.publicapis.org/entries" });
  //console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Reload</button>
    </div>
  );
}

export default Axios;