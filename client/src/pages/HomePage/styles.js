import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5;
  }
`;
