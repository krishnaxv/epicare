import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './config/routes';
import registerServiceWorker from './registerServiceWorker';
import { checkIfAuth } from './services/firebaseService';

// Global style imports
import 'normalize.css';
import 'material-components-web/dist/material-components-web.css';

// Styles
import './styles/index.css';

const history = createBrowserHistory();

const checkAuth = () => {
  const isAuth = checkIfAuth();
  if (!isAuth) {
    history.push('/login');
  }
};

ReactDOM.render(<Routes />, document.querySelector('#root'));
registerServiceWorker();
