import { Card, Title, UserInfo, Label, Value } from "./styles";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Title>User Card</Title>
      <UserInfo>
        <Label>User ID:</Label>
        <Value>{user._id}</Value>
      </UserInfo>
      <UserInfo>
        <Label>User Name:</Label>
        <Value>{user.name}</Value>
      </UserInfo>
      <UserInfo>
        <Label>Email:</Label>
        <Value>{user.email}</Value>
      </UserInfo>
      <UserInfo>
        <Label>Created At:</Label>
        <Value>{user.createdAt}</Value>
      </UserInfo>
      <UserInfo>
        <Label>Updated At:</Label>
        <Value>{user.updatedAt}</Value>
      </UserInfo>
    </Card>
  );
};

export default UserCard;
