import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './functions/usePersistedState';

import GlobalStyle from './styles/global';
import Main from './pages/Main';

function App() {
  const [theme, setTheme] = usePersistedState('theme', dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'dark' ? light : dark);
  }, [theme.title, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
