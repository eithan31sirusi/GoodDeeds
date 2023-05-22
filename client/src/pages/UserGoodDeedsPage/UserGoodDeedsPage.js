import React, { useCallback, useContext, useEffect, useState } from "react";

import GoodDeedForm from "../../components/GoodDeedForm/GoodDeedForm";
import GoodDeedCard from "../../components/GoodDeedCard/GoodDeedCard";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import { UserGoodDeedsContext } from "../../contexts/UserGoodDeedsContext";

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
    deleteGoodDeed,
    setuserGoodDeeds,
  } = useContext(UserGoodDeedsContext);

  const [userDeedsList, setUserDeedsList] = useState(userGoodDeeds);

  useEffect(() => {
    fetchUserGoodDeeds();
    setUserDeedsList(userDeedsList);
    console.log(userGoodDeeds, "user good deeds from user good deeds page");
  }, [fetchUserGoodDeeds]);

  return (
    <UserGoodDeedsPageContainer>
      <h2>Your Good Deeds</h2>
      {userGoodDeeds.map((deed) => (
        <GoodDeedContainer>
          <GoodDeedCard
            key={deed.id}
            title={deed.title}
            description={deed.description}
            difficulty={deed.difficulty}
            status={deed.status}
            creator={deed.creator}
          />
          <button
            onClick={() => {
              deleteGoodDeed(deed._id);
              fetchUserGoodDeeds();
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
