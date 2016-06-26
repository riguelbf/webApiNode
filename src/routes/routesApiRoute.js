import CustomerRoute from './customerRoute.js';

/**
 * Responsible for providing all routes
 */
class RoutesApi {

    constructor() {
        return [
            new CustomerRoute()
        ];
    }
};

export default RoutesApi;