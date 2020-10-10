import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import Main from './pages/Main';

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'dark' ? light : dark);
  }, [theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
