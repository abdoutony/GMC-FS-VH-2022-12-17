import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function DetailsPage() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // api call
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${params.id}`)
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

  return <div>DetailsPage</div>;
}
