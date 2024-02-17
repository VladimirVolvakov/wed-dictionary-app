import { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Main from "./ui/Main";
import Wrapper from "./ui/Wrapper";

function App() {
  const [searchQuery, setSearchQuery] = useState("keyboard");
  const [currentWord, setCurrentWord] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`;

    const fetchQueryData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();
        setCurrentWord(data);
        console.log(data);
      } catch (error) {
        setErrorMessage(error?.message);
        throw new Error(
          error?.message || "Something went wrong... Please try again..."
        );
      }

      setIsLoading(false);
    };

    fetchQueryData();
  }, [searchQuery]);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Main
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          currentWord={currentWord}
        />
      </Wrapper>
    </>
  );
}

export default App;
