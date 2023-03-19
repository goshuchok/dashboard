import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  height: 104px;
  width: 300px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  padding: 20px;
  background: #242731;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
const TextStyle = styled.div`
  margin-left: 20px;
`;
const ValueStyle = styled.p`
  font-family: Metropolis;
  font-size: 44px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;
const NameStyle = styled.p`
  font-family: Metropolis;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #a2a4a8;
  padding: 0;
  margin: 0;
`;
const ImageStyle = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 10px;
`;

const Card = (props) => {
  return (
    <WrapperDiv>
      <ImageStyle src={props.icon} alt="imag" />
      <TextStyle>
        <ValueStyle>{props.value}</ValueStyle>
        <NameStyle>{props.name}</NameStyle>
      </TextStyle>
    </WrapperDiv>
  );
};

export default Card;
