import styled from "styled-components";
import SearchInput from "./SearchInput";
import WordHeader from "./WordHeader";
import Meanings from "./Meanings";
import Source from "./Source";

const StyledMain = styled.main`
  width: 100%;
  max-width: 73.7rem;
  margin: 0 auto;
`;

const Main = ({ currentWord, searchQuery, setSearchQuery }) => {
  console.log(currentWord);
  const wordAudios = currentWord?.phonetics?.filter(item => item.audio);
  const audioUrl = wordAudios?.[0].audio ?? "";
  console.log(audioUrl)

  return (
    <StyledMain>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <WordHeader
        word={currentWord?.word}
        phonetic={currentWord?.phonetic}
        audio={audioUrl}
      />
      <Meanings meanings={currentWord?.meanings} />
      <Source src={currentWord?.sourceUrls} />
    </StyledMain>
  );
};

export default Main;
