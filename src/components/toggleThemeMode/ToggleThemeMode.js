import { createContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/phonebook';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getTheme } from 'constants/theme';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ToggleThemeMode = ({ children }) => {
  const themeMode = useSelector(selectors.getThemeMode);
  const theme = useMemo(() => createTheme(getTheme(themeMode)), [themeMode]);

  return (
    <ColorModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleThemeMode;
