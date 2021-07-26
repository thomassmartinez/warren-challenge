import React from 'react';
import logo from 'assets/images/logo.png';
import {Container, Content} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo warren" />
        <h1>Warren Corretora</h1>
      </Content>
    </Container>
  );
};
