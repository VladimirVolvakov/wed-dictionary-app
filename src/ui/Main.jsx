import styled from "styled-components";
import SearchInput from "./SearchInput";
import WordHeader from "./WordHeader";

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
    </StyledMain>
  );
};

export default Main;