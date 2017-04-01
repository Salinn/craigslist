import * as types from '../actions/actionTypes';
import initialState from './initialState';

const error = (action) => {
    return null;//action.payload || { message: action.payload.message //2nd one is network or server down errors
};

export default function listingReducer(state = initialState.listingsMetadata, action) {
    switch (action.type) {
        //Index Cases
        case types.FETCH_LISTINGS:
            return {...state, listingsMetadata: { listings: [], error: null, loading: true } };
        case types.FETCH_LISTINGS_SUCCESS:
            return {...state, listingsMetadata: { listings: action.payload, error: null, loading: false } };
        case types.FETCH_LISTINGS_FAILURE:
            return {...state, listingsMetadata: { listings: [], error: error, loading: false } };
        case types.RESET_LISTINGS:
            return {...state, listingsMetadata: { listings: [], error: null, loading: false } };

        //Show Cases
        case types.FETCH_LISTING:
            return {...state, listingMetadata: { ...state.listingMetadata, error: null, loading: true } };
        case types.FETCH_LISTING_SUCCESS:
            return {...state, listingMetadata: { listing: action.payload, error: null, loading: false } };
        case types.FETCH_LISTING_FAILURE:
            return {...state, listingMetadata: { listing: null, error: error, loading: false } };
        case types.RESET_LISTING:
            return {...state, listingMetadata: { listing: null, error: null, loading: false } };

        //Create Cases
        case types.CREATE_LISTING:
            return {...state, newListingMetadata: { ...state.newListingMetadata, error: null, loading: true } };
        case types.CREATE_LISTING_SUCCESS:
            return {...state, newListingMetadata: { listing: action.payload, error: null, loading: false } };
        case types.CREATE_LISTING_FAILURE:
            return {...state, newListingMetadata: { listing: null, error: error, loading: false } };
        case types.RESET_NEW_LISTING:
            return {...state, newListingMetadata: { listing: null, error: null, loading: false } };

        //Delete Cases
        case types.DELETE_LISTING:
            return {...state, deletedListingMetadata: { ...state.deletedListingMetadata, error: null, loading: true } };
        case types.DELETE_LISTING_SUCCESS:
            return {...state, deletedListingMetadata: { listing: action.payload, error: null, loading: false } };
        case types.DELETE_LISTING_FAILURE:
            return {...state, deletedListingMetadata: { listing: null, error: error, loading: false } };
        default:
            return state;
    }
}
