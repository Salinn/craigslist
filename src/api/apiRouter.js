export default function apiRouter(api_required) {
    if (process.env.NODE_ENV === 'production' || (location && location.hostname !== 'localhost')) {
    switch (api_required) {
        case 'listingApi':
            return module.exports = require('./prod/listingApi.prod');
    }
    } else {
        switch (api_required) {
            case 'listingApi':
                return module.exports = require('./dev/listingApi.dev');
        }
    }
}