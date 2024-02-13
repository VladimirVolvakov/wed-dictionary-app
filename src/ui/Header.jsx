import LogoImg from "../assets/images/logo.svg";
import MoonImg from "../assets/images/icon-moon.svg";
import styled from "styled-components";
import ModeSwitcher from "./ModeSwitcher";

const HeaderContainer = styled.div`
  width: 51.18%;
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
  justify-content: flex-end;
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

const ModeToggler = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.6rem;
`;

const ModeSwitcherImage = styled.img`
  height: 2rem;
`;

const Header = () => {
  return (
    <header>
      <HeaderContainer>
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
          <ModeToggler>
            <ModeSwitcher />
            <ModeSwitcherImage src={MoonImg} alt="Turn on dark mode" />
          </ModeToggler>
        </ControlsContainer>
      </HeaderContainer>
    </header>
  );
};

export default Header;
