import CustomerRoute from './customerRoute.js';
import MovieRoute from './movieRoute';
import RentalRoute from './rentalRoute';

/**
 * Responsible for providing all routes
 */
class RoutesApi {

    constructor() {
        return [
            new CustomerRoute(),
            new MovieRoute(),
            new RentalRoute()
        ];
    }
};

export default RoutesApi;