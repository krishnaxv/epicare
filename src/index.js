import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes';
import registerServiceWorker from './registerServiceWorker';

// Global style imports
import 'normalize.css';
import 'material-components-web/dist/material-components-web.css';

// Styles
import './styles/index.css';

ReactDOM.render(<Routes />, document.querySelector('#root'));
registerServiceWorker();
