import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const useDecodedToken = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      const userId = decodedToken.user.id;
      setToken(storedToken);
      setUserId(userId);
    }
  }, []);

  return { token, userId };
};

export default useDecodedToken;
