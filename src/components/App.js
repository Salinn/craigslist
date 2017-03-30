//React
import React, { Component } from 'react';
//Redux
import configureStore from '../store/configureStore.js';
import { Provider } from 'react-redux';
//Routes
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routes} />
            </Provider>
        );
    }
}

export default App;
