import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/phonebook';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getTheme } from 'constants/theme';

const ToggleThemeMode = ({ children }) => {
  const themeMode = useSelector(selectors.getThemeMode);
  const theme = useMemo(() => createTheme(getTheme(themeMode)), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ToggleThemeMode;
