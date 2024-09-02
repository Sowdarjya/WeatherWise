import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(url);
        response = await response.json();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAPI();
  }, [url]);

  return data;
};

export default useFetch;
