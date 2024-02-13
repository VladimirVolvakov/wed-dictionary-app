import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Main from "./ui/Main";
import Wrapper from "./ui/Wrapper";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
