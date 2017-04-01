//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
//Routes
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './assets/stylesheets/index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
