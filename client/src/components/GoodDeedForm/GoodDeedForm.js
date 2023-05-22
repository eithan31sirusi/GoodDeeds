import React, { useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Button, Form, Input, Textarea } from "./styles";
import { UserGoodDeedsContext } from "../../contexts/UserGoodDeedsContext";
import { AuthContext } from "../../contexts/AuthContext";

const GoodDeedForm = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [difficulty, setDifficulty] = useState("easy");
  const [status, setStatus] = useState("pending");

  // use effect to get the user data ( name and id ) by id
  const { addGoodDeed, submitNewUserGoodDeed } =
    useContext(UserGoodDeedsContext);
  const { isUserLoggedIn, fetchUserDetails, userDetails } =
    useContext(AuthContext);

  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const userid = decodedToken.user.id;

  // useeffect to get the user data ( name and id ) by id with     fetchUserDetails(userid);
  useEffect(() => {
    if (!isUserLoggedIn) {
      return;
    }

    fetchUserDetails(userid, token);
  }, [isUserLoggedIn, fetchUserDetails, userid, token]);

  // get the user name from the api

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    const newGoodDeed = {
      title,
      description,
      difficulty,
      status,
      creator: userDetails.name,
      user: userDetails._id,
    };

    event.preventDefault();
    submitNewUserGoodDeed(event, newGoodDeed);

    // Reset the form inputs
    setTitle("");
    setDescription("");
    setDifficulty("easy");
    setStatus("pending");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
        required
      ></Textarea>
      <select value={difficulty} onChange={handleDifficultyChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <select value={status} onChange={handleStatusChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <Button type="submit">Add Good Deed</Button>
    </Form>
  );
};

export default GoodDeedForm;
