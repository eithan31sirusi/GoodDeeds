import styled from 'styled-components';

export const GoodDeedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoodDeedsHeader = styled.header`
  width: 100%;
  background-color: #3f51b5;
  color: #fff;
  padding: 1rem;
`;

export const GoodDeedsTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  text-align: center;
`;

export const GoodDeedsList = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

export const GoodDeedsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const GoodDeedsListItemText = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

export const GoodDeedsListItemDate = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

export const GoodDeedsListItemUser = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-style: italic;
`;
