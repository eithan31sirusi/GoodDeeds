import styled from "styled-components";

export const UserGoodDeedsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const GoodDeedContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const GoodDeedTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const GoodDeedDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const GoodDeedDate = styled.p`
  font-size: 1rem;
  color: #666;
`;
