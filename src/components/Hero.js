import React from 'react';
import styled from 'styled-components';
import hero from '../images/hero.jpg'

const Header = styled.h1`
  font-size: 90px;
  color: #fff;
  font-weight: 200;
`;

const Container = styled.div`
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hero}), no-repeat center top;
  background-size: cover;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hero = ({ header }) => {
  return (
    <Container>
      <Header>
        {header}
      </Header>
    </Container>
  );
}

export default Hero;
