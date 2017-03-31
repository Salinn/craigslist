import * as types from './actionTypes';

//Listings Actions
export function fetchListings() {
    return {
        type: types.FETCH_LISTINGS
    }
}

export function fetchListingsSuccess() {
    return {
        type: types.FETCH_LISTINGS_SUCCESS
    }
}

export function fetchListingsFailures() {
    return {
        type: types.FETCH_LISTINGS_FAILURE
    }
}

export function resetListings() {
    return {
        type: types.RESET_LISTINGS
    }
}


//Listing Actions
export function fetchListing() {
    return {
        type: types.FETCH_LISTING
    }
}

export function fetchListingSuccess() {
    return {
        type: types.FETCH_LISTING_SUCCESS
    }
}

export function fetchListingFailures() {
    return {
        type: types.FETCH_LISTING_FAILURE
    }
}

export function resetListing() {
    return {
        type: types.RESET_LISTING
    }
}

//Create Listing
export function createListing() {
    return {
        type: types.CREATE_LISTING
    }
}

export function createListingSuccess() {
    return {
        type: types.CREATE_LISTING_SUCCESS
    }
}

export function createListingFailure() {
    return {
        type: types.CREATE_LISTING_FAILURE
    }
}

export function resetNewListing() {
    return {
        type: types.RESET_NEW_LISTING
    }
}

//Delete Listing
export function deleteListing() {
    return {
        type: types.DELETE_LISTING
    }
}

export function deleteListingSuccess() {
    return {
        type: types.DELETE_LISTING_SUCCESS
    }
}

export function deleteListingFailure() {
    return {
        type: types.DELETE_LISTING_FAILURE
    }
}