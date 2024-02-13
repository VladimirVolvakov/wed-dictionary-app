import styled from "styled-components";
import SearchInput from "./SearchInput";

const StyledMain = styled.main`
  width: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <SearchInput />
    </StyledMain>
  );
};

export default Main;