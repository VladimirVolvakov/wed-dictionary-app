import styled from "styled-components";

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

const SearchInput = () => {
  return (
    <Input type="text" placeholder="Please enter a word..." />
  );
};

export default SearchInput;