import React, { useCallback, useContext, useEffect, useState } from "react";

import GoodDeedForm from "../../components/GoodDeedForm/GoodDeedForm";
import GoodDeedCard from "../../components/GoodDeedCard/GoodDeedCard";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import { UserGoodDeedsContext } from "../../context/UserGoodDeedsContext";

import {
  GoodDeedContainer,
  GoodDeedDate,
  GoodDeedDescription,
  GoodDeedTitle,
  UserGoodDeedsPageContainer,
} from "./styles";

const UserGoodDeedsPage = () => {
  const {
    userGoodDeeds,
    fetchUserGoodDeeds,
    setUserGoodDeeds,
    deleteGoodDeed,
  } = useContext(UserGoodDeedsContext);

  const [newUserGoodDeeds, setNewUserGoodDeeds] = useState([]);

  useEffect(() => {
    fetchUserGoodDeeds();
  }, [fetchUserGoodDeeds, setUserGoodDeeds]);

  return (
    <UserGoodDeedsPageContainer>
      <h2>Your Good Deeds</h2>
      {userGoodDeeds.map((deed) => (
        <GoodDeedContainer>
          <GoodDeedCard
            key={deed._id}
            title={deed.title}
            description={deed.description}
            difficulty={deed.difficulty}
            status={deed.status}
            creator={deed.creator}
          />
          <button
            onClick={() => {
              deleteGoodDeed(deed._id);
              setNewUserGoodDeeds(userGoodDeeds);
            }}
          >
            Delete
          </button>
        </GoodDeedContainer>
      ))}
      <GoodDeedForm />
    </UserGoodDeedsPageContainer>
  );
};

export default UserGoodDeedsPage;
