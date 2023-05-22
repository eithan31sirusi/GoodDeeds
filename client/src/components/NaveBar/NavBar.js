import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledNavbar, StyledNavLink } from "./styles";

const Navbar = () => {
  const { isAdmin, logout, isUserLoggedIn, setIsUserLoggedIn } =
    useContext(AuthContext);
    const history = useHistory();

  // use effect to get the isuserloggedin from the local storage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsUserLoggedIn(true);
    }
  }, [setIsUserLoggedIn]);

  return (
    <StyledNavbar>
      <div>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
        <StyledNavLink to="/user-good-deeds">My Good Deeds</StyledNavLink>

        <StyledNavLink to="/global-good-deeds">Global Good Deeds</StyledNavLink>
      </div>
      <div>
        {isUserLoggedIn ? (
          <div>
            {isAdmin === "yes" ? (
              <StyledNavLink to="/admin-dashboard">Admin Panel</StyledNavLink>
            ) : null}
            <span>Logged in as "need to change it"</span>
            <button onClick={()=>{
              logout();
              history.push("/");
            }}>Logout</button>
          </div>
        ) : (
          <div>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/signup">Sign up</StyledNavLink>
          </div>
        )}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
