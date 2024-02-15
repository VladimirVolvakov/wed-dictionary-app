import styled from "styled-components";

const StyledMeanings = styled.section`
  padding: 4rem 0 1.9rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Meaning = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const PartOfSpeech = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const PartOfSpeechTitle = styled.h2`
  font-family: var(--font-sans-serif);
  font-size: var(--f-size-heading-md);
  line-height: var(--line-height-heading-md);
  font-style: italic;
  font-weight: 700;
  color: var(--color-grey-darker);
`;

const HorizontalRule = styled.hr`
  color: var(--color-grey-light);
  height: 1px;
  flex: 1;
`;

const MeaningsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Title = styled.h3`
  font-family: var(--font-sans-serif);
  font-size: var(--f-size-heading-sm);
  line-height: var(--line-height-heading-sm);
  font-weight: 400;
  color: var(--color-grey);
`;

const DefinitionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const DefinitionItem = styled.li`
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

const RelatedDefinitions = styled.div`
  display: flex;
  flex-direction: column;
`;

const DefinitionTypes = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
`;

const TypeExample = styled.span`
  font-family: var(--font-sans-serif);
  font-size: var(--f-size-heading-sm);
  line-height: var(--line-height-heading-sm);
  font-weight: 700;
  color: var(--color-purple);
`;

const Meanings = () => {
  return (
    <StyledMeanings>
      <Meaning>
        <PartOfSpeech>
          <PartOfSpeechTitle>noun</PartOfSpeechTitle>
          <HorizontalRule />
        </PartOfSpeech>
        <MeaningsList>
          <Title>Meaning</Title>
          <DefinitionsList>
            <DefinitionItem>
              <DefinitionContainer>
                <Definition>
                  (etc.) A set of keys used to operate a typewriter, computer
                  etc.
                </Definition>
                <Example></Example>
              </DefinitionContainer>
            </DefinitionItem>
            <DefinitionItem>
              <DefinitionContainer>
                <Definition>
                  A component of many instruments including the piano, organ,
                  and harpsichord consisting of usually black and white keys
                  that cause different tones to be produced when struck.
                </Definition>
                <Example></Example>
              </DefinitionContainer>
            </DefinitionItem>
            <DefinitionItem>
              <DefinitionContainer>
                <Definition>
                  A device with keys of a musical keyboard, used to control
                  electronic sound-producing devices which may be built into or
                  separate from the keyboard device.
                </Definition>
                <Example></Example>
              </DefinitionContainer>
            </DefinitionItem>
          </DefinitionsList>
        </MeaningsList>
        <RelatedDefinitions>
          <DefinitionTypes>
            <Title>Synonyms</Title>
            <TypeExample>electronic keyboard</TypeExample>
          </DefinitionTypes>
          <DefinitionTypes>
            <Title>Antonyms</Title>
            <TypeExample>electronic keyboard</TypeExample>
          </DefinitionTypes>
        </RelatedDefinitions>
      </Meaning>

      <Meaning>
        <PartOfSpeech>
          <PartOfSpeechTitle>verb</PartOfSpeechTitle>
          <HorizontalRule />
        </PartOfSpeech>
        <MeaningsList>
          <Title>Meaning</Title>
          <DefinitionsList>
            <DefinitionItem>
              <DefinitionContainer>
                <Definition>To type on a computer keyboard.</Definition>
                <Example>
                  &quot;Keyboarding is the part of this job I hate the
                  most.&quot;
                </Example>
              </DefinitionContainer>
            </DefinitionItem>
          </DefinitionsList>
        </MeaningsList>
        <RelatedDefinitions>
          <DefinitionTypes>
            <Title>Synonyms</Title>
            <TypeExample></TypeExample>
          </DefinitionTypes>
          <DefinitionTypes>
            <Title>Antonyms</Title>
            <TypeExample></TypeExample>
          </DefinitionTypes>
        </RelatedDefinitions>
      </Meaning>
      <HorizontalRule />
    </StyledMeanings>
  );
};

export default Meanings;
