import styled from 'styled-components';


export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const AdminDashboardTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const AdminDashboardSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const AdminDashboardButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AdminDashboardButton = styled.button`
  width: 200px;
  margin: 1rem;
  padding: 1rem;
  font-size: 1rem;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #303f9f;
  }
`;