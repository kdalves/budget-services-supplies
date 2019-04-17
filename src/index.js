import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App.js';
import * as serviceWorker from './services/serviceWorker.js';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
