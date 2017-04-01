import {combineReducers} from 'redux';
import listings from './listingReducer';

const rootReducer = combineReducers({
    listings
});

export default rootReducer;
