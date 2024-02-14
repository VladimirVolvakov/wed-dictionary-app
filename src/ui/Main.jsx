import styled from "styled-components";
import SearchInput from "./SearchInput";
import WordHeader from "./WordHeader";
import Meanings from "./Meanings";

const StyledMain = styled.main`
  width: 100%;
  max-width: 73.7rem;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <StyledMain>
      <SearchInput />
      <WordHeader />
      <Meanings />
    </StyledMain>
  );
};

export default Main;