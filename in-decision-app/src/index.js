import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import IndecisionApp from './IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.css';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
