import UserCard from "../UserCard/UserCard";
import { UserListContainer } from "./styles";

const UsersList = ({ users }) => {
  return (
    <UserListContainer>
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </UserListContainer>
  );
};

export default UsersList;
