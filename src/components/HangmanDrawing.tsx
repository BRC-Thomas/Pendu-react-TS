import styled from "styled-components";

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const RelativeContainer = styled.div`
  position: relative;
`;

const BaseLine = styled.div`
  height: 10px;
  width: 250px;
  background-color: black;
`;

const VeticalLine = styled.div`
  height: 400px;
  width: 10px;
  margin-left: 120px;
  background-color: black;
`;

const TopLine = styled.div`
  height: 10px;
  width: 200px;
  margin-left: 120px;
  background-color: black;
`;

const FinalLine = styled.div`
  height: 50px;
  width: 10px;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
`;
type HangmanDrawingProps = {
  numberOfGuesses: number
}
function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
  return (
    <RelativeContainer>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <FinalLine />
      <TopLine />
      <VeticalLine />
      <BaseLine />
    </RelativeContainer>
  );
}
export default HangmanDrawing;
