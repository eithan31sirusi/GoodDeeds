import React, { useContext, useEffect } from "react";
import { GoodDeedsContext } from "../../context/GoodDeedsContext";
import { AuthContext } from "../../context/AuthContext";
import { UserGoodDeedsContext } from "../../context/UserGoodDeedsContext";
import jwt_decode from "jwt-decode";

import {
  GoodDeedsContainer,
  GoodDeedsHeader,
  GoodDeedsTitle,
  GoodDeedsList,
  GoodDeedsListItem,
  GoodDeedsListItemText,
  GoodDeedsListItemDate,
  GoodDeedsListItemUser,
} from "./styles";

const GlobalGoodDeedsPage = () => {
  const { loading, globalGoodDeeds } = useContext(GoodDeedsContext);
  const { token, userDetails, fetchUserData } = useContext(AuthContext);

  const { saveGlobalGoodDeed } = useContext(UserGoodDeedsContext);

  console.log(globalGoodDeeds, "hey!");
  console.log(userDetails, "user details from global good deeds page");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const userid = decodedToken.user.id;
    fetchUserData(userid, token);
  }, [token]);

  return (
    <GoodDeedsContainer>
      <GoodDeedsHeader>
        <GoodDeedsTitle>Global Good Deeds</GoodDeedsTitle>
      </GoodDeedsHeader>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <GoodDeedsList>
          {globalGoodDeeds.map((deed) => (
            <GoodDeedsListItem key={deed._id}>
              <GoodDeedsListItemText>{deed.title}</GoodDeedsListItemText>
              <GoodDeedsListItemDate>{deed.description}</GoodDeedsListItemDate>
              <GoodDeedsListItemUser>{deed.difficulty}</GoodDeedsListItemUser>
              <button
                onClick={() => {
                  // save the global good deed to the user good deeds and takes from the fetchUserData the creator name and id
                  saveGlobalGoodDeed({
                    ...deed,
                    creator: userDetails.name,
                    user: userDetails._id,
                    status: "pending",
                  });
                }}
              >
                sadasd
              </button>
            </GoodDeedsListItem>
          ))}
        </GoodDeedsList>
      )}
    </GoodDeedsContainer>
  );
};

export default GlobalGoodDeedsPage;
