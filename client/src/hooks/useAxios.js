import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (config) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios({
        ...config,
        baseURL: "http://localhost:5000/api/", // Replace with your base URL
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [config]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, fetchData };
};

export default useAxios;
