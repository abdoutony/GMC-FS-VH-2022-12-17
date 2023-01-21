import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
export default function ProductList() {
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);

  //   useEffect(() => {
  //     // api call
  //     setLoading(true);
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((jsonData) => {
  //         setLoading(false);
  //         setData(jsonData);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setError(true);
  //       });
  //   }, []);

  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div>
      ProductList
      {data && data.map((el) => <h1>{el.title}</h1>)}
    </div>
  );
}
