import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ecovillages from './ecovillages.json';

ReactDOM.render(
    <App
        ecovillages={ecovillages}
    />
, document.getElementById('root'));

serviceWorker.unregister();
