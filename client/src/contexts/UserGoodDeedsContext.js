import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import jwt_decode from "jwt-decode";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export const UserGoodDeedsContext = createContext();

const UserGoodDeedsContextProvider = ({ children }) => {
  const [userGoodDeeds, setUserGoodDeeds] = useState([]);

  const token = localStorage.getItem("token");

  const fetchUserGoodDeeds = useCallback(async () => {
    try {
      if (token) {
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.user.id;
        console.log(userId, "user id from user good deeds context");

        const response = await axios.get(
          `http://localhost:5000/api/gooddeeds/personal/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserGoodDeeds(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const addGoodDeed = async (goodDeed) => {
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.user.id;
      try {
        const response = await axios.post(
          `http://localhost:5000/api/gooddeeds/personal/${userId}`,
          goodDeed,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const newGoodDeed = [...userGoodDeeds, response.data];
        setUserGoodDeeds(newGoodDeed);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const saveGlobalGoodDeed = async (globalGoodDeed) => {
    const { title, description, difficulty, status, creator, user } =
      globalGoodDeed;

    const personalGoodDeed = {
      title,
      description,
      difficulty,
      status,
      creator,
      user,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/gooddeeds/personal/${user}`,
        personalGoodDeed,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newGoodDeed = [...userGoodDeeds, response.data];
      setUserGoodDeeds(newGoodDeed);
      console.log(newGoodDeed, "new good deed");
    } catch (error) {
      console.log(error);
    }
  };

  const submitNewUserGoodDeed = async (event, goodDeed) => {
    event.preventDefault();

    try {
      await addGoodDeed(goodDeed);
      setUserGoodDeeds([...userGoodDeeds, goodDeed]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteGoodDeed = async (goodDeedId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/gooddeeds/personal/${goodDeedId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const filteredGoodDeeds = userGoodDeeds.filter(
        (goodDeed) => goodDeed._id !== goodDeedId
      );
      setUserGoodDeeds(filteredGoodDeeds);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    userGoodDeeds,
    addGoodDeed,
    deleteGoodDeed,
    fetchUserGoodDeeds,
    setUserGoodDeeds,
    saveGlobalGoodDeed,
    submitNewUserGoodDeed,
  };

  useEffect(() => {
    fetchUserGoodDeeds();
  }, [fetchUserGoodDeeds, setUserGoodDeeds]);

  return (
    <UserGoodDeedsContext.Provider value={value}>
      {children}
    </UserGoodDeedsContext.Provider>
  );
};

export default UserGoodDeedsContextProvider;
