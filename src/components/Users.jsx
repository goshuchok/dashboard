import React, { useState } from 'react';
import Rectangle from 'image/rectangle.svg';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  height: 224px;
  width: 256px;
  border-radius: 0px;
  display: flex;
  justify-content: space-around;
`;

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;
  width: 96px;
  height: 224px;
  justify-content: inherit;
`;

const PStyle = styled.p`
  font-family: Metropolis;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0px;
  color: white;
`;

const SpanStyle = styled.span`
  font-family: Metropolis;
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

const ImgStyle = styled.img`
  padding-right: 10px;
`;
const Flex = styled.div`
  display: flex;
`;

const Users = ({ data }) => {
  const dataStats = [
    {
      img: { Rectangle },
      title: 'Rating 94%',
      sales: '116 sales',
    },
    {
      img: { Rectangle },
      title: 'Rating 94%',
      sales: '116 sales',
    },
    {
      img: { Rectangle },
      title: 'Rating 94%',
      sales: '116 sales',
    },
    {
      img: { Rectangle },
      title: 'Rating 94%',
      sales: '116 sales',
    },
  ];
  const [icon, setIcon] = useState({ index: 0, color: false });
  const handleClick = (index) => {
    let newIcon = { ...icon };
    newIcon.color = index !== newIcon.index ? true : !newIcon.color;
    newIcon.index = index;
    setIcon(newIcon);
  };
  return (
    <WrapperDiv>
      <DivStyle>
        {dataStats.map((data, index) => {
          return (
            <Flex>
              <ImgStyle
                onClick={() => handleClick(index)}
                src={data.img.Rectangle}
                alt="rectangle"
              />
              <PStyle>
                {data.title}
                <br />
                <SpanStyle>{data.sales}</SpanStyle>
              </PStyle>
            </Flex>
          );
        })}
      </DivStyle>
      <DivStyle>
        {data.users.map((user) => {
          return (
            <>
              <PStyle>
                {user.name}
                <br />
                <SpanStyle>{user.date}</SpanStyle>
              </PStyle>
            </>
          );
        })}
      </DivStyle>
    </WrapperDiv>
  );
};

export default Users;
