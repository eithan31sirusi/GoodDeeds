// AuthContext.js
import React, { createContext, useCallback, useEffect, useState } from "react";

import jwt_decode from "jwt-decode";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userid, setUserid] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [users, setUsers] = useState([]); // [usersList, setUsersList
  const [userDetails, setUserDetails] = useState(null); // [userDetails, setUserDetails]

  const fetchUserDetails = useCallback(async (id, token) => {
    try {
      if (token) {
        const response = await axios.get(
          `http://localhost:5000/api/admin/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  // fatch all users
  const fetchAllUsers = async () => {
    try {
      if (token) {
        const response = await axios.get(
          `http://localhost:5000/api/admin/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = (userToken) => {
    setToken(userToken);

    const decodedToken = jwt_decode(userToken);
    setIsAdmin(decodedToken.user.isAdmin);

    // an if check to see if the user is logged in
    if (isUserLoggedIn) {
      console.log("User is already logged in");
    } else {
      console.log("User is not logged in");
    }

    setIsUserLoggedIn(true);
    console.log(decodedToken.user.isAdmin, "isAdmin decoded");
    console.log(decodedToken.user.id, "userid decoded");

    localStorage.setItem("token", userToken);
    localStorage.setItem("isAdmin", decodedToken.user.isAdmin);

    console.log(decodedToken, "decodedToken");
  };

  const logout = () => {
    setToken(null);
    setIsAdmin(false);
    setUserid(null);
    setIsUserLoggedIn(false);
    // set isUserLoggedIn in local storage to false

    // clear local storage token
    localStorage.removeItem("token");

    console.log("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAdmin,
        userid,
        token,
        isUserLoggedIn,
        setIsUserLoggedIn,
        userDetails,
        fetchUserDetails,
        fetchAllUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
