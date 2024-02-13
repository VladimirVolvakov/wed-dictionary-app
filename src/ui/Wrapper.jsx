import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>{children}</StyledWrapper>
  );
};

export default Wrapper;