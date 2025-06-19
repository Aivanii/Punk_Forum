import { useEffect, useState } from "react";

const useFetch = (url: string, options?: any) => {
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorStatus, setErrorStatus] = useState<any>(null);

  useEffect(() => {
    async function fetchNow() {
      try {
        setIsLoading(true);
        let response: any = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
        setFetchedData(data);
        setErrorStatus(null);
      } catch (error) {
        setErrorStatus(error instanceof Error ? error.message : error);
        setFetchedData(null);
      } finally {
        setIsLoading(false);
      }
    }
    console.log("fetching");
    fetchNow();
  }, [url, options]);

  return { fetchedData, isLoading, errorStatus };
};

export default useFetch;
