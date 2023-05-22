import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import {
  ErrorMessage,
  FormInput,
  LoginForm,
  LoginPageContainer,
  LoginTitle,
  SubmitButton,
} from "./styles";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleUserEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data, "data");
      if (!response.ok) {
        setErrorMessage(data.message);
        return;
      }

      const token = data.token; // Assuming the token is returned in the response data
      login(token);
      history.push("/global-good-deeds");
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <LoginPageContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="email"
          value={email}
          onChange={handleUserEmailChange}
          required
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <SubmitButton type="submit">Log in</SubmitButton>
      </LoginForm>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </LoginPageContainer>
  );
};

export default LoginPage;
