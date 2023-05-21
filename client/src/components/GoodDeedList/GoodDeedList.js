import React from "react";
import GoodDeedCard from "../GoodDeedCard/GoodDeedCard";
import { ListContainer } from "./styles";

const GoodDeedList = ({ goodDeeds }) => {
  return (
    <ListContainer>
      {goodDeeds.map((goodDeed) => (
        <GoodDeedCard
          title={goodDeed.title}
          description={goodDeed.description}
        />
      ))}
    </ListContainer>
  );
};

export default GoodDeedList;
