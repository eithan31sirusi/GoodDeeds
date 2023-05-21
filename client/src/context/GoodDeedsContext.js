import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GoodDeedsContext = createContext();

const GoodDeedsContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [globalGoodDeeds, setGlobalGoodDeeds] = useState([]);

  useEffect(() => {
    const fetchGlobalGoodDeeds = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/gooddeeds",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setGlobalGoodDeeds(response.data);
      } catch (error) {
        console.error(error);
        throw new Error("Something went wrong.");
      }
    };
    fetchGlobalGoodDeeds();
  }, [token]);

  const fetchData = async (config) => {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong.");
    }
  };

  const addGlobalGoodDeed = async (goodDeed) => {
    try {
      await fetchData({
        method: "POST",
        url: "/gooddeeds",
        data: goodDeed,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong while adding a good deed.");
    }
  };

  const deleteGlobalGoodDeed = async (id) => {
    try {
      await fetchData({
        method: "DELETE",
        url: `/gooddeeds/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong while deleting a good deed.");
    }
  };

  const login = (token) => {
    setToken(token);
  };

  

  return (
    <GoodDeedsContext.Provider
      value={{
        token,
        globalGoodDeeds,
        addGlobalGoodDeed,
        deleteGlobalGoodDeed,
        login,
      }}
    >
      {children}
    </GoodDeedsContext.Provider>
  );
};

export default GoodDeedsContextProvider;
