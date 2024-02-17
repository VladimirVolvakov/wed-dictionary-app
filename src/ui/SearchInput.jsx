import styled from "styled-components";
import SearchIcon from "../assets/images/icon-search.svg";

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  margin: 5.15rem 0 4.5rem;
  padding: 2rem 2.4rem;
  border: none;
  border-radius: 1.6rem;
  background-color: var(--color-grey-lighter);
  font-family: var(--font-sans-serif);
  font-size: var(--f-size-heading-sm);
  line-height: var(--line-height-heading-sm);
  font-weight: 700;
  color: var(--color-grey-darker);
`;

const Button = styled.button`
  position: absolute;
  height: 1.55rem;
  width: 1.55rem;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  top: 50%;
  right: 2.4rem;
  transform: translateY(-25%);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  const inputSubmitHandler = (event) => {
    event.preventDefault();
    
  };

  return (
    <Form onSubmit={inputSubmitHandler}>
      <Input
        type="text"
        placeholder="Please enter a word..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <Button>
        <Image src={SearchIcon} alt="Search entered word" />
      </Button>
    </Form>
  );
};

export default SearchInput;
