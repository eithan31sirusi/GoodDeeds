import React from "react";
import {
  CardContainer,
  Creator,
  Description,
  Difficulty,
  Status,
  Title,
} from "./styles";

const GoodDeedCard = ({ title, description, difficulty, status, creator }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Difficulty>{difficulty}</Difficulty>
      <Status>{status}</Status>
      <Creator>{creator}</Creator>
    </CardContainer>
  );
};

export default GoodDeedCard;
