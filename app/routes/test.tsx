import useFetch from "~/customHooks/useFetch";
const Test = () => {

  const { fetchedData, isLoading, errorStatus } = useFetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
  );

  if (isLoading) return <div>Loading...</div>;
  console.log(errorStatus)
  if (errorStatus) return <div>Error: {errorStatus}</div>;

  return (
    <div>
      {`
    data: ${fetchedData};
    isLoading: ${isLoading};
    errorStatus: ${errorStatus};
            `}
    </div>
  );
};

export default Test;
