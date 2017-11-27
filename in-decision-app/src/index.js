import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';
import IndecisionApp from './IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
