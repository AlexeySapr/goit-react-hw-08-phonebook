import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import 'index.css';
import App from 'App';
import ToggleThemeMode from 'components/toggleThemeMode/ToggleThemeMode';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleThemeMode>
        <App />
      </ToggleThemeMode>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
