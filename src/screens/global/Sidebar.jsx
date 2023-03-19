import React, { useState } from 'react';
import Logo from 'image/Logo.svg';
import Dashboard from 'image/dashboard.svg';
import Cards from 'image/cards.svg';
import Product from 'image/product.svg';
import WearTear from 'image/wear-tear.svg';
import Games from 'image/games.svg';
import Settings from 'image/settings.svg';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  width: 84px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background: #242731;
  margin-right: 15px;
`;

const LogoStyle = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 0px;
  margin-bottom: 20px;
`;

const StyledDiv = styled.div`
  width: 100px;
  text-align: center;
  padding: 5px 0px;
  .icon__box {
    display: flex;
    flex-direction: column;
    img {
      border-radius: 40px;
      margin-bottom: 15px;
      padding: 12px;
      width: 48px;
      height: 48px;
      margin-right: 10px;
      background-color: #191c23;
    }
    img:nth-child(${({ icon }) => icon.index + 1}) {
      background-color: ${({ icon }) => (icon.color ? '#8941FF' : 'none')};
    }
  }
`;

const Sidebar = () => {
  const [icon, setIcon] = useState({ index: 0, color: false });
  const icons = [Dashboard, Cards, Product, WearTear, Games, Settings];
  const handleClick = (index) => {
    let newIcon = { ...icon };
    newIcon.color = index !== newIcon.index ? true : !newIcon.color;
    newIcon.index = index;
    setIcon(newIcon);
  };

  return (
    <WrapperDiv>
      <StyledDiv icon={icon}>
        <LogoStyle src={Logo} alt="Logo" />
        <div className="icon__box">
          {icons.map((icon, index) => (
            <img
              src={icon}
              key={icon}
              alt="index"
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </StyledDiv>
    </WrapperDiv>
  );
};

export default Sidebar;
