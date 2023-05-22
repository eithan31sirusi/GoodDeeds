import React, { useContext, useEffect } from "react";
import { UserGoodDeedsContext } from "../../contexts/UserGoodDeedsContext";

import {
  AdminUsersPageContainer,
  UsersTable,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
} from "./AdminUsersPageStyle";

const AdminUsersPage = () => {
  const { users, getUsers } = useContext(UserGoodDeedsContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AdminUsersPageContainer>
      <h2>All Users</h2>
      <UsersTable>
        <TableHeader>
          <TableRow>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableData>{user.name}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.role}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </UsersTable>
    </AdminUsersPageContainer>
  );
};

export default AdminUsersPage;
