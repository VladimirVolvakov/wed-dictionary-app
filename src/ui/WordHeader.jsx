import styled from "styled-components";
import useSound from "use-sound";
import PlayBtnImg from "../assets/images/icon-play.svg";

const StyledWordHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchedWord = styled.h1`
  font-family: var(--font-sans-serif);
  font-size: var(--f-size-heading-lg);
  line-height: var(--line-height-heading-lg);
  font-weight: 700;
  color: var(--color-grey-darker);
  margin-bottom: 0.8rem;
`;

const WordTranscription = styled.span`
  font-family: var(--font-sans-serif);
  font-size: var(--f-size-heading-md);
  line-height: var(--line-height-heading-md);
  font-weight: 400;
  color: var(--color-purple);
`;

const SpellButton = styled.button`
  height: 7.5rem;
  width: 7.5rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const WordHeader = ({ audio, phonetic, word }) => {
  const [play] = useSound(audio);

  return (
    <StyledWordHeader>
      <div>
        <SearchedWord>{word}</SearchedWord>
        <WordTranscription>{phonetic}</WordTranscription>
      </div>
      <SpellButton onClick={play}>
        <img src={PlayBtnImg} alt="Click to check word spelling" />
      </SpellButton>
    </StyledWordHeader>
  );
};

export default WordHeader;
