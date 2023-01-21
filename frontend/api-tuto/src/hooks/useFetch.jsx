import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // api call
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        setLoading(false);
        setData(jsonData);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  return { data, loading, error };
};

export default useFetch;
