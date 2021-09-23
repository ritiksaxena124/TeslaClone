import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Zoom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftBtn>{props.leftBtnText}</LeftBtn>
            {/* If Right Button Text exists then only create a Right Button Else Don't */}
            {props.rightBtnText && <RightBtn>{props.rightBtnText}</RightBtn>}
          </ButtonGroup>
          {props.flag && <DownArrow src="images/down-arrow.svg"></DownArrow>}
        </Buttons>
      </Zoom>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;
`;
const RightBtn = styled(LeftBtn)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
