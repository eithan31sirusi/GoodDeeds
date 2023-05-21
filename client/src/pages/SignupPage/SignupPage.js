import React from "react";
import { FormInput, SignupForm, SignupPageContainer, SignupTitle, SubmitButton } from "./styles";


const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <SignupPageContainer>
      <SignupTitle>Sign Up</SignupTitle>
      <SignupForm onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Full Name" required />
        <FormInput type="email" placeholder="Email Address" required />
        <FormInput type="password" placeholder="Password" required />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </SignupForm>
    </SignupPageContainer>
  );
};

export default SignupPage;
