import React, { useState } from "react";

const AddNewUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the logic to add a new user
    // Use the name and email values to create the new user

    // Reset the form inputs
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddNewUserForm;
