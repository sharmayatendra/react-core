import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchURLData();
  }, [url]);

  const fetchURLData = async () => {
    const fetchedData = await fetch(url);
    const data = await fetchedData.json();
    setJsonData(data);
  };

  return jsonData;
};

export default useFetch;
