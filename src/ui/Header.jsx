import LogoImg from "../assets/images/logo.svg";
import styled from "styled-components";
import ModeSwitcher from "./ModeSwitcher";

const StyledHeader = styled.header`
  width: 100%;
  max-width: 73.7rem;
  margin: 5.8rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 3.65rem;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FontTypeContainer = styled.div`
  padding-right: 2.6rem;
  border-right: 1px solid var(--color-grey-light);
`;

const FontTypeSelector = styled.select`
  border: none;
  font-family: var(--font-sans-serif);
  color: var(--color-grey-darker);
  font-size: var(--f-size-body-md);
  font-weight: 700;
  line-height: var(--line-height-body-md);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const FontTypeOption = styled.option`
  font-family: var(--font-sans-serif);
  color: var(--color-grey-darker);
  font-size: var(--f-size-body-md);
  font-weight: 400;
  line-height: var(--line-height-body-md);
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoImage src={LogoImg} alt="Web Dictionary App Logo" />
      <ControlsContainer>
        <FontTypeContainer>
          <FontTypeSelector name="font-type">
            <FontTypeOption value="sans-serif" selected>
              Sans Serif
            </FontTypeOption>
            <FontTypeOption value="serif">Serif</FontTypeOption>
            <FontTypeOption value="mono">Mono</FontTypeOption>
          </FontTypeSelector>
        </FontTypeContainer>
        <ModeSwitcher />
      </ControlsContainer>
    </StyledHeader>
  );
};

export default Header;
