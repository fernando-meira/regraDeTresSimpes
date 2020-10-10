import React, { useContext } from 'react';
import { lighten } from 'polished';
import Swicth from 'react-switch';
import { ThemeContext } from 'styled-components';

import logo from '../../styles/assets/images/logo.png';

import { Container } from './styles';

function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <img src={logo} alt="logo" />

      <Swicth
        onChange={toggleTheme}
        onColor={colors.primary}
        checked={title === 'light'}
        offColor={lighten(0.2, colors.background)}
      />
    </Container>
  );
}

export default Header;
