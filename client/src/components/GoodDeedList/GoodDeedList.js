
import GoodDeedCard from "../GoodDeedCard/GoodDeedCard";
import { ListContainer } from "./styles";

const GoodDeedList = ({ children }) => {
  return (
    <ListContainer>
{children}
    </ListContainer>
  );
};

export default GoodDeedList;
