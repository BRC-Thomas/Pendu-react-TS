import { useEffect } from "react";
import styled from "styled-components";

const WordWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
`;

const SpanWrapper = styled.span`
  border-bottom: 0.1em solid black;
`;

interface LetterSpanProps {
  guessed: boolean;
  reveal?: boolean;
}
const LettersWrapper = styled.span<LetterSpanProps>`
  visibility: ${({ guessed, reveal }) =>
    guessed || reveal ? "visible" : "hidden"};
  color: ${({ guessed, reveal }) => (!guessed && reveal ? "red" : "black")};
`;

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <WordWrapper>
      {wordToGuess.split("").map((letter, index) => (
        <SpanWrapper key={index}>
          <LettersWrapper
            guessed={guessedLetters.includes(letter)}
            reveal={reveal}
          >
            {letter}
          </LettersWrapper>
        </SpanWrapper>
      ))}
    </WordWrapper>
  );
}
export default HangmanWord;
