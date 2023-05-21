import styled from "styled-components";

export const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const SignupTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #1a237e;
  }
`;
