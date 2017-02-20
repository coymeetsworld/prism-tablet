import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.jsx';
import {configure} from 'configureStore';

import sass from 'applicationStyles';
import normalize from 'normalize-scss';

let store = configure();

render(
  <Provider store={store}>
    <App/>  
  </Provider>,
  document.getElementById('root')
);

