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
  // const { word, phonetic, phonetics, meanings, sourceUrls } = currentWord;
  console.log(currentWord);
  // const { audio } = phonetics;

  let audio;

  

  return (
    <StyledMain>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <WordHeader word={currentWord?.word} phonetic={currentWord?.phonetic} 
      // audio={audio} 
      />
      <Meanings />
      <Source src={currentWord?.sourceUrls} />
    </StyledMain>
  );
};

export default Main;
