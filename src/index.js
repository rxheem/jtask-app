import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Using Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'modernizr/bin/modernizr';

// Animate.css
import 'animate.css';

// Then we finally use normalize
import 'normalize.css';

// Masterr JS file
import './master.js';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
