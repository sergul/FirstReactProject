import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './router/AppRouter';
import FontLoader from './fonts/FontLoader';

FontLoader();

setTimeout(() => {
    ReactDOM.render(<AppRouter />, document.getElementById('root'));
}, 0);

registerServiceWorker();