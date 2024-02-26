import styled from "styled-components";

const StyledDefinitionItem = styled.li`
  display: flex;

  &::before {
    content: "•";
    height: 0.5rem;
    width: 0.5rem;
    color: var(--color-purple);
    margin: 0 2rem 0 2.2rem;
  }
`;

const DefinitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const Definition = styled.p``;

const Example = styled.p`
  color: var(--color-grey);
`;

const DefinitionItem = ({ definition }) => {
  return (
    <StyledDefinitionItem>
      <DefinitionContainer>
        <Definition>{definition.definition}</Definition>
        {definition.example && <Example>{definition.example}</Example>}
      </DefinitionContainer>
    </StyledDefinitionItem>
  );
};

export default DefinitionItem;
