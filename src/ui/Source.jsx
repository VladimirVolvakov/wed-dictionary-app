import styled from "styled-components";
import OpenNewWindowImg from "../assets/images/icon-new-window.svg";

const SourceInfo = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-sans-serif);
  font-size: var(--f-size-body-sm);
  line-height: var(--line-height-body-sm);
  font-weight: 400;
  color: var(--color-grey);
  text-decoration: underline;
`;

const Text = styled.span`
  margin-right: 2rem;
`;

const Link = styled.a`
  color: var(--color-grey-darker);
  margin-right: 0.9rem;
`;

const Source = () => {
  return (
    <SourceInfo>
      <Text>Source</Text>
      <Link href="https://en.wiktionary.org/wiki/keyboard" target="blank">
        https://en.wiktionary.org/wiki/keyboard
      </Link>
      <Link href="https://en.wiktionary.org/wiki/keyboard" target="blank">
        <img src={OpenNewWindowImg} alt="Open source in the new browser tab" />
      </Link>
    </SourceInfo>
  );
};

export default Source;
