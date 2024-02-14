import styled from "styled-components";

const StyledMeanings = styled.section`
  padding: 4rem 0;
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

const MeaningsList = styled.div``;

const MeaningListTitle = styled.h3``;

const DefinitionsList = styled.ul``;

const DefinitionItem = styled.li``;

const Definition = styled.p``;

const RelatedDefinitions = styled.div``;

const DefinitionTypes = styled.div``;

const TypeTitle = styled.span``;

const TypeExample = styled.span``;

const Meanings = () => {
  return (
    <StyledMeanings>
      <Meaning>
        <PartOfSpeech>
          <PartOfSpeechTitle>noun</PartOfSpeechTitle>
          <HorizontalRule />
        </PartOfSpeech>
        <MeaningsList>
          <MeaningListTitle>Meaning</MeaningListTitle>
          <DefinitionsList>
            <DefinitionItem>
              <Definition>
                (etc.) A set of keys used to operate a typewriter, computer etc.
              </Definition>
            </DefinitionItem>
            <DefinitionItem>
              <Definition>
                A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that
                cause different tones to be produced when struck.
              </Definition>
            </DefinitionItem>
            <DefinitionItem>
              <Definition>
                A device with keys of a musical keyboard, used to control
                electronic sound-producing devices which may be built into or
                separate from the keyboard device.
              </Definition>
            </DefinitionItem>
          </DefinitionsList>
        </MeaningsList>
        <RelatedDefinitions>
          <DefinitionTypes>
            <TypeTitle>Synonyms</TypeTitle>
            <TypeExample>electronic keyboard</TypeExample>
          </DefinitionTypes>
          <DefinitionTypes>
            <TypeTitle>Antonyms</TypeTitle>
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
          <MeaningListTitle>Meaning</MeaningListTitle>
          <DefinitionsList>
            <DefinitionItem>
              <Definition>To type on a computer keyboard.</Definition>
              <Definition>
                &quot;Keyboarding is the part of this job I hate the most.&quot;
              </Definition>
            </DefinitionItem>
          </DefinitionsList>
        </MeaningsList>
        <RelatedDefinitions>
          <DefinitionTypes>
            <TypeTitle>Synonyms</TypeTitle>
            <TypeExample></TypeExample>
          </DefinitionTypes>
          <DefinitionTypes>
            <TypeTitle>Antonyms</TypeTitle>
            <TypeExample></TypeExample>
          </DefinitionTypes>
        </RelatedDefinitions>
      </Meaning>
    </StyledMeanings>
  );
};

export default Meanings;
