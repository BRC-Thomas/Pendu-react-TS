import styled from "styled-components";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const KeyboardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
`;

const ButtonLetter = styled.button`
  width: 100%;
  border: 3px solid black;
  background: none;
  aspect-ratio: 1 / 1;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: black;

  &.active {
    background-color: hsl(200, 100%, 50%);
    color: white;
  }

  &.inactive {
    opacity: 0.3;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: hsl(200, 100%, 75%);
  }
`;

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean
};
function Keyboard({
  activeLetters,
  inactiveLetters,
  disabled = false,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <KeyboardWrap>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <ButtonLetter
            key={key}
            onClick={() => addGuessedLetter(key)}
            className={`${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </ButtonLetter>
        );
      })}
    </KeyboardWrap>
  );
}
export default Keyboard;
