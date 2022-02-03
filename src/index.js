import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants/theme';
import 'index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
