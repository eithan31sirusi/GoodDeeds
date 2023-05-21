import styled from 'styled-components';

export const AdminUsersPageContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UsersTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
`;

export const TableHeader = styled.thead`
  background-color: #3f51b5;
  color: white;
`;

export const TableBody = styled.tbody`
  background-color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
