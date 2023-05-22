import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import AddGlobalGoodDeedForm from "../../components/AdminDashboard/AddGlobalGoodDeedForm/AddGlobalGoodDeedForm";
import AddNewUserForm from "../../components/AdminDashboard/AddNewUserForm/AddNewUserForm";
import FilterUsersSearchBar from "../../components/AdminDashboard/FilterUsersSearchBar/FilterUsersSearchBar";
import FilterGoodDeedsSearchBar from "../../components/AdminDashboard/FilterGoodDeedsSearchBar/FilterGoodDeedsSearchBar";
import GoodDeedsList from "../../components/GoodDeedList/GoodDeedList";
import GoodDeedCard from "../../components/GoodDeedCard/GoodDeedCard";
import UsersList from "../../components/UsersList/UsersList";
import { UserGoodDeedsContext } from "../../contexts/UserGoodDeedsContext";
import { GoodDeedsContext } from "../../contexts/GoodDeedsContext";
import { AuthContext } from "../../contexts/AuthContext";

const AdminDashboardPageContainer = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
`;

const AdminDashboardPage = () => {
  const { userGoodDeeds, addGoodDeed, deleteGoodDeed } =
    useContext(UserGoodDeedsContext);
  const { globalGoodDeeds, addGlobalGoodDeed, deleteGlobalGoodDeed } =
    useContext(GoodDeedsContext);
  const { fetchAllUsers, Users } = useContext(AuthContext);

  useEffect(() => {
    fetchAllUsers();
    console.log(Users, "users from admin dashboard page");
  }, [fetchAllUsers]);

  return (
    <AdminDashboardPageContainer>
      <LeftSection>
        <h2>Users List</h2>
        <AddNewUserForm />
        <FilterUsersSearchBar />
        <UsersList>
          {userGoodDeeds.map((user) => (
            <div key={user.id}>
              {/* User Card content */}
              <button>Delete</button>
              <button>Edit</button>
            </div>
          ))}
          {/* Add more UserCards */}
        </UsersList>
      </LeftSection>
      <RightSection>
        <h2>Good Deeds List</h2>
        <AddGlobalGoodDeedForm addGoodDeed={addGlobalGoodDeed} />
        <FilterGoodDeedsSearchBar onSearch={globalGoodDeeds} />
        <GoodDeedsList>
          {globalGoodDeeds.map((goodDeed) => (
            <GoodDeedCard key={goodDeed.id}>
              {/* Good Deed Card content */}
              <button>Delete</button>
              <button>Edit</button>
            </GoodDeedCard>
          ))}
          {/* Add more GoodDeedCards */}
        </GoodDeedsList>
      </RightSection>
    </AdminDashboardPageContainer>
  );
};

export default AdminDashboardPage;
