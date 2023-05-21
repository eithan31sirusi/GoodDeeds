import React, { useState } from "react";

const AddGlobalGoodDeedForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the logic to add a new global good deed
    // Use the title and description values to create the new good deed

    // Reset the form inputs
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
        required
      ></textarea>
      <button type="submit">Add Global Good Deed</button>
    </form>
  );
};

export default AddGlobalGoodDeedForm;
