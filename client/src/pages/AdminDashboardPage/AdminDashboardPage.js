import React, { useContext } from "react";
import styled from "styled-components";
import UsersList from "../../components/UsersList/UsersList";
import AddGlobalGoodDeedForm from "../../components/AdminDashboard/AddGlobalGoodDeedForm/AddGlobalGoodDeedForm";
import AddNewUserForm from "../../components/AdminDashboard/AddNewUserForm/AddNewUserForm";
import FilterUsersSearchBar from "../../components/AdminDashboard/FilterUsersSearchBar/FilterUsersSearchBar";
import FilterGoodDeedsSearchBar from '../../components/AdminDashboard/FilterGoodDeedsSearchBar/FilterGoodDeedsSearchBar';
import GoodDeedsList from "../../components/GoodDeedList/GoodDeedList";
import GoodDeedCard from "../../components/GoodDeedCard/GoodDeedCard";
import { UserGoodDeedsContext } from "../../contexts/UserGoodDeedsContext";
import { GlobalGoodDeedsContext } from "../../contexts/GlobalGoodDeedsContext";
import { AuthContext } from "../../contexts/AuthContext";

const AdminPanelPageContainer = styled.div`
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

const AdminPanelPage = () => {
  const { userGoodDeeds, addGoodDeed, deleteGoodDeed } = useContext(UserGoodDeedsContext);
  const { globalGoodDeeds, addGlobalGoodDeed, deleteGlobalGoodDeed } = useContext(GlobalGoodDeedsContext);
  const { user } = useContext(AuthContext);

  return (
    <AdminPanelPageContainer>
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
        <FilterGoodDeedsSearchBar />
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
    </AdminPanelPageContainer>
  );
};

export default AdminPanelPage;
