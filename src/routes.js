import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './pages/Home'
import ListingsIndex from './pages/ListingsIndex';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/listings" component={ListingsIndex}/>
    </Route>
);