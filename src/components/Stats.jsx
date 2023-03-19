import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 32px 16px;
  gap: 48px;
  justify-content: space-between;
`;

const Paragraph = styled.p`
  font-family: Metropolis;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const Label = styled.label`
  font-family: Metropolis;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff99;
`;

const Select = styled.select`
  background: #242731;
  color: white;
  border: none;
  font-family: Metropolis;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const Option = styled.option`
  height: 168px;
  width: 300px;
  left: 980px;
  top: 48px;
  border-radius: 8px;
  padding: 4px;
  background: #242731;
`;

const Stats = (props) => {
  return (
    <WrapperDiv>
      <Paragraph>Game Stats</Paragraph>
      <Label>
        {props.title}
        <Select>
          <Option value="someOption">{props.value}</Option>
          <Option value="otherOption">Other option</Option>
          <Option value="otherOption">Other option</Option>
          <Option value="otherOption">Other option</Option>
          <Option value="otherOption">Other option</Option>
        </Select>
      </Label>
    </WrapperDiv>
  );
};

export default Stats;
