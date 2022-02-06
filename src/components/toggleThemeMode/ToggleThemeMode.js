import { createContext, useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Switch from '@mui/material/Switch';
import { getTheme } from 'constants/theme';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ToggleThemeMode = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Switch
          onChange={colorMode.toggleColorMode}
          inputProps={{ 'aria-label': 'controlled' }}
        /> */}
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleThemeMode;
