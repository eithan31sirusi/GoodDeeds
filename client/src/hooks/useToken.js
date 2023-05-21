import { useState, useEffect } from "react";

const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Retrieve token from local storage when the component mounts
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (newToken) => {
    // Save token to local storage and update the state
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    // Remove token from local storage and reset the state
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, saveToken, clearToken };
};

export default useToken;
