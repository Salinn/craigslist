import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ListingsIndex from './pages/ListingsIndex';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ListingsIndex} />
    </Route>
);