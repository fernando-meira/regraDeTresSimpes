import React from 'react';

import { Header } from '../../components';

import { Container } from './styles';

function Main({ toggleTheme }) {
  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
    </Container>
  );
}

export default Main;
