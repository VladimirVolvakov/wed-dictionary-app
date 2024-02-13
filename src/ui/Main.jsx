import styled from "styled-components";
import SearchInput from "./SearchInput";

const StyledMain = styled.main`
  width: 100%;
  max-width: 73.7rem;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <StyledMain>
      <SearchInput />
    </StyledMain>
  );
};

export default Main;