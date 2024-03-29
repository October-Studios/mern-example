import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {store} from './state/store';
import App from './App';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
);
